import { createApp } from 'vue';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './Footer.vue';
import Header from './Header';
import Sidebar from './Sidebar.vue';

// Header
createRoot(document.querySelector('header'))
    .render(createElement(Header, null));

// Sidebar
createApp(Sidebar).mount('sidebar');

// Footer
createApp(Footer).mount('footer');
