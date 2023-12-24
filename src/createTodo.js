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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTask();
    }
  });
};

// const submitPressed = () => {
//   const submitBtn = document.querySelector('.submit-btn');
//   submitBtn.addEventListener('click', () => {
//  add code that adds the stuff inputted into an array or smth
//  });
// };

export { createTodoModal };
