const express = require('express');
const app = express();

app.use(express.static("build"));

app.get('/', (req, res) => {
  res
    .status(200)
    .sendFile(__dirname + '/index.html');
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
