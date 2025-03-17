# Todo App

This is a full-stack Todo application with user authentication, built using Node.js, Express, MongoDB, React, and Axios.

## Features
- User authentication (register, login)
- Create, read, update, and delete (CRUD) todos
- Protected routes for managing todos
- JWT-based authentication
- Persistent session handling using localStorage

## Backend Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```sh
   https://github.com/Manishchandra18/TodoListApp.git
   cd todo-app
   ```
2. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5050`

## Frontend Setup

### Installation
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## API Routes

### User Routes
- `POST /users/register` - Register a new user
- `POST /users/login` - Login a user and get a token
- `GET /users` - Fetch all users
- `GET /users/:id` - Get a user by ID
- `DELETE /users/:id` - Delete a user

### Todo Routes
- `POST /todos` - Create a new todo (Auth required)
- `GET /todos` - Fetch all todos of the logged-in user
- `GET /todos/:id` - Fetch a specific todo
- `PUT /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

## Running the App
1. Ensure MongoDB is running locally or using an online service.
2. Start the backend server (`npm start` in `backend` folder).
3. Start the frontend (`npm start` in `frontend` folder).
4. Open `http://localhost:3000` in your browser.


## License
This project is open-source under the MIT License.

Happy coding! 🚀

