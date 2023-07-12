const express = require('express');

const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ];
  res.json(users);
});

app.post('/chat', (req, res) => {

  res.status(200).send('Chat message sent successfully');
});
app.post('/tasks', (req, res) => {
  const { task, assigner } = req.body;
  res.status(200).send('Task assigned successfully');
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});