import { useState } from "react";
import "./App.css";
import jokes from "./jokes";

function App() {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  const [joke, setJoke] = useState(randomJoke);

  function pickRandomJoke() {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  }

  return (
    <div className="App">
      <button onClick={pickRandomJoke}>Random Dad Joke</button>
      <div className="joke">{joke}</div>
    </div>
  );
}

export default App;
