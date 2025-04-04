// Seleciona os elementos do DOM
const sideMenu = document.getElementById('sideMenu');
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenu');

// Abre o menu ao clicar no botão de menu (ícone de hambúrguer)
menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open'); // Adiciona a classe "open" para exibir o menu
});

// Fecha o menu ao clicar no botão "X"
closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open'); // Remove a classe "open" para ocultar o menu
}); 