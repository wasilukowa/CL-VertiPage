import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import Logo from './LogoVerti';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = props => {
    return (
        <HeaderContainer>
            <Logo />
            <Navigation />
        </ HeaderContainer>
    )
}

export default Header;