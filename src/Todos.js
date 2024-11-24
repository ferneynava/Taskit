import './Todos.css'

function Todos({children}) {
  return (
    <div className="containerTodos">
        {children}
    </div>
      
  );
}

export {Todos};