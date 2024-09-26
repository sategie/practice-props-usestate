import {ApiData} from "../assets/ApiData.ts";

export type CharacterCardProps = {
   /*
   * The key 'character' needs to be typed
   * We use ApiData because returns a single item within the array
   * */
   character: ApiData
}


// Step 6: Add props which will represent the single character attribute/value
export default function CharacterCard(props: Readonly<CharacterCardProps>){



    return(
        <>
            {/*Step 7: Append props.character to each individual field you want to obtain from the data array*/}
            <div>
                <h1>{props.character.name}</h1>
                <img src={props.character.image} alt={props.character.name}/>
                <p>Status: {props.character.status}</p>
                <p>Species: {props.character.species}</p>
                <p>Gender: {props.character.gender}</p>
                <p>Origin: {props.character.origin.name}</p>
                <p>Location: {props.character.location.name}</p>
            </div>
        </>
    )
}