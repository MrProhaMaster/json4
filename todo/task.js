document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task__input');
  const taskList = document.getElementById('tasks__list');
  const taskForm = document.getElementById('tasks__form');

  // Функция добавления новой задачи
  function addTask(taskText) {
    if (!taskText) return;

    const task = document.createElement('div');
    task.className = 'task';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = taskText;

    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = '&times;';

    taskRemove.addEventListener('click', (event) => {
      event.preventDefault();
      task.remove();
    });

    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    taskList.appendChild(task);
  }

  // Обработка отправки формы
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = ''; // Очистка поля ввода после добавления
    }
  });

  // Обработка нажатия Enter в поле ввода
  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Очистка поля ввода после добавления
      }
    }
  });
});