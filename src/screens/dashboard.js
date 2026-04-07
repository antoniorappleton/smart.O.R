// Dashboard for Smart O.R. Manager
export function renderDashboard() {
    return `
    <main class="pt-24 px-6 max-w-7xl mx-auto pb-32">
        <div class="mb-8">
            <p class="font-label text-sm font-semibold tracking-wider text-secondary uppercase mb-1">Estado em Tempo Real</p>
            <h2 class="text-3xl font-extrabold text-on-surface tracking-tight">Bloco Operatório</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            <div class="bg-surface-container-lowest p-6 rounded-full shadow-sm">
                <p class="text-sm font-label text-secondary font-medium text-center">Total de Salas</p>
                <p class="text-3xl font-bold text-primary mt-1 text-center">12</p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-full shadow-sm text-center">
                <p class="text-sm font-label text-secondary font-medium">Ocupadas</p>
                <p class="text-3xl font-bold text-error mt-1">8</p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-full shadow-sm text-center">
                <p class="text-sm font-label text-secondary font-medium">Disponíveis</p>
                <p class="text-3xl font-bold text-on-secondary-container mt-1">3</p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-full shadow-sm border-2 border-primary/5 text-center">
                <p class="text-sm font-label text-secondary font-medium">Tempo Médio</p>
                <p class="text-3xl font-bold text-primary-container mt-1">18<span class="text-sm font-normal">m</span></p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <!-- OR 1 - Occupied -->
            <div class="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm transition-all hover:shadow-md group">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-on-surface mb-1">O.R. 101</h3>
                            <div class="flex items-center gap-2">
                                <span class="flex h-2 w-2 rounded-full bg-error"></span>
                                <span class="text-xs font-label font-bold uppercase tracking-widest text-error">Ocupada</span>
                            </div>
                        </div>
                        <div class="bg-error-container text-on-error-container px-4 py-2 rounded-xl text-center">
                            <p class="text-[10px] font-bold uppercase leading-none mb-1">Tempo Restante</p>
                            <p class="text-xl font-black tabular-nums">00:42:15</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="bg-surface-container-low p-5 rounded-xl">
                            <label class="text-[10px] font-bold text-secondary uppercase tracking-wider mb-2 block">Procedimento Atual</label>
                            <p class="text-lg font-bold text-on-surface leading-snug">Colecistectomia Laparoscópica</p>
                        </div>
                        <div class="flex items-center justify-between px-2">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                    <img alt="Surgeon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBELkFxJi-wtXPzRn-fgAXwYdz3geDLO9JEIdLjNXr3nxGrgjoxMIXQZ3QqxQBVw9VDKoIS1XXzhelIXnDatCl_s3YzsRvcds9oWr3XPRcme-cNcz3DtafuvSC843h7kiX_ZIPjcZSqKxo24ZfiPQoo7DfRPkDL9HkzPGsuBgD0xXR0Vkq3dSPEnS8-r396qnS6uwdrTIVOnKSXdz0k2UDF1qlUR_X3xcCm2zlmu7MaY667E9LFr6_tXI8SqtyQByG-WaBs3mac"/>
                                </div>
                                <div>
                                    <p class="text-[10px] font-bold text-secondary uppercase tracking-tighter">Cirurgião Responsável</p>
                                    <p class="font-bold text-on-surface">Dr. Sarah Jenkins</p>
                                </div>
                            </div>
                            <button class="bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">visibility</span> Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>
                <div class="h-2 w-full bg-error-container">
                    <div class="h-full bg-error w-3/4"></div>
                </div>
            </div>

            <!-- OR 2 - Cleaning -->
            <div class="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-on-surface mb-1">O.R. 102</h3>
                            <div class="flex items-center gap-2">
                                <span class="flex h-2 w-2 rounded-full bg-tertiary"></span>
                                <span class="text-xs font-label font-bold uppercase tracking-widest text-tertiary">Limpeza</span>
                            </div>
                        </div>
                        <div class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-xl text-center">
                            <p class="text-[10px] font-bold uppercase leading-none mb-1">Tempo Decorrido</p>
                            <p class="text-xl font-black tabular-nums">00:08:42</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center py-8 text-center bg-surface/50 rounded-xl border-2 border-dashed border-outline-variant/30">
                        <span class="material-symbols-outlined text-4xl text-tertiary mb-2">mop</span>
                        <p class="font-bold text-on-surface">Limpeza Terminal em Curso</p>
                        <p class="text-sm text-secondary">Conclusão estimada em 6 minutos</p>
                    </div>
                    <div class="mt-6 flex justify-between items-center px-2">
                        <div class="flex items-center gap-2 text-secondary">
                            <span class="material-symbols-outlined text-sm">history</span>
                            <span class="text-xs font-medium">Última: Artroplastia da Anca (Dr. Miller)</span>
                        </div>
                        <button class="text-primary text-sm font-bold">Gerir Equipa</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- FAB -->
        <button class="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-2xl flex items-center justify-center z-40">
            <span class="material-symbols-outlined text-3xl">add</span>
        </button>
    </main>`;
}
