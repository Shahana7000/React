import { useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  return (
    <div>
      <h3>Joker !</h3>
      <h2>{joke.setup || "Click the button to get a joke 😄"}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
