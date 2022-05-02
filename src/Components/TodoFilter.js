function TodoFilter({active, setActive, setShowTodo, todos}) {

    const showAll =() =>{
      setShowTodo(todos)
      setActive('all')
    } 

    const showActive = () => {
      setShowTodo(todos.filter((todo) => todo.completed === false))
      setActive('active')
    }


    const showCompleted = () =>{
      setShowTodo(todos.filter((todo) => todo.completed === true))
      setActive('completed')
    }


  return (
    <div className="control-btn group">
      <button className={active ==='all' ? 'colorText' : ""}
      onClick={showAll}
      >
        All
      </button>

      <button className={active === 'active' ? 'colorText' : ""}
      onClick={showActive}
      >
        Active
      </button>
      <button className={active === 'completed' ? 'colorText' : ""}
      onClick={showCompleted}
      >
        Completed
      </button>
    </div>
  )
}
export default TodoFilter