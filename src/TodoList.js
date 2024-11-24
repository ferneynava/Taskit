import './TodoList.css';
function TodoList({children}) {
    return (
        <ul className='ContainerList'>
            {children}    
        </ul>
    );
}

export { TodoList };