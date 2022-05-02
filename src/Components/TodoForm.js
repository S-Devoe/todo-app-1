import { useState } from "react"

const generateId = (array) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};

function TodoForm({todos, setTodos}) {

    const [todoInput, setTodoInput] = useState("")

    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todoInput){
            const newTodo = {
                id: generateId(todos),
                content: todoInput.trim(),
                completed: false,
            }
            setTodos([...todos, newTodo]);
            setTodoInput("");
        }
    }


  return (
    <div className="form-wrapper">
        <div className="side-checkbox" onClick={handleSubmit}>
            <span className="checkbox">
            </span>
        </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput"></label>
            <input 
            type="text"
            className="todo-input"
            name="todoInput"
            placeholder="Create a new todo..."
            value={todoInput}
            onChange={handleChange}
            />
            
        </form>
    </div>
  )
}
export default TodoForm