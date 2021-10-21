import styled from 'styled-components';

const ImagePanel = ({image, name}) => {

    const ImageContainer = styled.div`
        width: 150px;
        height: 150px;
        background-color: white;
    `;

    return (

            image ? 
                <div>
                    <ImageContainer><img alt={name} src={image.front_default} /></ImageContainer>
                </div> 
            : <p>loading...</p>
    )
}

export default ImagePanel