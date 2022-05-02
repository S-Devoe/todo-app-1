
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CheckIcon from '../images/icon-check.svg'
import Cancel from '../images/icon-cross.svg'

function TodoItem({ todos, setTodos, showTodo, setShowTodo, removeTodo}) {
  const toggleCompleted = (id) => {
    setTodos(
      showTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    setShowTodo(todos);
  };
  
  

  return (
    <>
      <DragDropContext
      onDragEnd ={(param) =>{
            const srcIndex = param.source.index;
            const destIndex = param.destination.index;
            todos.splice(destIndex, 0, todos.splice(srcIndex, 1)[0])}}
      >
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <ul
              className="todo-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
              key={todos.id}
              
            >
              {showTodo.map((todo, index) => {
                const { id, content, completed } = todo;

                return (
                  <Draggable key={id} index={index} draggableId={"id"+id}>
                    {(provided, snapshot) => (
                      <li key={index} className={completed ? "completed" : ""}  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <label htmlFor={`todoCheckBox-${id}`}></label>
                        <input
                          type="checkbox"
                          id={`todoCheckBox-${id}`}
                          name="completed-checkbox"
                          defaultChecked={completed}
                        />
                        <div className="spacing">
                          <div className="side-checkbox">
                            <span
                              className="checkbox"
                              onClick={() => toggleCompleted(id)}
                            >
                              {completed ? (
                                <img src={CheckIcon} alt="checked" />
                              ) : null}
                            </span>
                          </div>
                          <p>{content}</p>
                        </div>
                        <div className="cancel" onClick={() => removeTodo(id)}>
                          <img src={Cancel} alt="" />
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
export default TodoItem;
