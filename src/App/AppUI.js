import { useContext } from 'react';
import {CreateTodo} from '../CreateTodo/index.js';
import {TodoCounter} from '../TodoCounter/index.js';
import {TodoItem} from '../TodoItem/index.js';
import {TodoList} from '../TodoList/index.js';
import {Todos} from '../TodosTodo/index.js';
import {TodoSearch} from '../TodoSearch/index.js';
import {EmptyTodos} from '../EmptyTodos/index.js';
import {TodosError} from '../TodosError/index.js';
import {TodosLoading} from '../TodosLoading/index.js';
import {TodoContext} from '../TodoContext/index.js';
import {TodoForm} from '../TodoForm/index.js';
import {Modal} from '../Modal/index.js';

function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
    <>
        <CreateTodo/>
        <Todos>
            <TodoCounter />
            <TodoSearch />
            <TodoList>  
                {loading && (
                    <>
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                {searchedTodos.map(todo => 
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => {completeTodo(todo.text)}}
                        onDelete={() => {deleteTodo(todo.text)}}
                    />)}
            </TodoList> 
        </Todos>

        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
        
    </>
    );
}

export {AppUI};

