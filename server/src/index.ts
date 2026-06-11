import express from 'express';
import path from 'node:path';

const app = express();

app.use(express.static(path.join(import.meta.dirname, 'assets')));

app.get('/contacts', (req, res) => {
  res.status(200).type('text/plain');

  res.send('Hello world');
  // res.send('again?');
});

app.get('/', (req, res) => {
  res.status(200).json({
    data: {
      name: 'vladimir',
      company: 'anthropic',
    },
  });

  res.send();
});

app.listen(3001, '127.0.0.1', () => {
  console.log('listen on 127.0.0.1:3001');
});
