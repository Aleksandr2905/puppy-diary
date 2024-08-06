(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalItems: document.querySelectorAll('.modal-item'),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modalItems.forEach(item => {
    item.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
