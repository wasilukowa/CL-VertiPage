import styled from 'styled-components';

const FooterSectionContainer = styled.div`
    padding-bottom: 30px;
    border-bottom: ${props => props.border ? `1px solid ${props => props.theme.lightGrey}` : 'none'};
    margin-bottom: 20px;
    flex-basis: 45%;
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

    @media (min-width: 730px){
        border: none;
    }
    @media (min-width: 980px){
        flex-basis: 24%;
    }
`;

export default FooterSectionContainer;