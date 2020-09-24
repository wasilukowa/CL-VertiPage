import React from 'react';
import Wrapper from '../styles/Wrapper';

import styled from 'styled-components';

const FooterSectionContainer = styled.div`
    padding: 1.5em;
    padding-bottom: 40px;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    h2{
        font-family: 'Open Sans Bold';
        font-size: 1.23em;
        color: ${props => props.theme.black};
        margin-bottom: 1em;
    }
    ul {
        list-style: none;
        font-family: 'Open Sans Light';
        font-weight: 300;
        line-height: 2em;
        font-size: 1em;
        a {
            color: ${props => props.theme.grey};
        }
    }
`;


const FooterSection = ({ title, linksArray }) => {
    return (
        <Wrapper>
            <FooterSectionContainer>
                <h2>{title}</h2>
                <ul>
                    {linksArray.map((link, i) => {
                        return (
                            <li key={i}><a href="">{link}</a></li>
                        )
                    })}
                </ul>
            </FooterSectionContainer>


        </Wrapper>
    )
}

export default FooterSection;