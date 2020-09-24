import React from 'react';
import FooterSection from '../components/FooterSection';
import FooterContact from '../components/FooterContact';
import styled from 'styled-components';
import Wrapper from '../styles/Wrapper';
import FooterAdress from '../components/FooterAdress';

const FooterContainer = styled.div`
    padding: 30px;
    @media (min-width: 730px){
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-wrap: wrap;
        flex-grow: 0;
    }
    @media (min-width: 980px){
        justify-content: space-between;
    }
`;

const links = [
    'Etiam feugiat condimentum',
    'Aliquam imperdiet suscipit odio',
    'Sed porttitor cras in erat nec',
    'Felis varius pellentesque potenti',
    'Nullam scelerisque blandit leo'
]
const Footer = () => {
    return (
        <Wrapper>
            <FooterContainer>
                <FooterSection title="Random Stuff" linksArray={links} />
                <FooterSection title="Random Stuff" linksArray={links} />
                <FooterSection title="Random Stuff" linksArray={links} />
                <FooterContact />
            </FooterContainer>
            <FooterAdress />
        </Wrapper>

    )
}

export default Footer;