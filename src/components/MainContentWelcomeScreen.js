import React from 'react';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';
import ArticleSingle from './ArticleSingle';

import image1 from '../static/stairs.jpg';
import image2 from '../static/butter.jpg';
import image3 from '../static/something.jpg';

import WhiteContainer from '../styles/WhiteContainer';
import Wrapper from '../styles/Wrapper'
import MainContentWelcomeScreenAbout from '../components/MainContentWelcomeScreenAbout'

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

const ArticlesContainer = styled.div`
    @media (min-width: 980px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
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
        <>
            <Wrapper>

                <WhiteContainer>
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
                </WhiteContainer>
                <div>
                    <ArticlesContainer>
                        <ArticleSingle
                            image={image1}
                            title="Put something here"
                            subtitle="Maybe here as well I think"
                            text="Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla."
                        />
                        <ArticleSingle
                            image={image2}
                            title="An interesting title"
                            subtitle="This is also an interesting subtitle"
                            text="Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla."
                        />
                        <ArticleSingle
                            image={image3}
                            title="Oh, and finally ..."
                            subtitle="Here's another intriguing subtitle"
                            text="Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla."
                        />
                    </ArticlesContainer>
                </div>

            </Wrapper>
            <MainContentWelcomeScreenAbout />
        </>

    )
}

export default MainContentWelcomeScreen;


