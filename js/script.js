// --- 1. CONFIGURAÇÃO DO TEMA (DARK MODE) ---
const btnTheme = document.getElementById('toggle-theme');
const body = document.body;

// Verifica se existe uma preferência salva no navegador ao carregar a página
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark');
    if (btnTheme) btnTheme.textContent = 'Modo Claro';
}

// Lógica de clique para alternar o tema
if (btnTheme) {
    btnTheme.addEventListener('click', () => {
        body.classList.toggle('dark');
        
        let theme = 'light';
        if (body.classList.contains('dark')) {
            theme = 'dark';
            btnTheme.textContent = 'Modo Claro';
        } else {
            btnTheme.textContent = 'Modo Escuro';
        }
        
        // Salva a escolha do usuário para as outras páginas
        localStorage.setItem('theme', theme);
    });
}

// --- 2. ANO AUTOMÁTICO NO FOOTER ---
const spanAno = document.getElementById('ano-atual');
if (spanAno) {
    spanAno.textContent = new Date().getFullYear();
}

// --- 3. VALIDAÇÃO DO FORMULÁRIO (Só executa se estiver na página de contato) ---
const form = document.getElementById('form-contato');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso (simulação).');
        form.reset();
    });
}

console.log("Sistema de Felipe Mendes carregado com sucesso!");
