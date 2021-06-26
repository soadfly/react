import TodosComponent from './todos';
import {useState} from 'react';

function Todos({who}){
    const [todos, setTodos] = useState([
        { id: 1, text: "Lear React", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ]);
    
      const addTodo = (text) => {
        const maxId = todos.length ? todos[todos.length - 1].id : 0;
        setTodos([...todos, { id: maxId + 1, text }]);
      };
    
      const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };
    
      const toggleDone = (id) => {
        setTodos(
          todos.map((todo) => {
            return todo.id === id ? { ...todo, done: !todo.done } : todo;
          })
        );
      };

    return <TodosComponent 
    who={who}
    todos={todos}
    addTodo={addTodo}
    toggleDone={toggleDone}
    removeTodo={removeTodo}
    />
}

export default Todos