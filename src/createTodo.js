const createTodoModal = () => {
  const addTask = document.querySelector('.add-task');
  addTask.addEventListener('click', openTask);

  const removeTask = document.querySelector('.remove-task');
  removeTask.addEventListener('click', closeTask);

  const modal = document.querySelector('.task-popup');

  function openTask() {
    modal.classList.remove('hidden');
  }

  function closeTask() {
    modal.classList.add('hidden');
  }
};

const submitPressed = () => {
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', (e) => {
    hasSubmit = true;
    e.preventDefault();
    form.reset();
    openCard();
  });
};

export { createTodoModal, submitPressed };
