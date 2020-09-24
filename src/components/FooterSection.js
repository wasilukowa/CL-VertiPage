import React from 'react';

import FooterSectionContainer from '../styles/FooterSectionContainer';

const FooterSection = ({ title, linksArray = [] }) => {
    return (
        <FooterSectionContainer border>
            <h2>{title}</h2>
            <ul>
                {linksArray.map((link, i) => {
                    return (
                        <li key={i}><a href="">{link}</a></li>
                    )
                })}
            </ul>
        </FooterSectionContainer>
    )
}

export default FooterSection;