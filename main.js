const modalContainer = document.getElementById('modal-container');
document.getElementById('modal-exit-btn').addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-popup');
    modalContainer.classList.add('modal-container-exit');
});