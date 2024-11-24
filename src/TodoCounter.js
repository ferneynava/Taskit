import './TodoCounter.css';

function TodoCounter({completed, total}) {
    return (
      <h1>Has completado <span>{completed}</span>  de <span>{total}</span> TODOs</h1>
    );
}

export { TodoCounter };

