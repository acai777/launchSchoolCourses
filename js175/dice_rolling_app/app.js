const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL;

function getDiceRoll(min = 1, max = 6) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    
    const myURL = new URL(path, 'http://localhost:3000')
    let params = myURL.searchParams;
    let numberOfRolls = Number(params.get('rolls')) || 1;
    let diceSides = Number(params.get('sides')) || 6;
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    for (let index = 0; index < numberOfRolls; index +=1) {
      res.write(`Dice roll value: ${getDiceRoll(1, diceSides)}\n`);
    }

    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});