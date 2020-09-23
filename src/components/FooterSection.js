import React from 'react';
import Wrapper from '../styles/Wrapper'
const FooterSection = ({ title, linksArray }) => {
    return (
        <Wrapper>
            <h2>{title}</h2>
            <ul>
                {linksArray.map((link, i) => {
                    return (
                        <li key={i}><a href="">{link}</a></li>
                    )
                })}
            </ul>

        </Wrapper>
    )
}

export default FooterSection;