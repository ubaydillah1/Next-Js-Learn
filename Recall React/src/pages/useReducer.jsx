import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }

        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <div style={{ margin: "100px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div>
        {todos.map(({ id, name, complete }, index) => {
          return (
            <ul key={index} style={{ margin: "10px", listStyle: "none" }}>
              <li>{id}</li>
              <li>{name}</li>
              <li>{complete ? "Done" : "Not yet"}</li>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } })
                }
              >
                Done Task
              </button>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } })
                }
              >
                Delete Task
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default UseReducer;
