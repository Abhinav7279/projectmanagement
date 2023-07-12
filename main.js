const usersList = document.getElementById('users');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');
const sendButton = document.getElementById('send-button');
const taskInput = document.getElementById('task-input');
const assignButton = document.getElementById('assign-button');

let currentUser;
let users = []; 
let tasks = []; 

function initializeSite() {
  users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ];

  renderUserList();
  currentUser = users[0];

  sendButton.addEventListener('click', sendMessage);
  assignButton.addEventListener('click', assignTask);
}

function renderUserList() {
  usersList.innerHTML = '';
  users.forEach((user) => {
    const userElement = document.createElement('li');
    userElement.textContent = user.name;
    userElement.addEventListener('click', () => {
      currentUser = user;
      messagesContainer.innerHTML = '';
      taskInput.value = '';
    });
    usersList.appendChild(userElement);
  });
}

function sendMessage() {
  const message = messageInput.value;
  const chatMessage = { sender: currentUser.name, receiver: currentUser.name, message };
  displayMessage(chatMessage);
  messageInput.value = '';
}
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${message.sender} to ${message.receiver}: ${message.message}`;
  messagesContainer.appendChild(messageElement);
}
function assignTask() {
  const task = taskInput.value;
  const assignedTask = { task, assigner: currentUser.name };
  tasks.push(assignedTask);
  taskInput.value = '';
 
  displayTask(assignedTask);
}

function displayTask(task) {
  const taskElement = document.createElement('div');
  taskElement.textContent = `${task.assigner} assigned task: ${task.task}`;
  messagesContainer.appendChild(taskElement);
}
initializeSite();