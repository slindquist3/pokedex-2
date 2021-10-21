import styled from 'styled-components';

const ImagePanelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div`
    background-color: white;
    border: 2px solid black;
    margin: 20px;
`;

const ImagePanel = ({image, name}) => {

    return (
            image ? 
                <ImagePanelContainer>
                    <ImageContainer><img alt={name} src={image.front_default} /></ImageContainer>
                </ImagePanelContainer> 
            : <p>loading...</p>
    )
}

export default ImagePanel