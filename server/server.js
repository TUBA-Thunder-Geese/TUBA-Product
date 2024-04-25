const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

app.use(express.json());

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.use((req, res) => res.status(404).send('Page not found'))

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => [
  console.log(`listening on port ${port}`)
])
