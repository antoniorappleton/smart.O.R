// Login Screen for Smart O.R. Manager
import { navigateTo } from '../router.js';

export function renderLogin() {
    return `
    <div class="min-h-screen flex items-center justify-center p-6 bg-surface">
        <div class="w-full max-w-md bg-surface-container-lowest p-8 rounded-[2rem] shadow-xl border border-outline-variant/10">
            <div class="flex flex-col items-center mb-8">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <span class="material-symbols-outlined text-4xl text-primary">clinical_notes</span>
                </div>
                <h2 class="text-3xl font-extrabold text-on-surface tracking-tight">Smart O.R.</h2>
                <p class="text-secondary text-sm mt-2">Bem-vinda, Dra. Sofia</p>
            </div>

            <form id="loginForm" class="space-y-6">
                <div>
                    <label class="block text-[11px] font-bold uppercase tracking-widest text-outline mb-2 ml-1">Email</label>
                    <input type="email" id="email" value="sofiaappleton@gmail.com" class="w-full px-5 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all font-medium" placeholder="nome@hospital.pt" required>
                </div>
                <div>
                    <label class="block text-[11px] font-bold uppercase tracking-widest text-outline mb-2 ml-1">Palavra-passe</label>
                    <input type="password" id="password" value="ADOROestaVIDA" class="w-full px-5 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all font-medium" placeholder="••••••••" required>
                </div>

                <div id="loginError" class="hidden text-error text-xs font-bold text-center mt-2 px-2 bg-error-container/20 py-2 rounded-lg">
                    Crendenciais incorrectas. Tente novamente.
                </div>

                <button type="submit" class="w-full editorial-gradient text-on-primary py-5 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-95 duration-200 mt-4">
                    Entrar no Sistema
                </button>
            </form>

            <div class="mt-8 text-center">
                <p class="text-xs text-secondary italic">"Gestão Inteligente, Bloco Eficiente."</p>
            </div>
        </div>
    </div>`;
}

export function handleLogin() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'sofiaappleton@gmail.com' && password === 'ADOROestaVIDA') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', 'Sofia Appleton');
            navigateTo('dashboard');
        } else {
            const errorEl = document.getElementById('loginError');
            errorEl.classList.remove('hidden');
        }
    };
}
