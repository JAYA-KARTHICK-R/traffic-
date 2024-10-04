const express = require('express');
const app = express();
const port = 3000;
const { exec } = require('child_process');
const path = require('path');

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Sample API to provide traffic data
app.get('/api/traffic-data', (req, res) => {
    res.json({
        avgWaitTime: (Math.random() * 5 + 1).toFixed(2) + " mins",
        fuelConsumption: (15 + Math.random() * 5).toFixed(2) + "%",
        emissions: (10 + Math.random() * 5).toFixed(2) + "%"
    });
});

// API endpoint for ML model predictions
app.get('/api/predictions', (req, res) => {
    const scriptPath = path.join(__dirname, 'path/to/your_model_script.py');
    
    exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json({ prediction: stdout.trim() });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Traffic management system running at http://localhost:${port}`);
});
