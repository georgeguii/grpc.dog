// Definição dos códigos de status gRPC em português e inglês
const grpcStatusesPT = [
    { code: 0, name: "OK", description: "Sucesso. A requisição foi bem-sucedida." },
    { code: 1, name: "CANCELLED", description: "A operação foi cancelada, tipicamente pelo chamador." },
    { code: 2, name: "UNKNOWN", description: "Erro desconhecido. Um exemplo de onde isso pode ocorrer é se um Status recebido do servidor é um código não reconhecido pelo cliente." },
    { code: 3, name: "INVALID_ARGUMENT", description: "O cliente especificou um argumento inválido. Isso indica argumentos que são inválidos independentemente do estado do sistema." },
    { code: 4, name: "DEADLINE_EXCEEDED", description: "O prazo expirou antes que a operação pudesse ser concluída." },
    { code: 5, name: "NOT_FOUND", description: "Alguma entidade solicitada não foi encontrada." },
    { code: 6, name: "ALREADY_EXISTS", description: "A entidade que um cliente tentou criar já existe." },
    { code: 7, name: "PERMISSION_DENIED", description: "O chamador não tem permissão para executar a operação especificada." },
    { code: 8, name: "RESOURCE_EXHAUSTED", description: "Algum recurso foi esgotado, talvez uma cota por usuário, ou talvez todo o sistema de arquivos esteja sem espaço." },
    { code: 9, name: "FAILED_PRECONDITION", description: "A operação foi rejeitada porque o sistema não está em um estado necessário para a execução da operação." },
    { code: 10, name: "ABORTED", description: "A operação foi abortada, geralmente devido a um problema de simultaneidade." },
    { code: 11, name: "OUT_OF_RANGE", description: "A operação foi tentada além do intervalo válido." },
    { code: 12, name: "UNIMPLEMENTED", description: "A operação não está implementada ou não é suportada/habilitada neste serviço." },
    { code: 13, name: "INTERNAL", description: "Erros internos. Significa que algum invariante esperado pelo sistema subjacente foi quebrado." },
    { code: 14, name: "UNAVAILABLE", description: "O serviço está indisponível no momento. Isso é provavelmente uma condição transitória." },
    { code: 15, name: "DATA_LOSS", description: "Perda ou corrupção de dados irrecuperável." },
    { code: 16, name: "UNAUTHENTICATED", description: "O cliente não possui autenticação válida para a operação solicitada." }
];

const grpcStatusesEN = [
    { code: 0, name: "OK", description: "Success. The request was successful." },
    { code: 1, name: "CANCELLED", description: "The operation was cancelled, typically by the caller." },
    { code: 2, name: "UNKNOWN", description: "Unknown error. An example of where this might occur is if a Status received from another server is not recognized." },
    { code: 3, name: "INVALID_ARGUMENT", description: "The client specified an invalid argument. This indicates arguments that are invalid regardless of the system state." },
    { code: 4, name: "DEADLINE_EXCEEDED", description: "The deadline expired before the operation could complete." },
    { code: 5, name: "NOT_FOUND", description: "The requested entity was not found." },
    { code: 6, name: "ALREADY_EXISTS", description: "The entity that a client attempted to create already exists." },
    { code: 7, name: "PERMISSION_DENIED", description: "The caller does not have permission to execute the specified operation." },
    { code: 8, name: "RESOURCE_EXHAUSTED", description: "Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space." },
    { code: 9, name: "FAILED_PRECONDITION", description: "The operation was rejected because the system is not in a state required for the operation's execution." },
    { code: 10, name: "ABORTED", description: "The operation was aborted, typically due to a concurrency issue." },
    { code: 11, name: "OUT_OF_RANGE", description: "The operation was attempted past the valid range." },
    { code: 12, name: "UNIMPLEMENTED", description: "The operation is not implemented or is not supported/enabled in this service." },
    { code: 13, name: "INTERNAL", description: "Internal errors. This means that some invariants expected by the underlying system have been broken." },
    { code: 14, name: "UNAVAILABLE", description: "The service is currently unavailable. This is most likely a transient condition." },
    { code: 15, name: "DATA_LOSS", description: "Unrecoverable data loss or corruption." },
    { code: 16, name: "UNAUTHENTICATED", description: "The client does not have valid authentication credentials for the operation." }
];

document.addEventListener('DOMContentLoaded', () => {
    // Configuração do alternador de tema e idioma
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const body = document.body;
    const htmlDoc = document.getElementById('html-doc');
    const themeIcon = document.querySelector('.theme-toggle-icon');
    const themeText = document.getElementById('theme-text');
    const languageText = document.getElementById('language-text');
    
    // Verificar se há uma preferência de tema salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkTheme();
    } else {
        themeText.textContent = 'Escuro';
    }
    
    // Verificar se há uma preferência de idioma salva
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        enableEnglish();
    } else {
        languageText.textContent = 'EN';
    }
    
    // Adicionar evento de clique ao botão de alternância de tema
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            enableLightTheme();
        } else {
            enableDarkTheme();
        }
    });
    
    // Adicionar evento de clique ao botão de alternância de idioma
    languageToggle.addEventListener('click', function() {
        if (htmlDoc.lang === 'pt-br') {
            enableEnglish();
        } else {
            enablePortuguese();
        }
    });
    
    // Função para ativar o tema escuro
    function enableDarkTheme() {
        body.classList.add('dark-theme');
        themeIcon.innerHTML = '<path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>';
        themeText.textContent = htmlDoc.lang === 'pt-br' ? 'Claro' : 'Light';
        localStorage.setItem('theme', 'dark');
    }
    
    // Função para ativar o tema claro
    function enableLightTheme() {
        body.classList.remove('dark-theme');
        themeIcon.innerHTML = '<path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1S11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>';
        themeText.textContent = htmlDoc.lang === 'pt-br' ? 'Escuro' : 'Dark';
        localStorage.setItem('theme', 'light');
    }
    
    // Função para ativar o idioma inglês
    function enableEnglish() {
        htmlDoc.lang = 'en';
        document.getElementById('page-title').textContent = 'gRPC.dog - gRPC Status with Dogs';
        document.getElementById('header-description').textContent = 'gRPC status codes illustrated with dogs';
        document.getElementById('language-text').textContent = 'PT';
        document.getElementById('theme-text').textContent = body.classList.contains('dark-theme') ? 'Light' : 'Dark';
        document.getElementById('search').placeholder = document.getElementById('search').getAttribute('data-placeholder-en');
        document.getElementById('ad-placeholder-top').textContent = 'Ad space';
        document.getElementById('ad-placeholder-bottom').textContent = 'Ad space';
        document.getElementById('footer-text-1').textContent = 'gRPC.dog - Inspired by HTTP Cat';
        document.getElementById('footer-text-2').textContent = 'Dog images to illustrate gRPC status codes';
        document.getElementById('github-text').textContent = 'GitHub';
        document.getElementById('developer-info').textContent = 'Developed by ';
        document.getElementById('developer-info').innerHTML = 'Developed by <a href="https://github.com/georgeguii" target="_blank">@georgeguii</a>';
        document.getElementById('image-source').textContent = 'Images: Unsplash and Pexels';
        
        // Atualizar textos dos status em inglês
        updateStatusLanguage('en');
        localStorage.setItem('language', 'en');
    }
    
    // Função para ativar o idioma português
    function enablePortuguese() {
        htmlDoc.lang = 'pt-br';
        document.getElementById('page-title').textContent = 'gRPC.dog - Status gRPC com Cachorros';
        document.getElementById('header-description').textContent = 'Status gRPC ilustrados com cachorros';
        document.getElementById('language-text').textContent = 'EN';
        document.getElementById('theme-text').textContent = body.classList.contains('dark-theme') ? 'Claro' : 'Escuro';
        document.getElementById('search').placeholder = document.getElementById('search').getAttribute('data-placeholder-pt');
        document.getElementById('ad-placeholder-top').textContent = 'Espaço para anúncio';
        document.getElementById('ad-placeholder-bottom').textContent = 'Espaço para anúncio';
        document.getElementById('footer-text-1').textContent = 'gRPC.dog - Inspirado no HTTP Cat';
        document.getElementById('footer-text-2').textContent = 'Imagens de cachorros para ilustrar códigos de status gRPC';
        document.getElementById('github-text').textContent = 'GitHub';
        document.getElementById('developer-info').textContent = 'Desenvolvido por ';
        document.getElementById('developer-info').innerHTML = 'Desenvolvido por <a href="https://github.com/georgeguii" target="_blank">@georgeguii</a>';
        document.getElementById('image-source').textContent = 'Imagens: Unsplash e Pexels';
        
        // Atualizar textos dos status em português
        updateStatusLanguage('pt');
        localStorage.setItem('language', 'pt');
    }
    
    // Variável para armazenar os status atuais com base no idioma
    let grpcStatuses = htmlDoc.lang === 'en' ? grpcStatusesEN : grpcStatusesPT;

    const statusGrid = document.getElementById('status-grid');
    const searchInput = document.getElementById('search');
    let modal = null;

    // Função para gerar URL da imagem de cachorro
    function getDogImageUrl(statusCode) {
        // Usando o serviço dog.ceo para obter imagens aleatórias de cachorros
        // Como não temos imagens específicas para cada código, usamos o código como seed
        // Para o código 0, usamos uma abordagem diferente para garantir que a imagem seja carregada
        if (statusCode === 0) {
            return `https://placedog.net/500/280?random=30`;
        }
        return `https://placedog.net/500/280?id=${statusCode}`;
    }

    // Função para atualizar o idioma dos status
    function updateStatusLanguage(lang) {
        grpcStatuses = lang === 'en' ? grpcStatusesEN : grpcStatusesPT;
        const filteredStatuses = filterStatuses(searchInput.value);
        createStatusCards(filteredStatuses);
    }
    
    // Criar cards para cada status
    function createStatusCards(statuses) {
        statusGrid.innerHTML = '';
        
        if (statuses.length === 0) {
            statusGrid.innerHTML = `<div class="no-results">${htmlDoc.lang === 'pt-br' ? 'Nenhum status encontrado. Tente outra busca.' : 'No status found. Try another search.'}</div>`;
            return;
        }

        statuses.forEach(status => {
            const card = document.createElement('div');
            card.className = 'status-card';
            card.innerHTML = `
                <img src="${getDogImageUrl(status.code)}" alt="gRPC ${status.code}" class="status-image" onerror="this.onerror=null; this.src='https://placedog.net/500/280?random=${Math.random()}';">
                <div class="status-info">
                    <div class="status-code">${status.code}</div>
                    <div class="status-name">${status.name}</div>
                    <div class="status-description">${status.description.substring(0, 100)}${status.description.length > 100 ? '...' : ''}</div>
                </div>
            `;

            card.addEventListener('click', () => showModal(status));
            statusGrid.appendChild(card);
        });
    }

    // Criar e mostrar modal com detalhes do status
    function showModal(status) {
        // Se já existe um modal, remova-o
        if (modal) {
            document.body.removeChild(modal);
        }

        modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${getDogImageUrl(status.code)}" alt="gRPC ${status.code}" class="modal-image" onerror="this.onerror=null; this.src='https://placedog.net/500/280?random=${Math.random()}';">

                <div class="modal-info">
                    <div class="modal-code">${status.code}</div>
                    <div class="modal-name">${status.name}</div>
                    <div class="modal-description">${status.description}</div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.style.display = 'block';

        // Fechar modal ao clicar no X ou fora do conteúdo
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Fechar modal com tecla ESC
        document.addEventListener('keydown', handleEscKey);
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
            modal = null;
            document.removeEventListener('keydown', handleEscKey);
        }
    }

    function handleEscKey(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }

    // Filtrar status com base na busca
    function filterStatuses(query) {
        query = query.toLowerCase().trim();
        
        if (!query) {
            return grpcStatuses;
        }

        return grpcStatuses.filter(status => {
            return (
                status.code.toString().includes(query) ||
                status.name.toLowerCase().includes(query) ||
                status.description.toLowerCase().includes(query)
            );
        });
    }

    // Inicializar a página
    createStatusCards(grpcStatuses);

    // Adicionar evento de busca
    searchInput.addEventListener('input', () => {
        const filteredStatuses = filterStatuses(searchInput.value);
        createStatusCards(filteredStatuses);
    });
});