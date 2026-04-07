// Surgical Schedule for Smart O.R. Manager
export function renderSchedule() {
    return `
    <main class="pt-24 pb-32 px-6 max-w-3xl mx-auto">
        <div class="mb-10">
            <h2 class="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Agenda Cirúrgica</h2>
            <div class="flex items-center gap-2 text-secondary font-label text-sm font-medium">
                <span class="material-symbols-outlined text-base">calendar_today</span>
                <span>Quinta-feira, 24 de Outubro</span>
                <span class="mx-2 text-outline-variant">•</span>
                <span>8 Procedimentos Agendados</span>
            </div>
        </div>

        <div class="relative space-y-12">
            <!-- Timeline Vertical Line -->
            <div class="absolute left-[19px] top-4 bottom-4 w-px bg-surface-container-highest"></div>

            <!-- Timeline Item 1: Urgent -->
            <div class="relative flex gap-8">
                <div class="relative z-10 flex flex-col items-center">
                    <div class="w-10 h-10 rounded-full bg-error flex items-center justify-center text-white ring-8 ring-surface">
                        <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">emergency</span>
                    </div>
                </div>
                <div class="flex-1 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                    <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="px-2 py-0.5 rounded bg-error text-on-error text-[10px] font-bold uppercase tracking-wider">Urgente</span>
                                <span class="text-primary font-bold text-sm tracking-tight">SALA 04</span>
                            </div>
                            <h3 class="text-xl font-bold text-on-surface leading-tight">Aponeurectomia Radical</h3>
                        </div>
                        <div class="text-right">
                            <span class="block text-lg font-black text-on-surface-variant">08:00 - 09:30</span>
                            <span class="text-xs font-label font-semibold text-secondary uppercase tracking-widest">90 min</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-surface-container-low">
                        <div class="flex flex-col">
                            <span class="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">Cirurgião</span>
                            <span class="text-sm font-semibold text-on-surface">Dr. Ricardo Silva</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">Anestesista</span>
                            <span class="text-sm font-semibold text-on-surface">Dr. Elena M.</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">Enfermeiro(a)</span>
                            <span class="text-sm font-semibold text-on-surface">Ana Martins</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Timeline Item 2: In-patient -->
            <div class="relative flex gap-8">
                <div class="relative z-10 flex flex-col items-center">
                    <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-surface">
                        <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">bed</span>
                    </div>
                </div>
                <div class="flex-1 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                    <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="px-2 py-0.5 rounded bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider">Internamento</span>
                                <span class="text-primary font-bold text-sm tracking-tight">SALA 02</span>
                            </div>
                            <h3 class="text-xl font-bold text-on-surface leading-tight">Artroscopia do Joelho</h3>
                        </div>
                        <div class="text-right">
                            <span class="block text-lg font-black text-on-surface-variant">10:15 - 11:45</span>
                            <span class="text-xs font-label font-semibold text-secondary uppercase tracking-widest">90 min</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-surface-container-low">
                        <div class="flex flex-col">
                            <span class="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">Cirurgião</span>
                            <span class="text-sm font-semibold text-on-surface">Dr. Marcos V.</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">Anestesista</span>
                            <span class="text-sm font-semibold text-on-surface">Dr. Carla Dias</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">Enfermeiro(a)</span>
                            <span class="text-sm font-semibold text-on-surface">Paulo Santos</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Current Time Indicator -->
            <div class="relative flex gap-8 items-center py-2">
                <div class="relative z-10 flex flex-col items-center">
                    <div class="w-10 h-px bg-primary ring-4 ring-primary-container"></div>
                </div>
                <div class="flex-1 flex items-center gap-4">
                    <hr class="flex-1 border-primary/20"/>
                    <span class="text-[10px] font-black text-primary uppercase tracking-[0.2em] whitespace-nowrap">Hora Atual 14:15</span>
                    <hr class="flex-1 border-primary/20"/>
                </div>
            </div>
        </div>

        <!-- FAB (Schedule Focus) -->
        <button class="fixed bottom-24 right-6 w-14 h-14 editorial-gradient rounded-full shadow-lg flex items-center justify-center text-white active:scale-95 duration-200 transition-transform">
            <span class="material-symbols-outlined text-2xl">add</span>
        </button>
    </main>`;
}
