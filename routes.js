const express = require('express');
const { exec } = require('child_process');
const path = require('path')

const app = express();
app.use(express.json())
app.use(express.static("public"));
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

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})



module.exports = app;
