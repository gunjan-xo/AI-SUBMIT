const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const { sendConfirmationEmail, sendAdminNotification } = require('./mailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize database
db.init();

// ===== API ENDPOINTS =====

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Submit tool
app.post('/api/tools/submit', async (req, res) => {
  try {
    const { name, url, description, plan, email } = req.body;

    // Validation
    if (!name || !url || !description || !plan || !email) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Validate URL
    try {
      new URL(url);
    } catch (err) {
      return res.status(400).json({ 
        error: 'Invalid URL format' 
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Check valid plan
    const validPlans = ['free', 'standard', 'featured', 'premium'];
    if (!validPlans.includes(plan)) {
      return res.status(400).json({ 
        error: 'Invalid plan selected' 
      });
    }

    // Generate submission ID
    const submissionId = uuidv4();
    const submittedAt = new Date().toISOString();
    const status = 'pending'; // pending, approved, rejected

    // Save to database
    await db.saveSubmission({
      id: submissionId,
      name,
      url,
      description,
      plan,
      email,
      status,
      submittedAt
    });

    // Send confirmation email to user
    await sendConfirmationEmail(email, name, submissionId);

    // Send notification to admin
    await sendAdminNotification({ name, url, description, plan, email, submissionId });

    res.status(201).json({
      success: true,
      message: 'Tool submitted successfully! We will review it shortly.',
      submissionId
    });

  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ 
      error: 'Failed to submit tool. Please try again later.' 
    });
  }
});

// Get submission status
app.get('/api/tools/submission/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const submission = await db.getSubmission(id);

    if (!submission) {
      return res.status(404).json({ 
        error: 'Submission not found' 
      });
    }

    res.json({
      id: submission.id,
      name: submission.name,
      status: submission.status,
      submittedAt: submission.submittedAt
    });

  } catch (error) {
    console.error('Fetch submission error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch submission' 
    });
  }
});

// Get all submissions (admin only - in production, add authentication)
app.get('/api/admin/submissions', async (req, res) => {
  try {
    // In production, verify admin token here
    const submissions = await db.getAllSubmissions();
    res.json(submissions);
  } catch (error) {
    console.error('Fetch submissions error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch submissions' 
    });
  }
});

// Update submission status (admin only)
app.patch('/api/admin/submissions/:id', async (req, res) => {
  try {
    // In production, verify admin token here
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ 
        error: 'Invalid status' 
      });
    }

    const updated = await db.updateSubmissionStatus(id, status);

    if (!updated) {
      return res.status(404).json({ 
        error: 'Submission not found' 
      });
    }

    res.json({
      success: true,
      message: `Submission ${status} successfully`
    });

  } catch (error) {
    console.error('Update submission error:', error);
    res.status(500).json({ 
      error: 'Failed to update submission' 
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

module.exports = app;
