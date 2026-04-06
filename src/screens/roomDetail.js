// Room Detail & Milestone Logging for Smart O.R.
export function renderRoomDetail() {
    return `
    <main class="pt-24 px-4 max-w-4xl mx-auto pb-32 space-y-6">
        <section class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <span class="label-md uppercase tracking-wider text-on-secondary-container bg-secondary-container px-3 py-1 rounded-full text-[10px] font-bold">In Progress</span>
                <h2 class="headline-sm font-bold text-on-surface mt-2">OR 4: Orthopedic Suite</h2>
            </div>
            <div class="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center gap-6">
                <div class="text-center">
                    <p class="text-[10px] uppercase font-bold text-outline tracking-widest">Elapsed</p>
                    <p class="text-2xl font-extrabold text-primary tabular-nums">01:42:15</p>
                </div>
                <div class="h-10 w-[1px] bg-outline-variant/30"></div>
                <div class="text-center">
                    <p class="text-[10px] uppercase font-bold text-outline tracking-widest">Current Stage</p>
                    <p class="text-sm font-semibold text-on-surface">Intra-Operative</p>
                </div>
            </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <section class="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-primary">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="label-md uppercase font-bold text-outline tracking-widest mb-1">Procedure</h3>
                        <p class="headline-sm font-bold text-on-surface">Total Knee Arthroplasty</p>
                    </div>
                    <div class="text-right">
                        <h3 class="label-md uppercase font-bold text-outline tracking-widest mb-1">Laterality</h3>
                        <span class="bg-error-container text-on-error-container px-3 py-1 rounded-lg font-bold text-sm">LEFT SIDE</span>
                    </div>
                </div>
            </section>
            <section class="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                <h3 class="label-md uppercase font-bold text-outline tracking-widest mb-4">Surgical Team</h3>
                <ul class="space-y-3">
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-blue-700 text-sm">medical_services</span>
                        <span class="text-sm font-medium">Anesthesia: Dr. Miller</span>
                    </li>
                </ul>
            </section>
        </div>

        <section class="space-y-4">
            <h3 class="label-md uppercase font-bold text-on-surface tracking-widest px-1">Log Surgical Milestones</h3>
            <div class="grid grid-cols-1 gap-3">
                <button class="w-full flex items-center justify-between p-6 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl shadow-md transform active:scale-[0.98] transition-transform">
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-3xl">medical_information</span>
                        <div class="text-left">
                            <span class="block text-[10px] uppercase font-bold text-on-primary-container tracking-widest">Next Action</span>
                            <span class="text-xl font-bold">Log Incision</span>
                        </div>
                    </div>
                    <span class="material-symbols-outlined">play_circle</span>
                </button>
            </div>
        </section>
    </main>`;
}
