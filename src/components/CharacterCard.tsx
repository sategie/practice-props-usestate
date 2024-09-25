
// Step 6: pass in a {character} as props in the card component
export default function CharacterCard({character}) {



    return(
        <>
            {/*Step 8: Append character props to each individual field you want to obtain from the API fields*/}
            <div>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name}/>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
            </div>
        </>
    )
}