import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoId, setTodoId] = useState();

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      desc: item,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setItem("");
  };

  const updateTodo = () => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[todoId].desc = item;
      return updatedTodos;
    });
    setIsUpdate(false);
    setItem("");
  };

  const todoUpdate = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    setIsUpdate(true);
    setItem(todos[todoIndex].desc);
    setTodoId(todoIndex);
  };

  const completedTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[todoIndex].isCompleted = true;
      return updatedTodos;
    });
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="Input todo here"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        {!isUpdate ? (
          <button onClick={addTodo}>Add Todo</button>
        ) : (
          <button onClick={updateTodo}>Update Todo</button>
        )}
        <button onClick={() => setTodos([])}>Clear Todo</button>
      </div>
      <ul>
        {!todos.length
          ? "Nothing ..."
          : todos.map((todo) => (
              <li key={todo.id}>
                <span
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.desc}
                </span>
                | <button onClick={() => todoUpdate(todo.id)}>Update</button>
                <button
                  disabled={todo.isCompleted}
                  onClick={() => completedTodo(todo.id)}
                >
                  Completed
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
