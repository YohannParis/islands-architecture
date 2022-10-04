import { createApp } from 'vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

createApp(Sidebar).mount('sidebar');
createApp(Footer).mount('footer');
