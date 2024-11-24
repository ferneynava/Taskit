import {CreateTodo} from './CreateTodo.js';
import {TodoCounter} from './TodoCounter.js';
import {TodoItem} from './TodoItem.js';
import {TodoList} from './TodoList.js';
import {Todos} from './Todos.js';
import {TodoSearch} from './TodoSearch.js';
import {useState} from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'LALALALALALA', completed: false},
  {text: 'Tomar el curso de Intro a React.js', completed: false},
  {text: 'Usar estados derivados', completed: false},
];


function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState(''); 

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <CreateTodo/>
      <Todos>
        <TodoCounter 
          completed={completedTodos} 
          total={totalTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>  
          {searchedTodos.map(todo => 
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {completeTodo(todo.text)}}
              onDelete={() => {deleteTodo(todo.text)}}
            />
          )}
        </TodoList>
      </Todos>
    </>
  );
}

export default App;

