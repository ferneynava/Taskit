import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const TodoCounter =  useContext(TodoContext);
    return (
      TodoCounter.totalTodos === TodoCounter.completedTodos ?
      <h1>¡Felicidades! ¡Completaste todas tus tareas!</h1> 

      :

      <h1>Has completado <span>{TodoCounter.completedTodos}</span>  de <span>{TodoCounter.totalTodos}</span> TODOs</h1>
    );
}

export { TodoCounter };

