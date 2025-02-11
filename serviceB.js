const express = require('express');
const axios = require('axios');  
const app = express();
const port = 3000; 

app.get('/api/serviceB', async (req, res) => {
  try {
    
    const response = await axios.get('http://192.168.100.10:3000/api/serviceA');
    res.json({
      message: 'Service B on VM2 received the following from Service A:',
      serviceAData: response.data
    });
  } catch (error) {
    console.error('Error calling Service A:', error.message);
    res.status(500).json({ error: 'Error calling Service A' });
  }
});

app.listen(port, () => {
  console.log(`Service B is listening on port ${port}`);
});
