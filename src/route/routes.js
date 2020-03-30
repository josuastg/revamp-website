import HomePage from '../pages/home/HomePage';
import AgentPage from '../pages/agent/AgentPage';
import AboutPage from '../pages/about/AboutUsPage';
import CareerPage from '../pages/career/CareerPage';
import CommunityPage from '../pages/community/CommunityPage';
import FAQPage from '../pages/faq/FAQPage';



export const routes = [
    { path: '/', component: HomePage },
    { path: '/agent', component: AgentPage },
    { path: '/about', component: AboutPage },
    { path: '/community', component: CommunityPage },
    { path: '/career', component: CareerPage },
    { path: '/faq', component: FAQPage }
];