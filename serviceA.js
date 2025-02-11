const express = require('express');
const app = express();
const port = 3000; 


app.get('/api/serviceA', (req, res) => {
  res.json({ message: 'Hello from Service A running on VM1 (192.168.100.10)' });
});

app.listen(port, () => {
  console.log(`Service A is listening on port ${port}`);
});
