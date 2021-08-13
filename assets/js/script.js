const hamburger = document.getElementById('hamburger');
const menuLIST = document.getElementById('menu-list');

hamburger.addEventListener('click', () => {
    menuLIST.classList.toggle('show');
});
