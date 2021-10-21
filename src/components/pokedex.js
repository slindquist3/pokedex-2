import {useEffect } from 'react';
import ImagePanel from "./image-panel";
import InfoPanel from "./info-panel";
import styled from 'styled-components';

const PokedexContainer = styled.div`
    display: flex;
`;

const Pokedex = () => {

    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=200';

    const fetchPokemon = () => (
        fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
    )

    useEffect(() => {
        fetchPokemon();
    });

    return (
        <PokedexContainer>
            <ImagePanel />
            <InfoPanel />
        </PokedexContainer>

    );
}
   

export default Pokedex;
