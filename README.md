````markdown
# Task Manager API

A minimal REST API for task management with Node.js/Express.

## Features

- CRUD operations for tasks
- API key authentication
- JSON file storage
- Basic filtering

## Installation

1. Clone repo:

```bash
git clone https://github.com/yididiabera/task-manager-api.git
```
````

2. Install dependencies:

```bash
cd simple-task-manager/backend
npm install
```

3. Start server:

```bash
npm start
```

## Usage

**All endpoints require API key header:**

```bash
-H "X-API-Key: secret-key-123"
```

**Endpoints:**

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task (requires title)
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

**Example:**

```bash
curl -X POST -H "X-API-Key: my-secret-key-123" -H "Content-Type: application/json" -d '{"title":"New task"}' http://localhost:3000/api/tasks
```

## License

MIT

```

```
