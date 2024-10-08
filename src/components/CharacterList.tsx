import {ApiData} from "../assets/ApiData.ts";

export type CharacterListProps = {
    /*
    * The key 'data' has to be typed
    * We use ApiData[], because it returns a whole array of the ApiData
    * */
    data: ApiData []
}


// Step 4: Add props which will represent the array values from the data array in the TS file
export default function CharacterList(props: Readonly<CharacterListProps>) {


    return(
        <>
            {/*Step 5: Append props.data to a map method and map each item in the array to a name in order to get just the character names*/}
            <ul>
                {props.data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}