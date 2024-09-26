/*
* Step 1: Create a new React project with Vite and TypeScript.
Step 2: Use the data you can retrieve from this API: https://rickandmortyapi.com/api/character/
Save the data in a separate TypeScript file.
Import the data in your component and set the data as initial Value in your useState.
Step 3: Pass the state to components that will visualize this data.
*
*
a-d : Create an input field in App.tsx that triggers the search. Filter your search so that only the characters you searched for are displayed.
e: Enhance your search to display an error message when a non-existent name is entered in the input field.
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
    // const [characters, setCharacters] = useState<any[]>(data);


    // a. Create useState array to manage searchInput, setting the initial value to an empty string
    const[searchInput, setSearchInput] = useState<string>("")

  //   c. Filter the characters based on the search input
    const filteredCharacters = data.filter(character => character.name.toLowerCase().includes(searchInput.toLowerCase()));



  return (
    <>

        {/*b. Create an input field for user interaction*/}
        <input
            type="text"
            placeholder="Search Character"
            value={searchInput}
            //e is the event listener which listens for a change in the user input
            //setSearchInput is used here as a callback function
            //The searchInput state is updated if a change in the input is made
            onChange={(e) => setSearchInput(e.target.value)}
        />

        {/*Step 8: Pass in the value (using key=value) into the props defined in CharacterList*/}
        {/*<CharacterList data={filteredCharacters} />*/}



        {/*Step 9: Pass in the value (using key=value) into the props defined in CharacterCard*/}
        {/*<CharacterCard character={characters[0]} />*/}
        {/*{characters.length > 0 && <CharacterCard character={characters[0]} />}*/}

        {/*d. map over the filtered characters array to display each character's full information*/}

        {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
        ))}

        {/*{filteredCharacters.length > 0 ? <CharacterList data={filteredCharacters}/>*/}
        {/*:<p>No characters found</p>}*/}



        {/*e. Display a message to the user if no characters are found in the search */}
        {filteredCharacters.length === 0 && (
            <p>No characters found matching the search term.</p>
        )}

        </>
  )
}

export default App


