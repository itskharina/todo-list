export const createEventListeners = () => {
  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', openCard);

  const removeBtn = document.querySelector('.remove-btn');
  removeBtn.addEventListener('click', closeCard);

  const modal = document.querySelector('.task-popup');

  function openCard() {
    modal.classList.remove('hidden');
  }

  function closeCard() {
    modal.classList.add('hidden');
  }
};
