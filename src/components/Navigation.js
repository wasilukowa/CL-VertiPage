import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.ul`
    font-family: 'Open Sans Bold';
    display: flex;
    list-style: none;
    li{
        display: inline-block;
        padding: 0.5em 1em;
        margin: 0.5em;
        border-radius: 6px;
        transition: 0.25s;
        transition-timing-function: ease-in-out;
        color: ${props => props.theme.grey};
        letter-spacing: 0.025em;
        font-size: 0.9em;
        &.li__active {
            color: white;
            background-color: ${props => props.theme.black}
            }
        &:hover{
            background-color: white;
        }
    }
`;



const Navigation = () => {

    return (
        <NavContainer>
            <li className="li__active"><a>Welcome</a></li>
            <li><a>Dropdown</a></li>
            <li><a>Left Sidebar</a></li>
            <li><a>Right Sidebar</a></li>
            <li><a>No sidebar</a></li>
        </NavContainer>
    );
}

export default Navigation;