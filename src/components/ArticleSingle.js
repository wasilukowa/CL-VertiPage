import React from "react";
import styled from "styled-components";

const ArticleSingleStyling = styled.div`
    flex-basis: 30%;
    background-color: white;
    border-radius: 6px;
    width: 100%;

    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    flex-grow: 0;
    
    img {
        width: 100%;
        height: auto;
        border-radius: 6px 6px 0 0;
        flex-basis: 60%;
    }
    @media (min-width: 980px) {
    }
`;

const ArticleTextContainer = styled.div`
    padding: 15px;
    h2 {
        font-family: 'Open Sans Bold';
        color: ${props => props.theme.grey};
        font-size: 1.6em;
        margin-bottom: 10px;
    }
    h3 {
        font-family:'Open Sans Light';
        font-weight: 300;
        font-size: 1em;
        color: ${props => props.theme.grey}
    }
    p {
        margin-top: 40px;
        margin-bottom: 40px;
        font-family: 'Open Sans Light';
        font-size: 1em;
        line-height: 1.8em;
    }
    @media (min-width: 730px) {
        padding: 40px;
    };
    @media (min-width: 980px) {
        /* max-width: 960px; */
        /* margin: 0 auto; */
    };
    @media (min-width: 980px) {
        padding: 20px;
    };
`;

const style = {
    imgContainer: {
        width: "100%",
        maxHeight: "80%"
    }
}

const ArticleSingle = ({ image, title, subtitle, text }) => {
    return (
        <ArticleSingleStyling>
            <img height="521" width="300" src={image} />

            <ArticleTextContainer>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{text}</p>
            </ArticleTextContainer>
        </ArticleSingleStyling>
    )
};

export default ArticleSingle;