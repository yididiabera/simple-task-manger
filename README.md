# 🚀 Task Manager API

A simple REST API for managing tasks using **Node.js & Express**.

## ✨ Features

- ✅ CRUD operations (Create, Read, Update, Delete)
- 🔒 API key authentication for security
- 📂 JSON file storage (no database needed)
- 🔍 Filtering tasks by **status** and **title**

---

## 🛠 Installation

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/yididiabera/task-manager-api.git
cd task-manager-api/backend
2️⃣ Install dependencies
bash
npm install
3️⃣ Start the server
bash
npm start
The API will now be running on http://localhost:3000 🚀

🔑 Authentication
All endpoints require an API key, which should be included in the request headers:

🛠 Postman Setup
1️⃣ Open Postman 2️⃣ Create a new collection for Task Manager API 3️⃣ Add the following requests:

🔑 Authentication
All requests must include the following header:

Key: X-API-Key  
Value: my-secret-key-123  
You can set this globally in Postman by:

Navigating to the Authorization tab

Selecting Header as the key type

Entering your API key

📌 API Endpoints
GET - Fetch All Tasks
Method: GET

URL: http://localhost:3000/api/tasks

Headers:

X-API-Key: my-secret-key-123
Expected Response: JSON list of tasks

GET - Filter Tasks
To filter tasks by status or title, use query params:

URL Examples:

http://localhost:3000/api/tasks?status=pending
http://localhost:3000/api/tasks?title=math
Method: GET

Headers: Include API Key

Expected Response: Filtered task list

POST - Create a Task
Method: POST

URL: http://localhost:3000/api/tasks

Headers:

X-API-Key: my-secret-key-123  
Content-Type: application/json
Body (JSON - raw):

json
{
  "title": "New Task",
  "description": "Finish project"
}
Expected Response: Task created with an ID

PUT - Update a Task
Method: PUT

URL: http://localhost:3000/api/tasks/1 (replace 1 with actual task ID)

Headers:

X-API-Key: my-secret-key-123  
Content-Type: application/json
Body (JSON - raw):

json
{
  "status": "completed"
}
Expected Response: Updated task with new status

DELETE - Remove a Task
Method: DELETE

URL: http://localhost:3000/api/tasks/1

Headers:

X-API-Key: my-secret-key-123
Expected Response: 204 No Content (Task deleted)

📜 License
This project is MIT licensed—modify, extend, and use freely! 🚀📜 License
This project is MIT licensed. Feel free to modify and use it! 🚀
