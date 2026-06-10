import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });

  if (req.url === '/contacts') {
    return res.end(
      JSON.stringify({
        data: {
          name: 'Denis',
          company: 'amoCRM',
          email: 'dskorik@team.amocrm.com',
        },
      }),
    );
  }

  if (req.url === '/company') {
    return res.end(
      JSON.stringify({
        data: {
          name: 'amoCRM',
          foundation: '19.11.1003',
        },
      }),
    );
  }

  res.end();
});

server.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001');
});
