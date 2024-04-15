import express from 'express'; //ESModules 
//const express = require('express'); -> CommonJS
import diaryRouter from './routes/diaries' 
const app = express();
app.use(express.json());

const PORT = 3000;
app.get('/ping/', (req, res) => {
    console.log('someone pinged here! ');
    res.send('pong' )
});

app.listen(PORT, ()=> {
    console.log('Server listening on port ', `${PORT}`)
});

app.use('/api/diaries',diaryRouter)



