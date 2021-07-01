import React, { useState} from "react";
import Chirp from "./components/Chirp";

const App = () => {
  const [username, setUsername] = useState("");
  const [chirp, setChirp] = useState("");
  const [chirpArray, SetChirpArray] = useState([]);
  const onClick = () => {
    SetChirpArray(arr => [...arr, `${arr.length} @${username}: ${chirp}`]);
  }

    return (
        <>
        <div>
      <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" value={chirp} placeholder="text" onChange={(e) => setChirp(e.target.value)}/>
      <button onClick={onClick}>send chirp</button>
        <Chirp/>
        <div>{chirpArray.map (e => <p key = {`custom-${chirpArray.length}`}> {e} </p>)}</div>
        </div>
    </>
  );
};

export default App;

