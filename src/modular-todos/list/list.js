import classes from "./list.module.scss";

function List({ todos, onToggleClick, onRemoveClick }) {
  return (
    <ul>
      {todos.map(({ id, text, done }) => (
        <li key={id} className={done ? classes.done : null}>
          <span onClick={() =>onToggleClick(id)}>{text}</span>
          <button onClick={()=>onRemoveClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
