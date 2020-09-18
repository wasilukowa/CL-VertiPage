import React from "react";
import styled from "styled-components";

const LogoStyles = styled.div`
    display: flex;
    align-items: center;
    margin: 1em;
    h1 {
        background-color: ${props => props.theme.pink};
        /* display: inline-block; */
        padding: 0.2em 0.275em;
        border-radius: 5px;
        color: white;
        font-family: 'Oleo Script', serif;
        letter-spacing: 0.05em;
        font-size: 2.75em;
        line-height: 1em;
    }
    h2 {
        letter-spacing: 0.025em;
        line-height: 3em;
        font-size: 0.9em;
        color: ${props => props.theme.grey};
        font-family: 'Open Sans Bold';
        margin-left: 1em;
    }
    @media (max-width: 736px){
        flex-direction: column;
    }
`;

const Logo = () => {
    return (
        <LogoStyles>
            <h1>
                Verti
            </h1>
            <h2>
                by HTML5 up
        </h2>
        </LogoStyles>

    )
}

export default Logo;