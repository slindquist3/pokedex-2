import styled from 'styled-components';
import Button from "./button";

const Content = styled.div`
    border: 2px solid black;
    background-color: white;
    text-align: center;
    margin: 0 20px;
`

const Name = styled.h1`
    text-transform: capitalize;
    font-size: 16px;
`;

const Controls = styled.div`
    display: flex;
    height: 40px;
    justify-content: center;
    margin: 10px 0;
`

const InfoPanel = ({
    currentId,
    getNextPokemon,
    getPreviousPokemon,
    pokemon
}) => {

    return (
        <div>
            <Content>
                <Name>{pokemon.name}</Name>
                <p>ID: {pokemon.id}</p>
            </Content>
            <Controls>
                    <Button color={"blue"} disabled={currentId <= 1} onClick={() => getPreviousPokemon()}>Back</Button>
                    <Button color={"green"} onClick={() => getNextPokemon()}>Next</Button>
            </Controls>
           
        </div>
    )
}

export default InfoPanel