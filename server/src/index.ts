import express from 'express';
import path from 'node:path';

const app = express();

const PORT = Number(process.env.SERVER_PORT ?? 3001);
const HOST_NAME = process.env.SERVER_HOSTNAME ?? 'localhost';

app.use(express.static(path.join(import.meta.dirname, 'assets')));

app.get('/contacts', (req, res) => {
  return res.status(200).json({
    name: 'Jorge',
    company: 'Google',
  });
});

app.listen(PORT, HOST_NAME, () => {
  console.log(`listen on http://${HOST_NAME}:${PORT}`);
});
