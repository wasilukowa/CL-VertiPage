import React from 'react';
import styled from 'styled-components';

import {
    NavLink
} from 'react-router-dom';

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
            &::before{
                display: block;
                background-color: white;
                content: "";
                width: 20px;
                height: 4px;
                position: absolute;
                top: 10px;
                left: 19px;
            }
            &::after{
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
    }
    @media (min-width: 980px){
        .nav__main{
            display: flex;
            .li{
                display: inline-block;
                padding: 0.5em 1em;
                margin: 0.5em;
                border-radius: 6px;
                transition: 0.25s;
                transition-timing-function: ease-in-out;
                color: ${props => props.theme.grey}; 
                letter-spacing: 0.025em;
                font-size: 0.9em;
                text-align: center;
                cursor: pointer;
                &:hover{
                    background-color: white;
                    color: ${props => props.theme.grey};
                }
            }
            #dropdown-menu-el{
                margin-left: 25px;
                position: relative;
                transition: 0.25s;
            }
            .li__normal{
                text-decoration: none;
                color: ${props => props.theme.grey};
                width: 100%;
            }
            .li__active {
                text-decoration: none;
                color: white;
                background-color: ${props => props.theme.black};
                border-radius: 6px;
                &:hover{
                    background-color: ${props => props.theme.black};
                    color: white;
                }
            }
        }
        .nav__left{
            display: none;
        }
    }
`;

const DropdownElement = styled.div`
    .dropdown__menu{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50px;
        left: 10px;
        width: 200px;
        background-color: white;
        border-radius: 6px;
        padding-top: 1em;
        padding-bottom: 1em;
        border: 1px solid ${props => props.theme.lightGrey};
        box-shadow:
            0 0.5px 1.3px rgba(0, 0, 0, 0.032),
            0 1.6px 4.2px rgba(0, 0, 0, 0.048),
            0 7px 19px rgba(0, 0, 0, 0.08);
        a {
            font-family: 'Open Sans Light';
            font-size: 0.9em;
            text-decoration: none;
            color: ${props => props.theme.grey};
            line-height: 2.6em;
            padding: 5px 10px;
            &:hover {
                background-color: ${props => props.theme.lightGrey};
            }
        }
            &:before{
                        content: '';
                        display: block;
                        width: 15px;
                        height: 15px;
                        background-color: white;
                        transform: rotate(45deg);
                        position: absolute;
                        top: -5px;
                        left: 40px;
            }
            &.hidden{
                display: none;
            }
        }
`;

const Navigation = () => {
    const handleHover = e => {
        e.preventDefault();
        const dropdownMenu = document.getElementById('dropdownM');
        dropdownMenu.classList.remove('hidden');
    }
    const handleLeave = e => {
        e.preventDefault();
        const dropdownMenu = document.getElementById('dropdownM');
        dropdownMenu.classList.add('hidden');
    }
    // const handleHoverSecond = e => {
    //     e.preventDefault();
    //     const dropRight = document.getElementById('dropdown2');
    //     dropRight.classList.add('hidden');
    // }
    // const handleLeaveSecond = e => {
    //     e.preventDefault();
    //     const dropRight = document.getElementById('dropdown2');
    //     // dropRight.classList.remove('hidden');
    // }

    return (
        <NavContainer>
            <div className='nav__left'>
                <span></span>
            </div>
            <div className='nav__main'>
                <li>
                    <NavLink
                        className='li li__normal'
                        activeClassName='li__active'
                        exact to='/'
                    >
                        Welcome
                    </NavLink>
                </li>
                <div id='dropdown-menu-el'>
                    <li
                        onMouseEnter={e => handleHover(e)}
                        onMouseLeave={e => handleLeave(e)}
                        className='li'
                    >
                        Dropdown
                    </li>

                    <DropdownElement>
                        <div className='dropdown__menu hidden' id='dropdownM'>
                            <a href='/'>Lorem ipsum dolor</a>
                            <a href='/'>Magna phasellus</a>
                            <a href='/'>
                                Phasellus consequat
                                </a>
                            <a href='/'>Lamet ornare in</a>
                        </div>
                        {/* <div className='dropdown__menu-second hidden' >
                            <a href='/'>Lorem ipsum dolor</a>
                            <a href='/'>Phasellus consequat</a>
                            <a href='/'>Magna phasellus</a>
                            <a href='/'>Etiam dolore linst</a>
                        </div> */}
                    </DropdownElement>
                </div>
                <li>
                    <NavLink
                        className='li li__normal'
                        activeClassName='li__active'
                        exact to='/left-sidebar'
                    >
                        Left Sidebar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='li li__normal'
                        activeClassName='li__active'
                        exact to='/right-sidebar'
                    >
                        Right Sidebar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='li li__normal'
                        activeClassName='li__active'
                        exact to='/no-sidebar'
                    >
                        No sidebar
                    </NavLink>
                </li>
            </div>
        </NavContainer>
    );
}

export default Navigation;