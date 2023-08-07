const inputTask = document.getElementById('inputTask');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const exportImage = document.getElementById('exportImage');
const canvas = document.getElementById('canvas');

addTask.addEventListener('click', () => {
    if (taskList.children.length < 10 && inputTask.value.trim() !== '') {
        const newTask = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        newTask.appendChild(checkbox);
        newTask.insertAdjacentText('beforeend', inputTask.value.trim());
        taskList.appendChild(newTask);
        inputTask.value = '';
    }
});

exportImage.addEventListener('click', () => {
    const ctx = canvas.getContext('2d');
    const lineHeight = 30;
    const xOffset = 10;
    const yOffset = 40;

    canvas.width = 400;
    canvas.height = lineHeight * 10 + yOffset * 2;
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#3498db';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('To-Do List', canvas.width / 2, yOffset - 10);

    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'black';

    for (let i = 0; i < taskList.children.length; i++) {
        const task = taskList.children[i];
        const checkbox = task.querySelector('input[type="checkbox"]');
        const checked = checkbox.checked ? '✓ ' : '';
        ctx.fillText((i + 1) + '. ' + checked + task.textContent, xOffset, yOffset + lineHeight * i);
    }

    const img = new Image();
    img.src = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'todo_list.png';
    link.click();
});

