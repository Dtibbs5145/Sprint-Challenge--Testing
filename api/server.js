const express = require('express');

const server = express();
server.use(express.json());

const games = [
    {
        title: 'Pong',
        genre: 'arcade',
        releaseYear: 1972
    },
    {
        title: 'Pacman',
        genre: 'arcade',
        releaseYear: 1980
    },
    {
        title: 'Ms. Pacman',
        genre: 'arcade',
        releaseYear: 1982
    },
    {
        title: 'Galaga',
        genre: 'arcade',
        releaseYear: 1981
    },
    {
        title: 'Space Invaders',
        genre: 'arcade',
        releaseYear: 1978
    },
];

server.get('/', (req, res) => {
    res.send(`<h1>The Arcade!</h1>`)
});

server.get('/games', (req, res) => {
    res.status(200).json(games);
});

server.post('/games', (req, res) => {
    if (req.body.title && req.body.genre !== undefined) {
        games.push(req.body)
        res.status(200).json(games)
    } else {
        res.status(422).json ({ message: 'Make sure all fields are filled in' });
    }
});

module.exports = server;