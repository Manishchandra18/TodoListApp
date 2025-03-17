import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { getTodos } from "../api";

const Todos = ({ token }) => {
  const [todos, setTodos] = useState([]);

  // Fetch todos when component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await getTodos(token);
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [token]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm token={token} onAdd={addTodo} />
      <TodoList token={token} todos={todos} onDelete={removeTodo} />
    </div>
  );
};

export default Todos;