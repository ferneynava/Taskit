import { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const TodoSearch =  useContext(TodoContext);
    return (
        <input 
            className="inputTodoSearch" 
            placeholder="Cortar cebolla" 
            value={TodoSearch.searchValue}
            onChange={(event) => {
                TodoSearch.setSearchValue(event.target.value);
            }}
        />
        
    );
}

export { TodoSearch };