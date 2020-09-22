import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.ul`
    .nav__main{
        display: none;
        font-family: 'Open Sans Bold';
        list-style: none;
    }

    .nav__left{
        display: block;
        position: fixed;
        top: 10px;
        left: 10px;
        height: 30px;
        width: 40px;
        background-color: ${props => props.theme.black}
    }

    @media (min-width: 980px){
        .nav__main{
            display: flex;
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
        }
        .nav__left{
            display: none;
        }
    }
`;



const Navigation = () => {

    return (
        <NavContainer>
            <div className="nav__left"></div>
            <div className="nav__main">
                <li className="li__active"><a>Welcome</a></li>
                <li><a>Dropdown</a></li>
                <li><a>Left Sidebar</a></li>
                <li><a>Right Sidebar</a></li>
                <li><a>No sidebar</a></li>
            </div>

        </NavContainer>
    );
}

export default Navigation;