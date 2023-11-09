import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
      default:
        throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const [userInput, setUserInput] = useState('')
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)

  return (
    <main className="App" style={{color: color ? '#fff' : 'rgb(7, 113, 113)'}}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <br />
      <br />
      <p> {state.count}</p>

      <section>
        <button onClick={(() => dispatch({type: 'decrement'}))}>-</button>
        <button onClick={(() => dispatch({type: 'increment'}))}>+</button>
        <button onClick={(() => setColor(prev => !prev))}>Color</button>
      </section>

        <br />
        <br />

        <p>Seconds: </p>

        <br />
        <br />

        <p></p>
    </main>
  );
};

export default App;
