// Main entry point for Smart O.R. Manager
import { initRouter, navigateTo } from './router.js';
import { renderHeader, renderNavbar } from './components/layout.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Smart O.R. Manager App Started');

    // Initial Layout Setup
    const headerEl = document.getElementById('header');
    const navbarEl = document.getElementById('navbar');

    if (headerEl) headerEl.innerHTML = renderHeader();
    if (navbarEl) navbarEl.innerHTML = renderNavbar('dashboard');

    initRouter();

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        navigateTo('login');
    }
});
