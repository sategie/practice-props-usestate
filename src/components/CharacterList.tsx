
// Step 4: In CharacterList, pass in the initial value of useState {data} as props
export default function CharacterList({data}) {


    return(
        <>
            {/*Step 5: Append the data props to a map method and map each character to a name*/}
            <ul>
                {data.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </>
    )
}