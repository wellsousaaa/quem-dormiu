import { useState } from "react";
import "./App.css";
import InitialPage from "./components/InitialPage";
import Game from "./components/Game";

function App() {
  const [partyData, setPartyData] = useState({
    code: "",
    players: null,
    order: null,
    sleep: null,
  });

  const setInfo = (data) => {
    setPartyData(data);
  };

  return (
    <div>
      {partyData.code ? (
        <Game data={partyData} />
      ) : (
        <InitialPage setInfo={setInfo} />
      )}
    </div>
  );
}

export default App;
