import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      title: "learn React",
      description: "react is a js library",
    },
    {
      title: "sleep",
      description: "rest is imp too",
    },
    {
      title: "forgettting",
      description: "make yourself busy",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "new description",
      },
    ]);
  }

  return (
    <div>
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
      <button onClick = {addTodo}>add a random todo</button>
      {todos.map(function (todo) {
        return (
          <ol>
            <Todoapp title={todo.title} description={todo.description} />
          </ol>
        );
      })}
    </div>
  );
}

// ----------------------------------------------------------------button
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

function Todoapp(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  );
}

export default App;
