import HomePage from '../components/home/HomePage';
import AgentPage from '../components/AgentPage';
import AboutPage from '../components/AboutUsPage';
import CareerPage from '../components/CareerPage';
import CommunityPage from '../components/CommunityPage';


export const routes = [
    { path: '/', component: HomePage },
    { path: '/agent', component: AgentPage },
    { path: '/about', component: AboutPage },
    { path: '/community', component: CommunityPage },
    { path: '/career', component: CareerPage }
];