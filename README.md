# 🚀 Project Management Tool

A modern full-stack MERN Project Management Dashboard with authentication, task tracking, analytics, progress bars, and beautiful UI.

---

# ✨ Features

✅ User Authentication (Login/Register)  
✅ JWT Authentication  
✅ Create Projects  
✅ Add Tasks  
✅ Task Completion Tracking  
✅ Progress Bars  
✅ Analytics Dashboard  
✅ Responsive UI  
✅ Toast Notifications  
✅ Modern Sidebar Navigation  
✅ Beautiful Glassmorphism Design  

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Axios
- React Icons
- React Toastify

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas

## Authentication
- JWT (JSON Web Token)

---<img width="960" height="540" alt="Screenshot 2026-05-21 091030" src="https://github.com/user-attachments/assets/9b4023df-780a-4d4e-a9f2-6d1299560153" />
<img width="960" height="540" alt="Screenshot 2026-05-21 090337" src="https://github.com/user-attachments/assets/922c5b4b-52fc-47a3-92b2-9495ad346b1b" />
<img width="960" height="540" alt="Screenshot 2026-05-21 090323" src="https://github.com/user-attachments/assets/e48dec63-8e8b-4c74-be70-7d5789610dc6" />


## Login Page
Modern glassmorphism login UI.

## Dashboard
Professional project dashboard with analytics and task management.

---

# 📂 Folder Structure

project-management-tool/
│
├── client/
│ ├── src/
│ ├── public/
│
├── server/
│
├── package.json
└── README.md

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/DevarapalliSravani05/project-management-tool.git
2️⃣ Install Frontend Dependencies
Bash
cd client
npm install
3️⃣ Install Backend Dependencies
Bash
cd ../server
npm install
🔑 Environment Variables
Create .env file inside server folder.
Environment
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
▶️ Run Project
Start Backend
Bash
cd server
npm start
Start Frontend
Bash
cd client
npm start
🌐 API Endpoints
Auth Routes
Method
Endpoint
Description
POST
/api/auth/register
Register User
POST
/api/auth/login
Login User
Project Routes
Method
Endpoint
Description
GET
/api/projects
Get Projects
POST
/api/projects
Create Project
DELETE
/api/projects/:id
Delete Project
Task Routes
Method
Endpoint
Description
POST
/api/projects/:id/tasks
Add Task
PUT
/api/projects/:id/tasks/:taskIndex
Update Task Status
🎯 Future Improvements
Dark / Light Mode
Drag & Drop Tasks
Team Collaboration
Due Date Notifications
Search & Filter
File Uploads
💼 Author
Made with ❤️ by Sravani
⭐ If you like this project
Give this repository a star ⭐ on GitHub.
