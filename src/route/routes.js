import HomePage from '../pages/home/HomePage';
import DetailCheckPrice from "../pages/detail-check-price/DetailCheckPrice";
import AgentPage from '../pages/agent/AgentPage';
import AboutPage from '../pages/about/AboutUsPage';
import CareerPage from '../pages/career/CareerPage';
import CommunityPage from '../pages/community/CommunityPage';
import FAQPage from '../pages/faq/FAQPage';
import DetailClaimPage from "../pages/detail-claim/DetailClaim.vue";
import NewClaimPage from "../pages/new-claim/NewClaimPage.vue";
import ClaimSuccessPage from "../pages/claim-success/ClaimSuccessPage.vue";



export const routes = [
    { path: '/', component: HomePage },
    { path: '/agent', component: AgentPage },
    { path: '/about', component: AboutPage },
    { path: '/community', component: CommunityPage },
    { path: '/career', component: CareerPage },
    { path: '/faq', component: FAQPage },
    { path: '/tariff', component: DetailCheckPrice },
    { path: '/claim/:id', component: DetailClaimPage },
    { path: '/claim', component: NewClaimPage},
    { path: '/success', component: ClaimSuccessPage },
];