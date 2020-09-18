import { createGlobalStyle } from 'styled-components';

import OleoScriptWoff from './oleo-script-v9-latin-regular.woff';
import OleoScriptWoff2 from './oleo-script-v9-latin-regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Oleo Script';
        src: local('Oleo Script'), local('Oleo Script'),
        url(${OleoScriptWoff2}) format('woff2'),
        url(${OleoScriptWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;