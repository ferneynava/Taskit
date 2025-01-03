import { useContext } from 'react';
import {TodoContext} from '../TodoContext/index.js';
import './CreateTodo.css'

function CreateTodo() {
    const {openModal, setOpenModal} = useContext(TodoContext);
    
    return (
        <div className='containerCreateTodo'>
            <h1>Escribe tu nuevo TODO</h1>
            <button className='containerCreateTodoButton' 
            onClick={
                (event) => {
                    setOpenModal(!openModal);
                }
            }>
                Crear TODO
            </button>
            <img src="rb_2148823171.webp" alt="Ilustración Tarea" />
        </div>
        
    );
}

export { CreateTodo};