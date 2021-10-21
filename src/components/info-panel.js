import styled from 'styled-components';

const Controls = styled.div`
    height: 40px;
    text-align: center;

`

const Name = styled.h1`
    margin-bottom: 20px;
    margin-right: 20px;
`;

const InfoPanel = ({
    currentId,
    getNextPokemon,
    getPreviousPokemon,
    pokemon
} ) => {

    return (
        <div>
            <Name>{pokemon.name}</Name>
            <Controls>
                <button onClick={() => getPreviousPokemon(currentId)}>Back</button>
                <button onClick={() => getNextPokemon(currentId)}>Next</button>
            </Controls>
           
        </div>

    )

}

export default InfoPanel