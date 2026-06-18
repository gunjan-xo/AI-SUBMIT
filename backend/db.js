const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'submissions.db');
const db = new sqlite3.Database(dbPath);

// Promisify database operations
const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
};

const dbAll = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const dbGet = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

// Initialize database schema
async function init() {
  try {
    await dbRun(`
      CREATE TABLE IF NOT EXISTS submissions (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        url TEXT NOT NULL,
        description TEXT NOT NULL,
        plan TEXT NOT NULL,
        email TEXT NOT NULL,
        status TEXT DEFAULT 'pending',
        submittedAt TEXT NOT NULL,
        updatedAt TEXT
      )
    `);
    console.log('✅ Database initialized');
  } catch (error) {
    console.error('Database init error:', error);
  }
}

// Save new submission
async function saveSubmission(submission) {
  const sql = `
    INSERT INTO submissions (id, name, url, description, plan, email, status, submittedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [
    submission.id,
    submission.name,
    submission.url,
    submission.description,
    submission.plan,
    submission.email,
    submission.status,
    submission.submittedAt
  ];
  
  await dbRun(sql, params);
  return submission;
}

// Get submission by ID
async function getSubmission(id) {
  const sql = 'SELECT * FROM submissions WHERE id = ?';
  return await dbGet(sql, [id]);
}

// Get all submissions
async function getAllSubmissions() {
  const sql = 'SELECT * FROM submissions ORDER BY submittedAt DESC';
  return await dbAll(sql);
}

// Update submission status
async function updateSubmissionStatus(id, status) {
  const sql = 'UPDATE submissions SET status = ?, updatedAt = ? WHERE id = ?';
  const now = new Date().toISOString();
  await dbRun(sql, [status, now, id]);
  
  const submission = await getSubmission(id);
  return submission;
}

// Get submissions by status
async function getSubmissionsByStatus(status) {
  const sql = 'SELECT * FROM submissions WHERE status = ? ORDER BY submittedAt DESC';
  return await dbAll(sql, [status]);
}

// Get submissions by plan
async function getSubmissionsByPlan(plan) {
  const sql = 'SELECT * FROM submissions WHERE plan = ? ORDER BY submittedAt DESC';
  return await dbAll(sql, [plan]);
}

module.exports = {
  init,
  saveSubmission,
  getSubmission,
  getAllSubmissions,
  updateSubmissionStatus,
  getSubmissionsByStatus,
  getSubmissionsByPlan
};
