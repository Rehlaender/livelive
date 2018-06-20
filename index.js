const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
// Serve static files from the React app
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
// Put all API endpoints under '/api'
app.get('/api/hi', (req, res) => {

  // Generate hi
  const hi = {message: 'hi'};

  // Return hi
  res.json(hi);

  console.log(`Sent ${hi} to app`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
