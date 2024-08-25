// script.ts
// Selecionando elementos do DOM
var taskInput = document.getElementById('new-task-input');
var addTaskBtn = document.getElementById('add-task-btn');
var todoList = document.getElementById('todo-list');
var filterBtns = document.querySelectorAll('.filter-btn');
// Lista de tarefas (mantida no localStorage)
var tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
// Função para salvar as tarefas no localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Função para renderizar a lista de tarefas
function renderTasks(filter) {
    if (filter === void 0) { filter = 'all'; }
    todoList.innerHTML = '';
    var filteredTasks = tasks.filter(function (task) {
        if (filter === 'completed')
            return task.completed;
        if (filter === 'pending')
            return !task.completed;
        return true; // 'all'
    });
    filteredTasks.forEach(function (task) {
        var _a, _b, _c;
        var li = document.createElement('li');
        li.className = "todo-item ".concat(task.completed ? 'completed' : '');
        li.innerHTML = "\n        <span class=\"task-text\">".concat(task.text, "</span>\n        <div class=\"todo-actions\">\n          <button class=\"edit-btn\">Editar</button>\n          <button class=\"delete-btn\">Excluir</button>\n          <button class=\"toggle-btn\">").concat(task.completed ? 'Desmarcar' : 'Concluir', "</button>\n        </div>\n      ");
        // Ações dos botões
        (_a = li.querySelector('.edit-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return editTask(task.id); });
        (_b = li.querySelector('.delete-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return deleteTask(task.id); });
        (_c = li.querySelector('.toggle-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return toggleTaskCompletion(task.id); });
        todoList.appendChild(li);
    });
}
// Adicionar nova tarefa
function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText) {
        var newTask = {
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
function editTask(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (task) {
        var newText = prompt('Edite a tarefa:', task.text);
        if (newText !== null && newText.trim() !== '') {
            task.text = newText.trim();
            saveTasks();
            renderTasks();
        }
    }
}
// Excluir tarefa
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    saveTasks();
    renderTasks();
}
// Marcar ou desmarcar tarefa como concluída
function toggleTaskCompletion(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}
// Filtrar tarefas
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { return b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter') || 'all';
        renderTasks(filter);
    });
});
// Inicializar a lista ao carregar a página
renderTasks();
// Event listener para adicionar tarefa ao clicar no botão
addTaskBtn.addEventListener('click', addTask);
// Adicionar tarefa com Enter
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        addTask();
});
