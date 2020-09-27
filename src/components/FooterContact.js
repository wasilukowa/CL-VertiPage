import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const FooterContact = styled.div`
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
    .icon-container {
        display: inline-flex;
        margin-bottom: 1.4em;
    }
    i { 
        width: 40px;
        height: 40px;
        background-color: ${props => props.theme.grey};
        border-radius: 6px;
        color: white;
        font-size: 1.8em;
        margin-right: 0.2em;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: .2s;
    }
    i:hover{
        background-color: ${props => props.theme.black}
    }
    p { 
        font-family: 'Open Sans Light';
        font-size: 1em;
        line-height: 2em;
        margin-top: 0.6em;
        color: ${props => props.theme.black};
    }
`;

const FooterSection = ({ title, linksArray = [] }) => {
    return (
        <FooterContact>
            <h2>Contact Us</h2>
            <div className='icon-contaier'>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-pinterest"></i>
            </div>
            <p>1234 Fictional Road</p>
            <p>Nashville, TN 00000</p>
            <p>(800) 555-0000</p>
        </FooterContact>
    )
}

export default FooterSection;