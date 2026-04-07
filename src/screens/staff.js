// Staff & Resource Manager for Smart O.R.
export function renderStaff() {
    const userName = localStorage.getItem('userName') || 'Sofia Appleton';
    const userRole = localStorage.getItem('userRole') || 'Cirurgiã Sénior';
    const userStatus = localStorage.getItem('userStatus') || 'Disponível';

    return `
    <main class="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <div class="mb-10">
            <span class="text-[11px] font-bold tracking-widest uppercase text-secondary mb-2 block">Diretório Clínico</span>
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 class="text-4xl font-extrabold tracking-tight text-on-surface">Equipa e Recursos</h2>
                <div class="flex gap-3">
                    <div class="bg-surface-container flex items-center px-4 py-2 rounded-xl border border-transparent focus-within:border-primary transition-all">
                        <span class="material-symbols-outlined text-secondary text-sm mr-2">search</span>
                        <input class="bg-transparent border-none focus:ring-0 p-0 text-sm w-48 lg:w-64" placeholder="Filtrar por nome ou função..." type="text"/>
                    </div>
                    <button class="bg-primary text-on-primary px-6 py-2 rounded-xl flex items-center gap-2 hover:opacity-90 transition-all font-semibold text-sm shadow-md">
                        <span class="material-symbols-outlined text-sm">add</span> Registar
                    </button>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-8">
            <button class="px-5 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-wider">Todos</button>
            <button class="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors">Anestesistas</button>
            <button class="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors">Cirurgiões</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Sofia Appleton Card (Editable) -->
            <div id="profile-card" class="bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border-2 border-primary/20 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <div class="relative">
                    <img alt="${userName}" class="w-20 h-20 rounded-2xl object-cover group-hover:scale-105 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGZfkClFOmEONJWJKNnoh4bX-KjMO2fxDZFclVcri4tse7Gk7EmRhZr-Tbgo5YONgOmH2E5WeaI9XpYB8SZwxabCemqsn9O88o9IFj76apOi9xxUVhYrDyZh6RWD1sBVNFjHxVEfUj2b9a-howdx5KGmJ6ldJWFwzJ-98nLzJVDYUaSId4yLjr42vRCFEhYOSMA1lTbGOI4UeqOgPqAiqep5aIDWAGOS4N-GlnuYtOf-aQENfdbZnZeCVLJbNqmyy3yCXCsK_"/>
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 ${userStatus === 'Disponível' ? 'bg-green-500' : 'bg-error'} rounded-full border-4 border-surface-container-lowest"></div>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-start">
                        <div id="display-info">
                            <h3 class="font-bold text-lg text-primary leading-tight">${userName}</h3>
                            <p class="text-secondary text-sm font-medium">${userRole}</p>
                            <span class="${userStatus === 'Disponível' ? 'text-green-600' : 'text-error'} text-[10px] font-bold uppercase tracking-widest mt-1 block">${userStatus}</span>
                        </div>
                        <button id="edit-btn" class="bg-surface-container-high text-primary p-2 rounded-lg hover:bg-primary hover:text-white transition-all">
                            <span class="material-symbols-outlined text-sm">edit</span>
                        </button>
                    </div>
                </div>
                
                <!-- Edit Form (Hidden by default) -->
                <div id="edit-form" class="hidden absolute inset-0 bg-surface-container-lowest p-6 flex flex-col justify-center">
                    <div class="space-y-3">
                        <input id="edit-name" type="text" value="${userName}" class="w-full bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm font-bold text-primary focus:ring-1 focus:ring-primary">
                        <input id="edit-role" type="text" value="${userRole}" class="w-full bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm text-secondary focus:ring-1 focus:ring-primary">
                        <select id="edit-status" class="w-full bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm font-bold focus:ring-1 focus:ring-primary">
                            <option value="Disponível" ${userStatus === 'Disponível' ? 'selected' : ''}>Disponível</option>
                            <option value="Em Cirurgia" ${userStatus === 'Em Cirurgia' ? 'selected' : ''}>Em Cirurgia</option>
                            <option value="Ausente" ${userStatus === 'Ausente' ? 'selected' : ''}>Ausente</option>
                        </select>
                        <div class="flex gap-2 pt-2">
                            <button id="save-btn" class="flex-1 bg-primary text-on-primary py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md active:scale-95 transition-all">Guardar</button>
                            <button id="cancel-btn" class="px-4 py-2 bg-surface-container text-secondary rounded-xl text-xs font-bold uppercase tracking-widest active:scale-95 transition-all">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Staff Card 1 -->
            <div class="bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                <div class="relative">
                    <img alt="Dr. Sarah Chen" class="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2iblbmuGbejzWzEpT_7rqSS7K9VKy6L95npnbDWzhSSSWz9ZNhX6kyBFk2ZOqJAinCI1zeEyr4812IqlFjxvAfB6dmSd6Yxjat6SUea7WwJIyKYSJhj2Ppe_xQx9mgmHw1R0zYq-bBHbN_JHRg6CnYdkDPwISDugQMFqhBPaCgXGYDsvSFlqBThbflDTfmSavWGi4iqdn4Z8BZk0WguniHT_saFy6G4DSphcNwaLNyIKuqVRdOVkr6ecd3Oky0LB_eBxQnbNd"/>
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-surface-container-lowest"></div>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-bold text-lg text-on-surface-variant leading-tight">Dr. Sarah Chen</h3>
                            <p class="text-secondary text-sm font-medium">Anestesista</p>
                        </div>
                        <span class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Disponível</span>
                    </div>
                </div>
            </div>
            
            <!-- Staff Card 2 -->
            <div class="bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                <div class="relative">
                    <img alt="Marcus Thorne" class="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXQ_ZmK2ygV0jyGeU3N3PV3bl3XRzGMT-qGH2sKIJTnbQlu84ZrCLUcUykMW_mlxzFkj8RidC-Qid-prQQV836KAv6qAku7lWsZxLTPqbW1bvEpxY4tvdghTX6K7zkTnkXNpRejm7HhuQUa1PJ7pJ7fX92ACTQ6TQ0R9vWvpCEaEfmM8mqD0CmOU4RzliIKEYVQE4cmQpg6-g2SnCKzUG1in4XXjrNet2cc4o0hifHNxMOFoOAS0iPHQVmj1aNxMsRMI1nw6ZY"/>
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-error rounded-full border-4 border-surface-container-lowest"></div>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-bold text-lg text-on-surface-variant leading-tight">Marcus Thorne, RN</h3>
                            <p class="text-secondary text-sm font-medium">Enfermeiro Circulante</p>
                        </div>
                        <span class="bg-error-container text-error px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Em Cirurgia</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <p class="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Prontidão Operacional</p>
                <p class="text-4xl font-extrabold text-primary mb-2">92%</p>
                <div class="w-full bg-primary/20 h-1.5 rounded-full overflow-hidden">
                    <div class="w-[92%] h-full bg-primary"></div>
                </div>
            </div>
        </div>
    </main>`;
}

export function handleStaff() {
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const editForm = document.getElementById('edit-form');
    const displayInfo = document.getElementById('display-info');

    if (editBtn) {
        editBtn.onclick = () => {
            editForm.classList.remove('hidden');
            displayInfo.classList.add('invisible');
        };
    }

    if (cancelBtn) {
        cancelBtn.onclick = () => {
            editForm.classList.add('hidden');
            displayInfo.classList.remove('invisible');
        };
    }

    if (saveBtn) {
        saveBtn.onclick = () => {
            const newName = document.getElementById('edit-name').value;
            const newRole = document.getElementById('edit-role').value;
            const newStatus = document.getElementById('edit-status').value;

            localStorage.setItem('userName', newName);
            localStorage.setItem('userRole', newRole);
            localStorage.setItem('userStatus', newStatus);

            // Re-render the screen to show changes
            import('../app.js').then(() => {
                const content = document.getElementById('content');
                content.innerHTML = renderStaff();
                handleStaff();
            });
        };
    }
}
