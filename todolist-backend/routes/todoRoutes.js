const express = require("express");
const { createTodo, getTodos, getTodoById, updateTodo, deleteTodo } = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createTodo);
router.get("/", authMiddleware, getTodos);
router.get("/:id", authMiddleware, getTodoById);
router.put("/:id", authMiddleware, updateTodo);
router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;