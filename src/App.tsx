
import './App.css'
import CharacterList from "./components/CharacterList.tsx";
import CharacterCard from "./components/CharacterCard.tsx";
import {useState} from "react";

function App() {
    const [ApiData, setApiData] = useState<string>("ApiData");

  return (
    <>
      <CharacterList />
        <CharacterCard />
    </>
  )
}

export default App
