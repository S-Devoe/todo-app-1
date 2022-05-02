import { useEffect, useState } from "react";
import "./App.css";
import TodoHeader from "./Components/TodoHeader";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import data from './data'
import Footer from "./Components/Footer";
import Me from "./Components/Me";


function App() {
  const [todos, setTodos] = useState(data);
  const [theme, setTheme] = useState(true);
  // const [status, setStatus] = useState("all"); //for completed
  // const [filterTodos, setFilterTodos] = useState(todos); //for deleting

  return (
    <div className={`app-wrapper ${theme ? "light-theme" : "dark-theme"}`}>
      <div className="container">
        <TodoHeader theme={theme} setTheme={setTheme} />
        <main className="main-todo">
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
          />
        </main>
        <Footer />
        <Me />
      </div>
    </div>
  );
}

export default App;
