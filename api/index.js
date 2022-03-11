const express = require('express');

const app = express();
const port = 3001;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hi There')
});

app.post('/tasks', (req, res) => {
  // update func
  // mongo db
  res.send('tasks [{}, {}, {}]')
});

app.post('/task/:id', (req, res) => {
  // update func
  // mongo db
  res.send('task {}')
});


app.post('/task/:id/edit', (req, res) => {
	// req.params.title
	// req.params.description
  // update func
  // mongo db
  res.send('task {}')
});


app.post('/task/:id/delete', (req, res) => {
	// req.params.title
	// req.params.description
  // remve func
  // mongo db
  res.send('task {}')
});

app.listen(port, () => { 
	console.log(`Example app listening on port ${port}`)
})
