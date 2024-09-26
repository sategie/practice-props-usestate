/*
* Step 1: Create a new React project with Vite and TypeScript.
*
Step 2: Use the data you can retrieve from this API: https://rickandmortyapi.com/api/character/
Save the data in a separate TypeScript file.
Import the data in your component and set the data as initial Value in your useState.
*
Step 3: Pass the state to components that will visualize this data.
* */


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
      {/*Step 8: Pass in the value (using key=value) into the props defined in CharacterList*/}
      <CharacterList data={characters} />

        {/*Step 9: Pass in the value (using key=value) into the props defined in CharacterCard*/}
        <CharacterCard character={characters[0]} />
        {/*{characters.length > 0 && <CharacterCard character={characters[0]} />}*/}
    </>
  )
}

export default App
