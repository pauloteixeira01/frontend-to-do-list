import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa'

interface ContainerProps {
    actived: string;
}

export const Container = styled.div<ContainerProps>`
    width:100%;
    height:100%;
    background: ${props => props.actived === 'true' ? '#4367FB' : '#B0C4DE'};
    cursor: pointer;
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width:10%;
        padding:5%;  
    }
    
    span {
        color: ${props => props.actived === 'true' ? '#B0C4DE' : '#4367FB'};
        font-weight: bold;
        align-self: flex-end;
        font-size:18px;
        padding-right:5%;
    }

    &:hover{
        background: #03E795;
    }
`


export const StyledContainer = styled.div<ContainerProps>`
    width:100%;
    height:15vh;
    background: ${props => props.actived === 'true' ? '#4367FB' : '#B0C4DE'};
    cursor: pointer;
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width:10%;
        padding:5%;  
    }
    
    span {
        color: ${props => props.actived === 'true' ? '#B0C4DE' : '#4367FB'};
        font-weight: bold;
        align-self: flex-end;
        font-size:18px;
        padding-right:5%;
    }

    &:hover{
        background: #03E795;
    }

`;

export const StyledIcon = styled(FaFilter)`
    color: white;
    width: 20%;
    height: 20%;
`;