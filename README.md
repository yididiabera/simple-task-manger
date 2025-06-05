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

bash
-H "X-API-Key: my-secret-key-123"
Valid API keys are stored in src/data/api-keys.json:

json
["my-secret-key-123", "team-key-456"]
📌 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks (supports filtering)
POST	/api/tasks	Create a new task (title required)
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task
🔎 Filtering Options
You can filter tasks by status and title:

bash
GET /api/tasks?status=pending
GET /api/tasks?title=math
📝 Example Requests
Create a Task
bash
curl -X POST -H "X-API-Key: my-secret-key-123" \
     -H "Content-Type: application/json" \
     -d '{"title":"New Task", "description":"Finish project"}' \
     http://localhost:3000/api/tasks
Get All Tasks
bash
curl -X GET -H "X-API-Key: my-secret-key-123" http://localhost:3000/api/tasks
Update a Task
bash
curl -X PUT -H "X-API-Key: my-secret-key-123" \
     -H "Content-Type: application/json" \
     -d '{"status":"completed"}' \
     http://localhost:3000/api/tasks/1
Delete a Task
bash
curl -X DELETE -H "X-API-Key: my-secret-key-123" http://localhost:3000/api/tasks/1
📜 License
This project is MIT licensed. Feel free to modify and use it! 🚀
