import React from "react";
import styled from "styled-components";

const LogoStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        background-color: ${props => props.theme.pink};
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
        text-align: center;
        margin-left: 0;
    }
    @media (min-width: 736px){
        h1 {
            font-size: 3.2em;
        }
    }

    @media (min-width: 980px){
        flex-direction: row;
        h1 {
            font-size: 3.7em;
        }
        h2 {
            margin-left: 1em;
        }
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