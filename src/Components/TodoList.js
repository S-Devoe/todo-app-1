import { useEffect, useState } from "react";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  const [showTodo, setShowTodo] = useState([todos]);
  const [active, setActive] = useState("all");
  const [itemsLeft, setItemsLeft] = useState(
    todos.filter((todo) => todo.completed === false).length
  );

  const placeText = active === "completed" ? "closed task" : "task";

  useEffect(() => {
    setShowTodo(todos);
    setItemsLeft(todos.filter((todo) => todo.completed === false).length);
  }, [todos]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    setShowTodo(todos)
  }

  const removeCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false ))
    setShowTodo(todos)
  }

  return (
    <>
      <section className="todo-list-section">
        {showTodo.length < 1 ? (
          <p className="info-text">There is no {placeText}</p>
        ) : (
          <TodoItem
            todos={todos}
            setTodos={setTodos}
            showTodo={showTodo}
            setShowTodo={setShowTodo}
            removeTodo={removeTodo}
          />
        )}
        <div className="todo-filter">
          <div className="item-left">{itemsLeft} items left</div>
          <div className="control-btn control-for-desktop">
            <TodoFilter
              active={active}
              setActive={setActive}
              setShowTodo={setShowTodo}
              todos={todos}
            />
          </div>
          <div className="control-btn" onClick={removeCompleted}>
            <button>Clear completed</button>
          </div>
        </div>

        
      </section>
      <div className="control-btn control-for-mobile">
          <TodoFilter
            active={active}
            setActive={setActive}
            setShowTodo={setShowTodo}
            todos={todos}
          />
        </div>
    </>
  );
}
export default TodoList;
