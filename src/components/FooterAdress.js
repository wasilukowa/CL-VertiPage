import React from 'react';
import styled from 'styled-components';

const FooterAdressContainer = styled.div`
    /* min-height: 120px; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding: 0 30px 30px 30px;
    span {
        font-family: 'Open Sans Light';
        font-weight: 300;
        font-size: 1em;
        color: #B0B7BC;
        padding: 0.3em 1em;
    }

    @media (min-width: 730px){
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 980px){
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        span {
            &:nth-child(2){
                border-left: 1px solid #B0B7BC;
                border-right: 1px solid #B0B7BC;
            }
        }
    }
`;

const FooterAdress = () => {
    return (
        <FooterAdressContainer>
            <span>© Untitled. All rights reserved</span>
            <span>Design: HTML5 UP</span>
            <span>Demo Images: Unsplash</span>
        </FooterAdressContainer>
    )
};

export default FooterAdress;