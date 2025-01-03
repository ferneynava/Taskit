import React, { useContext } from 'react';
import './Modal.css';
import { TodoContext } from '../TodoContext';
function TodoForm(){
    const {
        addTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('')	

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(!openModal)
    }

    const onCancel = (event) => {
        setOpenModal(!openModal)
    }
    
    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    return (
    <div className='ModalBackground'>
        <dialog open>
            <form method="dialog" 
                onSubmit={onSubmit}
            >
                <label>Escribe tu nuevo TODO</label>
                <textarea placeholder ="Cortar cebolla para el almuerzo"
                    value={newTodoValue}
                    onChange={onChange}
                > </textarea>
                <div className='TodoForm-buttonContainer'>
                    <button className='TodoForm-button TodoForm-button--cancel' type="button" onClick={onCancel}
                    >Cancelar</button>
                    <button 
                        type='submit'
                        className='TodoForm-button TodoForm-button--add'>Añadir</button>
                </div>
            </form>
        </dialog> 
    </div>
    )
}


export {TodoForm};