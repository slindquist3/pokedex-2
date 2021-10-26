import { useEffect, useState } from 'react';
import ImagePanel from "./image-panel";
import InfoPanel from "./info-panel";
import styled from 'styled-components';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const PokedexContainer = styled.div`
    border: 1px solid black;
    background-color: red;
    max-width: 200px;
    margin-left: 40px;
    margin-top: 40px;
`;

const Pokedex = () => {
    const [pokemon, setPokemon] = useState({});
    const [currentId, setCurrentId] = useState(1)
    const [isLoading, setIsLoading] = useState(true);

    const fetchPokemon = async ( currentId ) => {
        const results = await fetch(`${URL}${currentId}`)
         .then(response => response.json())
         .then( data => setPokemon(data))
 
         return results;
     }

    useEffect( () => {
        const pokemonResults = fetchPokemon(currentId);
        setPokemon(pokemonResults)
        setIsLoading(false)
    }, []);
    
    const getNextPokemon = () => {
        const next = currentId + 1;
        setCurrentId(next)
        fetchPokemon(next)
    }

    const getPreviousPokemon = () => {
        const previous = currentId - 1;
        setCurrentId(previous);
        fetchPokemon(previous);
    }

    return (
        <PokedexContainer>
            { isLoading ? <p>loading...</p>: 
            <><ImagePanel image={pokemon.sprites} name={pokemon.name}/>
            <InfoPanel 
                currentId={currentId}
                getNextPokemon={getNextPokemon} 
                getPreviousPokemon={getPreviousPokemon}
                pokemon={pokemon}/></> }
        </PokedexContainer>

    );
}
   

export default Pokedex;
