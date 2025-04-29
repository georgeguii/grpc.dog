document.addEventListener('DOMContentLoaded', () => {
    // Definição dos códigos de status gRPC
    const grpcStatuses = [
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

    // Criar cards para cada status
    function createStatusCards(statuses) {
        statusGrid.innerHTML = '';
        
        if (statuses.length === 0) {
            statusGrid.innerHTML = '<div class="no-results">Nenhum status encontrado. Tente outra busca.</div>';
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