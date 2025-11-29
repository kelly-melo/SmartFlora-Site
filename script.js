document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        
        // 1. Funcionalidade do Menu Hamburguer (para mobile)
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' para mostrar/esconder o menu
            navList.classList.toggle('active');
            // Altera o atributo para acessibilidade
            menuToggle.setAttribute('aria-expanded', navList.classList.contains('active')); 
        });

        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    const downloadButton = document.querySelector('.btn-download');
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            alert('Download iniciado! O SmartFlora agradece seu interesse em replicar o projeto.');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});