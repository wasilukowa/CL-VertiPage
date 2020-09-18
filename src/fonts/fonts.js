import { createGlobalStyle } from 'styled-components';

import OleoScriptWoff from './oleo-script-v9-latin-regular.woff';
import OleoScriptWoff2 from './oleo-script-v9-latin-regular.woff2';

import OpenSansBoldWoff from './open-sans-v18-latin-800.woff';
import OpenSansBoldWoff2 from './open-sans-v18-latin-800.woff2';

import OpenSansRegularWoff from './open-sans-v18-latin-regular.woff';
import OpenSansRegularWoff2 from './open-sans-v18-latin-regular.woff2';

import OpenSansLightWoff from './open-sans-v18-latin-300.woff';
import OpenSansLightWoff2 from './open-sans-v18-latin-300.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Oleo Script';
        src: local('Oleo Script'), local('Oleo Script'),
        url(${OleoScriptWoff2}) format('woff2'),
        url(${OleoScriptWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face{
        font-family: 'Open Sans Bold';
        src: local('Open Sans Bold'), local('Open Sans Bold'),
        url(${OpenSansBoldWoff2}) format('woff2'),
        url(${OpenSansBoldWoff}) format('woff');
        font-weight: 800;
        font-style: normal;
    }
    @font-face{
        font-family: 'Open Sans Regular';
        src: local('Open Sans Regular'), local('Open Sans Regular'),
        url(${OpenSansRegularWoff2}) format('woff2'),
        url(${OpenSansRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face{
        font-family: 'Open Sans Light';
        src: local('Open Sans Light'), local('Open Sans Light'),
        url(${OpenSansLightWoff2}) format('woff2'),
        url(${OpenSansLightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;