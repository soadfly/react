// import styles from "./todos.style";
// import "./todos.css";
// import classes from "./todos.module.scss";
//import { useState } from "react";
import List from "./list";
import Form from "./form/use-form.js";

// console.log(classes);

function Todos({ who, todos, addTodo, removeTodo, toggleDone }) {

  return (
    <>
      <h1>{who}'s Todos</h1>
      <Form onSubmit={addTodo} />
      <List
        todos={todos}
        onToggleClick={toggleDone}
        onRemoveClick={removeTodo}
      />
    </>
  );
}

export default Todos;

// const input = useRef();
// const style = {
//     textDecoration: "line-through",
// };

// const style = {
//   color: Math.random()>0.5 ? "red" : "blue",
//   backgroundColor: "green",
// };
