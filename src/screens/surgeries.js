// Surgery Registration Form for Smart O.R. Manager
import { navigateTo } from '../router.js';

export function renderSurgeries() {
    return `
    <main class="pt-24 pb-32 px-6 max-w-3xl mx-auto">
        <div class="mb-8 flex items-center justify-between">
            <div>
                <h2 class="text-3xl font-extrabold tracking-tight text-on-surface">Registar Cirurgia</h2>
                <p class="text-secondary text-sm">Insira os detalhes para a proposta de agenda.</p>
            </div>
            <button onclick="window.history.back()" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <form id="surgeryForm" class="space-y-8 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
            <!-- Patient Section -->
            <section class="space-y-4">
                <h3 class="label-md uppercase font-bold text-outline tracking-widest text-[10px]">Identificação do Paciente</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nome Completo" class="w-full px-5 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary font-medium" required>
                    <input type="text" placeholder="ID Interno (ex: #HN-992)" class="w-full px-5 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary font-medium" required>
                </div>
            </section>

            <!-- Procedure Section -->
            <section class="space-y-4">
                <h3 class="label-md uppercase font-bold text-outline tracking-widest text-[10px]">Detalhes do Procedimento</h3>
                <div class="space-y-4">
                    <select class="w-full px-5 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary font-medium">
                        <option>Artroscopia do Joelho</option>
                        <option>Herniorrafia Inguinal</option>
                        <option>Colecistectomia Laparoscópica</option>
                        <option>Apendicectomia</option>
                    </select>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-2">
                             <label class="block text-[10px] font-bold text-outline uppercase ml-1">Tempo Cirúrgico (min)</label>
                             <input type="number" value="90" class="w-full px-5 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary font-medium">
                        </div>
                        <div class="space-y-2">
                             <label class="block text-[10px] font-bold text-outline uppercase ml-1">Lateralidade</label>
                             <select class="w-full px-5 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary font-medium">
                                <option>Direito</option>
                                <option>Esquerdo</option>
                                <option>Bilateral</option>
                                <option>Não Aplicável</option>
                             </select>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Categories -->
            <section class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-3 p-4 bg-surface-container rounded-2xl">
                    <input type="checkbox" checked class="w-6 h-6 rounded-lg text-primary focus:ring-primary">
                    <span class="font-bold text-sm">Ambulatório</span>
                </div>
                <div class="flex items-center gap-3 p-4 bg-surface-container rounded-2xl">
                    <input type="checkbox" class="w-6 h-6 rounded-lg text-error focus:ring-error">
                    <span class="font-bold text-sm">Prioridade Urgente</span>
                </div>
            </section>

            <button type="submit" class="w-full editorial-gradient text-on-primary py-5 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-95 duration-200">
                Finalizar Registo
            </button>
        </form>

        <div id="successToast" class="hidden fixed bottom-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] animate-bounce">
            <span class="material-symbols-outlined text-green-400">check_circle</span>
            <span class="font-bold">Cirurgia registada com sucesso!</span>
        </div>
    </main>`;
}

export function handleSurgeries() {
    const form = document.getElementById('surgeryForm');
    if (!form) return;

    form.onsubmit = (e) => {
        e.preventDefault();
        const toast = document.getElementById('successToast');
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
            navigateTo('dashboard');
        }, 2000);
    };
}
