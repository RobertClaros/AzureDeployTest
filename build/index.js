"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules 
//const express = require('express'); -> CommonJS
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/ping/', (req, res) => {
    console.log('someone pinged here! ');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log('Server listening on port ', PORT);
});
app.use('/api/diaries', diaries_1.default);
