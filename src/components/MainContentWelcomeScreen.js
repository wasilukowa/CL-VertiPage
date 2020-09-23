import React from "react";
import styled from "styled-components";

import 'font-awesome/css/font-awesome.min.css';
import { Redirect } from "react-router-dom";

const WelcomeScreenStyling = styled.div`
    background-color: white;
    border-radius: 6px;
    margin-top: 10px;
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    text-align: center;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
    @media (min-width: 730px) {
        padding: 40px;
    };

    @media (min-width: 980px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 66px;
        text-align: left;
    };
`;

const WelcomeScreenTitle = styled.h1`
    h1 {
        font-family: 'Open Sans Bold';
        font-size: 1.1em;
        line-height: 1.3em;
        color: ${props => props.theme.black};

    }
    span{
        font-family: 'Open Sans Light';
        font-size: 0.75em;
        display: block;
        line-height: 1.4em;
        font-weight: 300;
        color: ${props => props.theme.grey};
        margin-bottom: 20px;
    }
    @media (min-width: 730px){
        h1 {
            font-size: 2em;
        }
        span {
            font-size: 1.5em;
            line-height: 1.4em;
        }
    }
    @media (min-width: 980px){
        flex-basis: 55%;
        h1 {
            font-size: 1.65em;
            line-height: 2em;
        }
        span {
            font-size: 1.2em;
            line-height: 1.5em;
        }
    }
`;

const Button = styled.button`
    background-color: ${props => props.blue ? "#0090C5" : "#F2F2F2"};
    color: ${props => props.blue ? "white" : props.theme.black};
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

    i {
        padding: 0 15px 0 0;
        font-size: 1.2em;
    }

    @media (min-width: 730px){
        font-size: 2em;
        i {
            font-size: 1.2em;
    }
    }

    @media (min-width: 980px){
        font-size: 2em;
        flex-direction: row;
        justify-content: space-between;
        i {
            padding: 0 0 0 30px;
            font-size: 1.2em;
    }
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


