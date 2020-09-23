import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.blue ? '#0090C5' : '#F2F2F2'};
    color: ${props => props.blue ? 'white' : props.theme.black};
    font-family: 'Open Sans Bold';
    font-size: 1.4em;
    padding: 0.6em 1.1em;
    margin: 0.2em;
    cursor: pointer;

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    outline: none;
    border: none;
    border-radius: 6px;
    width: 100%;

    i {
        padding: 0 15px 0 0;
        font-size: 1.2em;
    }

    @media (min-width: 730px){
        font-size: 2em;
        i {
            font-size: ${props => props.small ? '1em' : '1.2em'};
        }
    }

    @media (min-width: 980px){
        font-size: ${props => props.small ? '1.4em' : '2em'};
        flex-direction: ${props => props.small ? 'row-reverse' : 'row'};
        justify-content: ${props => props.small ? 'center' : 'space-between'};
        width: auto;
        i {
            padding: ${props => props.small ? '0 20px 0 0' : '0 0 0 30px'};
            font-size: 1.2em;
        }
    }
`;

export default Button;