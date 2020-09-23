import React from "react";
import styled from "styled-components";

const ArticleSingleStyling = styled.div`
    width: 100%;
    img {
        width: 100%;
    }
`;


const ArticleSingle = ({ image, title, text }) => {
    return (
        <ArticleSingleStyling>
            <img src={image} />
            <h2>{title}</h2>
            <p>{text}</p>
        </ArticleSingleStyling>
    )
};

export default ArticleSingle;