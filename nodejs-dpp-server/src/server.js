const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Default route to serve the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/Inlogpagina DPP.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});