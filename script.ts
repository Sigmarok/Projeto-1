// script.ts

// Tipos e Interfaces
interface Task {
    id: string;
    text: string;
    completed: boolean;
  }
  
  // Selecionando elementos do DOM
  const taskInput = document.getElementById('new-task-input') as HTMLInputElement;
  const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
  const todoList = document.getElementById('todo-list') as HTMLUListElement;
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Lista de tarefas (mantida no localStorage)
  let tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  
  // Função para salvar as tarefas no localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Função para renderizar a lista de tarefas
  function renderTasks(filter: string = 'all') {
    todoList.innerHTML = '';
  
    const filteredTasks = tasks.filter(task => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true; // 'all'
    });
  
    filteredTasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `todo-item ${task.completed ? 'completed' : ''}`;
      li.innerHTML = `
        <span class="task-text">${task.text}</span>
        <div class="todo-actions">
          <button class="edit-btn">Editar</button>
          <button class="delete-btn">Excluir</button>
          <button class="toggle-btn">${task.completed ? 'Desmarcar' : 'Concluir'}</button>
        </div>
      `;
  
      // Ações dos botões
      li.querySelector('.edit-btn')?.addEventListener('click', () => editTask(task.id));
      li.querySelector('.delete-btn')?.addEventListener('click', () => deleteTask(task.id));
      li.querySelector('.toggle-btn')?.addEventListener('click', () => toggleTaskCompletion(task.id));
  
      todoList.appendChild(li);
    });
  }
  
  // Adicionar nova tarefa
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: taskText,
        completed: false,
      };
      tasks.push(newTask);
      saveTasks();
      renderTasks();
      taskInput.value = '';
    }
  }
  
  // Editar tarefa
  function editTask(id: string) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      const newText = prompt('Edite a tarefa:', task.text);
      if (newText !== null && newText.trim() !== '') {
        task.text = newText.trim();
        saveTasks();
        renderTasks();
      }
    }
  }
  
  // Excluir tarefa
  function deleteTask(id: string) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }
  
  // Marcar ou desmarcar tarefa como concluída
  function toggleTaskCompletion(id: string) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    }
  }
  
  // Filtrar tarefas
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderTasks(filter);
    });
  });
  
  // Inicializar a lista ao carregar a página
  renderTasks();
  
  // Event listener para adicionar tarefa ao clicar no botão
  addTaskBtn.addEventListener('click', addTask);
  
  // Adicionar tarefa com Enter
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
  