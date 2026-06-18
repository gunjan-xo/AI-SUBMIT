const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Send confirmation email to user
async function sendConfirmationEmail(userEmail, toolName, submissionId) {
  if (!process.env.EMAIL_USER) {
    console.log(`📧 Email notifications disabled. Submission ${submissionId} created.`);
    return;
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: `✅ Tool Submission Received - ${toolName}`,
      html: `
        <h2>Thank You for Your Submission!</h2>
        <p>Hi,</p>
        <p>We've received your submission for <strong>${toolName}</strong> to be listed on AI-TOOLS Directory.</p>
        
        <h3>Submission Details:</h3>
        <ul>
          <li><strong>Submission ID:</strong> ${submissionId}</li>
          <li><strong>Status:</strong> Under Review</li>
        </ul>
        
        <p>Our editorial team will review your submission shortly. You can track your submission status using the link below:</p>
        <p><a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/track.html?id=${submissionId}">Check Submission Status</a></p>
        
        <h3>What Happens Next?</h3>
        <ul>
          <li>Our team will review your tool within 1-7 business days depending on your plan</li>
          <li>We'll send you an email update once the review is complete</li>
          <li>If approved, your tool will appear in the directory</li>
          <li>If we have questions, we'll contact you at this email address</li>
        </ul>
        
        <p><strong>Need Help?</strong><br>
        Reply to this email or contact us at support@ai-tools.com</p>
        
        <p>Best regards,<br>
        AI-TOOLS Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Confirmation email sent to ${userEmail}`);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

// Send notification to admin
async function sendAdminNotification(submission) {
  if (!process.env.ADMIN_EMAIL) {
    console.log(`📧 Admin notification disabled. New submission: ${submission.name}`);
    return;
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🎯 New Tool Submission: ${submission.name}`,
      html: `
        <h2>New Tool Submission</h2>
        
        <h3>Submission Details:</h3>
        <ul>
          <li><strong>ID:</strong> ${submission.submissionId}</li>
          <li><strong>Tool Name:</strong> ${submission.name}</li>
          <li><strong>URL:</strong> <a href="${submission.url}" target="_blank">${submission.url}</a></li>
          <li><strong>Plan:</strong> ${submission.plan}</li>
          <li><strong>Contact Email:</strong> ${submission.email}</li>
          <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        
        <h3>Description:</h3>
        <p>${submission.description}</p>
        
        <p><a href="${process.env.ADMIN_PANEL_URL || 'http://localhost:5000'}/admin">Review in Admin Panel</a></p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Admin notification sent to ${process.env.ADMIN_EMAIL}`);
  } catch (error) {
    console.error('Error sending admin notification:', error);
  }
}

module.exports = {
  sendConfirmationEmail,
  sendAdminNotification
};
