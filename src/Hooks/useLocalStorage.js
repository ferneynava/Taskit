import {useEffect, useState} from 'react';
function useLocalStorage(itemName, initialValue){
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        try{
            const localStorageItem = localStorage.getItem(itemName);//true
            let parsedItem; 
            if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
            } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
            } 
    
            setLoading(false);
        }catch (error){
            setLoading(false);
            setError(true);
        }
    }, 2000)
}, [itemName, initialValue]);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item, 
        saveItem, 
        loading, 
        error,
    };
}  

export { useLocalStorage };



// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar el curso de intro a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'LALALALALALA', completed: false},
//   {text: 'Tomar el curso de Intro a React.js', completed: false},
//   {text: 'Usar estados derivados', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));