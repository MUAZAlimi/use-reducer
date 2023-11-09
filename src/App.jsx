import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)

  return (
    <main className="App" style={{color: color ? '#fff' : '#fff92'}}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <br />
      <br />
      <p> {count}</p>

      <section>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setColor(prev => prev - 1)}></button>
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
