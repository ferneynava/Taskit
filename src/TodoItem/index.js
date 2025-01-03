import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
function TodoItem({text, completed, onComplete, onDelete}) {
    return (
        <li className='todoItem'>
            <CompleteIcon 
                completed={completed}
                onComplete={onComplete}
            />
            <p className={`textTodo ${completed ? 'check-text--active': '' }`}>{text}</p>
            <DeleteIcon 
                onDelete={onDelete}
            />
        </li>
    );
}

export { TodoItem }; 