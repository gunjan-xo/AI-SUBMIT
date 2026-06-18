# AI-TOOLS Backend - Tool Submission API

This is the backend API for the AI-TOOLS Directory submission system.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file based on `.env.example`:
```
PORT=5000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@example.com
FRONTEND_URL=http://localhost:3000
```

**Email Setup (Gmail):**
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in `EMAIL_PASSWORD`

### 3. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Submit Tool
**POST** `/api/tools/submit`

Request body:
```json
{
  "name": "Tool Name",
  "url": "https://example.com",
  "description": "Tool description",
  "plan": "standard",
  "email": "user@example.com"
}
```

Response:
```json
{
  "success": true,
  "message": "Tool submitted successfully!",
  "submissionId": "uuid-here"
}
```

### Check Submission Status
**GET** `/api/tools/submission/:submissionId`

Response:
```json
{
  "id": "uuid-here",
  "name": "Tool Name",
  "status": "pending",
  "submittedAt": "2024-01-01T10:00:00.000Z"
}
```

### Get All Submissions (Admin)
**GET** `/api/admin/submissions`

### Update Submission Status (Admin)
**PATCH** `/api/admin/submissions/:submissionId`

Request body:
```json
{
  "status": "approved"
}
```

Valid statuses: `pending`, `approved`, `rejected`

## Database

SQLite database is automatically created at `submissions.db`

Tables:
- `submissions` - Stores all tool submissions with status tracking

## Features

- ✅ Form validation (email, URL, required fields)
- ✅ SQLite database storage
- ✅ Automatic email confirmations
- ✅ Admin notifications
- ✅ Submission status tracking
- ✅ CORS enabled for frontend communication
- ✅ Error handling and logging

## Next Steps

1. Update `frontend/script.js` to send submissions to this API
2. Create an admin dashboard for managing submissions
3. Add payment integration (Stripe) for paid plans
4. Add authentication for admin endpoints
