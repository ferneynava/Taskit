import './CreateTodo.css'

function CreateTodo() {
    return (
        <div className='containerCreateTodo'>
            <h1>Escribe tu nuevo TODO</h1>
            <input className='containerCreateTodoInput' type="text" placeholder="Cortar cebolla" />
            <button className='containerCreateTodoButton' 
            onClick={
                (event) => {
                    console.log("Le diste click")
                    console.log(event)
                    console.log(event.target)
                }
            }>
                Crear TODO
            </button>
            <img src="rb_2148823171.webp" alt="Ilustración Tarea" />
        </div>
        
    );
}

export { CreateTodo};