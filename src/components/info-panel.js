import styled from 'styled-components';

const InfoPanelContainer = styled.div`
    width: 200px;
    position: relative;
`

const Content = styled.div`
    border: 2px solid black;
    margin: 20px;
    background-color: white;
    text-align: center;
`

const Name = styled.h1`
    text-transform: capitalize;
    margin-bottom: 20px;
    font-size: 16px;
`;

const Controls = styled.div`
    display: flex;
    height: 40px;
    justify-content: flex-end;
`

const InfoPanel = ({
    currentId,
    getNextPokemon,
    getPreviousPokemon,
    pokemon
} ) => {

    return (
        <InfoPanelContainer>
            <Content>
                <Name>{pokemon.name}</Name>
                <p>Id: {pokemon.id}</p>
            </Content>
            <Controls>
                    <button disabled={currentId <= 1} onClick={() => getPreviousPokemon()}>Back</button>
                    <button onClick={() => getNextPokemon()}>Next</button>
            </Controls>
           
        </InfoPanelContainer>
    )
}

export default InfoPanel