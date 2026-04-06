// Shared layout components for Smart O.R. Manager

export function renderHeader() {
    return `
    <header class="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm">
        <div class="flex justify-between items-center w-full px-6 py-4">
            <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-blue-900 dark:text-blue-200">clinical_notes</span>
                <h1 class="font-inter tracking-tight headline-sm font-bold text-blue-900 dark:text-blue-200 text-lg">Smart O.R.</h1>
            </div>
            <div class="flex items-center gap-4">
                <div class="hidden md:flex items-center gap-6 mr-6">
                    <button class="nav-link text-blue-700 dark:text-blue-300 font-semibold cursor-pointer" data-route="dashboard">Dashboard</button>
                    <button class="nav-link text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors px-2 py-1 rounded cursor-pointer" data-route="schedule">Schedule</button>
                    <button class="nav-link text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors px-2 py-1 rounded cursor-pointer" data-route="staff">Staff</button>
                </div>
                <div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold overflow-hidden">
                    <img alt="Staff Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGZfkClFOmEONJWJKNnoh4bX-KjMO2fxDZFclVcri4tse7Gk7EmRhZr-Tbgo5YONgOmH2E5WeaI9XpYB8SZwxabCemqsn9O88o9IFj76apOi9xxUVhYrDyZh6RWD1sBVNFjHxVEfUj2b9a-howdx5KGmJ6ldJWFwzJ-98nLzJVDYUaSId4yLjr42vRCFEhYOSMA1lTbGOI4UeqOgPqAiqep5aIDWAGOS4N-GlnuYtOf-aQENfdbZnZeCVLJbNqmyy3yCXCsK_"/>
                </div>
            </div>
        </div>
    </header>`;
}

export function renderNavbar(activeRoute = 'dashboard') {
    const isActive = (route) => route === activeRoute ? 'text-blue-700 dark:text-blue-300 bg-blue-100/50 dark:bg-blue-900/40 rounded-xl' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors';
    const fillIcon = (route) => route === activeRoute ? "font-variation-settings: 'FILL' 1;" : "";

    return `
    <nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-50 rounded-t-xl">
        <button class="nav-btn flex flex-col items-center justify-center px-4 py-1 ${isActive('dashboard')}" data-route="dashboard">
            <span class="material-symbols-outlined" style="${fillIcon('dashboard')}">dashboard</span>
            <span class="font-inter text-[11px] font-semibold tracking-wide uppercase mt-1">Dashboard</span>
        </button>
        <button class="nav-btn flex flex-col items-center justify-center px-4 py-1 ${isActive('schedule')}" data-route="schedule">
            <span class="material-symbols-outlined" style="${fillIcon('schedule')}">event_note</span>
            <span class="font-inter text-[11px] font-semibold tracking-wide uppercase mt-1">Schedule</span>
        </button>
        <button class="nav-btn flex flex-col items-center justify-center px-4 py-1 ${isActive('staff')}" data-route="staff">
            <span class="material-symbols-outlined" style="${fillIcon('staff')}">group</span>
            <span class="font-inter text-[11px] font-semibold tracking-wide uppercase mt-1">Staff</span>
        </button>
        <button class="nav-btn flex flex-col items-center justify-center px-4 py-1 ${isActive('more')}" data-route="more">
            <span class="material-symbols-outlined">more_horiz</span>
            <span class="font-inter text-[11px] font-semibold tracking-wide uppercase mt-1">More</span>
        </button>
    </nav>`;
}
