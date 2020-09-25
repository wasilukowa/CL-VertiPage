import React from 'react';
import styled from 'styled-components';

const FooterSectionContainer = styled.div`
    padding-bottom: 30px;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    margin-bottom: 20px;
    flex-basis: 45%;
    h2 {
        font-family: 'Open Sans Bold';
        font-size: 1.23em;
        color: ${props => props.theme.black};
        margin-bottom: 1em;
    }
    @media (min-width: 730px){
        border: none;
    }
    @media (min-width: 980px){
        flex-basis: 24%;
    }
`;

const FooterSection = ({ title, linksArray = [] }) => {
    return (
        <FooterSectionContainer>
            <h2>Contact Us</h2>
            <p> place for icons</p>
        </FooterSectionContainer>
    )
}

export default FooterSection;