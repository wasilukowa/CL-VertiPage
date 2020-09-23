import React from "react";
import styled from "styled-components";

import 'font-awesome/css/font-awesome.min.css';
import { Redirect } from "react-router-dom";

const WelcomeScreenStyling = styled.div`
    background-color: white;
    border-radius: 6px;
    margin-top: 10px;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    text-align: center;
    @media (min-width: 980px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 66px;
    }
`;

const WelcomeScreenTitle = styled.h1`
    flex-basis: 55%;
    h1 {
        font-family: 'Open Sans Bold';
        font-size: 1.5em;
        color: ${props => props.theme.black}
    }
    span{
        font-family: 'Open Sans Light';
        font-size: 1.2em;
        font-weight: 300;
        color: ${props => props.theme.grey}
    }
`;

const Button = styled.button`
    background-color: ${props => props.blue ? "#0090C5" : "#F2F2F2"};
    color: ${props => props.blue ? "white" : props.theme.black};
    font-family: 'Open Sans Bold';
    font-size: 2em;
    padding: 0.6em 1.1em;
    margin: 0.2em;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 6px;
    }
    i {
        padding-left: 30px;
        font-size: 1.2em;
    }
`;

const style = {
    div: {
        display: "flex",
        flexDirection: "column",

    }
}

const MainContentWelcomeScreen = () => {
    return (
        <WelcomeScreenStyling>
            <WelcomeScreenTitle>
                <h1>Hi.This is Verti.</h1>
                <span>It's a free responsive site template by HTML5 UP</span>
            </WelcomeScreenTitle>
            <div style={style.div}>
                <Button blue>
                    <span>Ok let's go</span>
                    <i className="fa fa-arrow-circle-right"></i>
                </Button>
                <Button>
                    <span>More info</span>
                    <i className="fa fa-question-circle"></i>
                </Button>
            </div>
        </WelcomeScreenStyling>

    )
}

export default MainContentWelcomeScreen;


