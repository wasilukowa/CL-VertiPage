import React from 'react';
import FooterSection from '../components/FooterSection';

const links = [
    'Etiam feugiat condimentum',
    'Aliquam imperdiet suscipit odio',
    'Sed porttitor cras in erat nec',
    'Felis varius pellentesque potenti',
    'Nullam scelerisque blandit leo'
]
const Footer = () => {
    return (
        <>
            <FooterSection title="Random Stuff" linksArray={links} />
            <FooterSection title="Random Stuff" linksArray={links} />
            <FooterSection title="Random Stuff" linksArray={links} />

        </>
    )
}

export default Footer;