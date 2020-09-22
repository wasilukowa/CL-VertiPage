import React from 'react';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavContainer = styled.ul`
    .nav__main{
        display: none;
        font-family: 'Open Sans Bold';
        list-style: none;
    }

    .nav__left{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 10px;
        left: 10px;
        height: 38px;
        width: 58px;
        background-color: rgba(0,0,0,0.15);
        border-radius: 6px;
        cursor: pointer;
        span{
            display: block;
            width: 20px;
            height: 4px;
            background-color: white;
        }
        span::before{
                display: block;
                background-color: white;
                content: "";
                width: 20px;
                height: 4px;
                position: absolute;
                top: 10px;
                left: 19px;
            }
            span::after{
                display: block;
                background-color: white;
                content: "";
                width: 20px;
                height: 4px;
                position: absolute;
                top: 24px;
                left: 19px;
            }
        }
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
                cursor: pointer;

                &:hover{
                    background-color: white;
                }
            }
                .li__normal{
                    text-decoration: none;
                    color: ${props => props.theme.grey}; 
                }
                .li__active {
                    text-decoration: none;
                    color: white;
                    background-color: ${props => props.theme.black}
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
            <div className="nav__left">
                <span></span>
            </div>
            <div className="nav__main">
                <li><Link className="li__normal" activeClassName="li__active" to="/">Welcome</Link></li>
                <li><a>Dropdown</a></li>
                <li><Link className="li__normal" to="/left-sidebar">Left Sidebar</Link></li>
                <li><Link className="li__normal" to="/right-sidebar">Right Sidebar</Link></li>
                <li><Link className="li__normal" to="/no-sidebar">No sidebar</Link></li>
            </div>

        </NavContainer>
    );
}

export default Navigation;