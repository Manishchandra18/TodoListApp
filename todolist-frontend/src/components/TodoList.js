import { deleteTodo } from "../api";

const TodoList = ({ token, todos, onDelete }) => {
  const handleDelete = async (id) => {
    await deleteTodo(id, token);
    onDelete(id);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          {todo.title} <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;