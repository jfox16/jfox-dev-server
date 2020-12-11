import express from 'express';

var app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send(JSON.stringify({ Hello: 'World'}));
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});

export default app;