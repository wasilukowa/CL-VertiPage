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
        #dropdown-menu-el {
            .dropdown__menu{
                display: none;
                position: absolute;
                top: 50px;
                left: 10px;
                width: 180px;
                background-color: white;
                border-radius: 6px;
                padding-top: 1em;
                padding-bottom: 1em;
                border: 1px solid ${props => props.theme.lightGrey};
                z-index: 20000;
                transition: 0.2s;
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
                    transition: 0.25s;
                    display: block;
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
        }
        &:hover {
            .dropdown__menu{
                display: block;
            }
        } 
    }
    }
`;

const HiddenNavLeft = styled.div`
    .sidenav {
        height: 100vh;
        width: 0;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        padding-top: 60px;
        transition: 0.5s;
    }
  
    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
  
    .sidenav a:hover {
        color: #f1f1f1;
    }
  
    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
    
    #main {
        transition: margin-left .5s;
        padding: 20px;
    }
`;

const Navigation = () => {

    const handleClick = e => {
        e.preventDefault();
        console.log('elo');
        openNav();
    }

    const openNav = () => {
        document.getElementById('mySidenav').style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById('mySidenav').style.width = '0';
    }

    return (
        <>
            <HiddenNavLeft>
                <div className='sidenav' id='mySidenav'>
                    <a href="#" className='closebtn' onClick={closeNav}>&times;</a>
                    <a href="#" onClick={closeNav}>About</a>
                    <a href="#" onClick={closeNav}>Services</a>
                    <a href="#" onClick={closeNav}>Clients</a>
                    <a href="#" onClick={closeNav}>Contact</a>
                </div>
            </HiddenNavLeft>
            <NavContainer>
                <div
                    className='nav__left'
                    onClick={e => handleClick(e)}
                >
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
                            className='li'
                        >
                            Dropdown
                    </li>
                        <div className='dropdown__menu'>
                            <a href='/'>Lorem ipsum dolor</a>
                            <a href='/'>Magna phasellus</a>
                            <a href='/'>Phasellus consequat</a>
                            <a href='/'>Lamet ornare in</a>
                        </div>
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
        </>
    );
}

export default Navigation;