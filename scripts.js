const inputTask = document.getElementById('inputTask');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const exportImage = document.getElementById('exportImage');
const canvas = document.getElementById('canvas');

addTask.addEventListener('click', () => {
    if (taskList.children.length < 10 && inputTask.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = inputTask.value.trim();
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
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('To-Do List:', xOffset, yOffset - 10);

    for (let i = 0; i < taskList.children.length; i++) {
        const task = taskList.children[i];
        ctx.fillText((i + 1) + '. ' + task.textContent, xOffset, yOffset + lineHeight * i);
    }

    const img = new Image();
    img.src = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'todo_list.png';
    link.click();
});
