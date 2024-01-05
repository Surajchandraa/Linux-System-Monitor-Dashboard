const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json())
app.get('/resource', (req, res) => {
    exec('bash resource.sh', (err, stdout, stderr) => {
        if (err) {
            console.error('Error executing script:', err);
            res.status(500).json({ error: 'An error occurred' });
        } else if (stderr) {
            console.error('Script encountered an error:', stderr);
            res.status(500).json({ error: 'Script error' });
        } else {
            let data=JSON.parse(stdout)
            res.json(data);
        }
    });
});



module.exports = app;
