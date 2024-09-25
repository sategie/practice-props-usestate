
import './App.css'
import CharacterList from "./components/CharacterList.tsx";
import {useState} from "react";
import {data} from "./assets/ApiData.ts";
import CharacterCard from "./components/CharacterCard.tsx";


function App() {
    /*
    * The current value of the state, characters can be called anything you want
    * data is used as the initial value
    * */

    //Step 3: Create useState array setting the initial value to data
    const [characters, setCharacters] = useState<any[]>(data);

  return (
    <>
      {/*Step 8: Pass in the key=value field into the {data} props defined in CharacterList*/}
      <CharacterList data={characters} />

        {/*Step 9: Pass in the key=value field into the {character} props defined in CharacterCard*/}
        <CharacterCard character={characters[0]} />
        {/*{characters.length > 0 && <CharacterCard character={characters[0]} />}*/}
    </>
  )
}

export default App
