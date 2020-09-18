import React from "react";
import styled from "styled-components"

const Logo = styled.h1`
    background-color: #FF4486;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-family: 'Oleo Script', serif;
`;

const Header = props => {
    return (
        <>
            <Logo>
                Verti
            </Logo>
            {/*<Navigation/>*/}

        </>
    )
}

export default Header;