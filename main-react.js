import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';


createRoot(document.querySelector('header'))
    .render(createElement(Header, null));
