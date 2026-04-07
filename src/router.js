// Router for Smart O.R. Manager PWA
import { renderHeader, renderNavbar } from './components/layout.js';
import { renderDashboard } from './screens/dashboard.js';
import { renderSchedule } from './screens/schedule.js';
import { renderStaff } from './screens/staff.js';
import { renderRoomDetail } from './screens/roomDetail.js';
import { renderLogin, handleLogin } from './screens/login.js';
import { renderSurgeries, handleSurgeries } from './screens/surgeries.js';

const routes = {
    'login': { render: renderLogin, handle: handleLogin },
    'dashboard': { render: renderDashboard },
    'schedule': { render: renderSchedule },
    'staff': { render: renderStaff, handle: () => import('./screens/staff.js').then(m => m.handleStaff()) },
    'room-detail': { render: renderRoomDetail },
    'surgeries': { render: renderSurgeries, handle: handleSurgeries }
};

export function initRouter() {
    console.log('Router initialized');
    
    // Initial render based on current hash or default
    const initialRoute = window.location.hash.replace('#', '') || 'dashboard';
    navigateTo(initialRoute);

    // Handle back/forward buttons
    window.addEventListener('popstate', (event) => {
        const route = (event.state && event.state.route) || 'dashboard';
        renderScreen(route);
    });
}

export function navigateTo(route) {
    window.history.pushState({ route }, '', `#${route}`);
    renderScreen(route);
}

function renderScreen(route) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Auth Guard: If not logged in and not on login page, redirect to login
    if (!isLoggedIn && route !== 'login') {
        route = 'login';
        window.history.replaceState({ route }, '', '#login');
    }

    const headerEl = document.getElementById('header');
    const contentEl = document.getElementById('content');
    const navbarEl = document.getElementById('navbar');

    // Hide Header/NavBar on login screen
    if (route === 'login') {
        if (headerEl) headerEl.classList.add('hidden');
        if (navbarEl) navbarEl.classList.add('hidden');
    } else {
        if (headerEl) headerEl.classList.remove('hidden');
        if (navbarEl) navbarEl.classList.remove('hidden');
        if (headerEl) headerEl.innerHTML = renderHeader();
        if (navbarEl) navbarEl.innerHTML = renderNavbar(route);
    }

    // Render Main Content
    if (contentEl) contentEl.innerHTML = routes[route].render();

    // Call Component-specific Handlers
    if (routes[route].handle) {
        routes[route].handle();
    }

    attachEventListeners();
}

function attachEventListeners() {
    // Nav links (Header)
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.onclick = () => navigateTo(btn.dataset.route);
    });

    // Nav buttons (Bottom Bar)
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = () => navigateTo(btn.dataset.route);
    });

    // Floating Action Button (FAB) - Usually for Add Surgery
    const fabs = document.querySelectorAll('button .material-symbols-outlined');
    fabs.forEach(fab => {
        if (fab.innerText === 'add') {
            fab.parentElement.onclick = () => navigateTo('surgeries');
        }
    });

    // Room Details (Dashboard)
    document.querySelectorAll('button').forEach(btn => {
        if (btn.innerText.includes('Ver Detalhes') || btn.innerText.includes('Detalhes')) {
            btn.onclick = () => navigateTo('room-detail');
        }
    });

    // Logout Helper (Optional: can add later)
}
