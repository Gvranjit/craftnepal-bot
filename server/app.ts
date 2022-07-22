import express from 'express';
import next from 'next';
import { initializeDiscordBot } from './startup/startup.discord-bot';
import { env } from './dotenv';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';

//starup discord
initializeDiscordBot();

// when using middleware `hostname` and `port` must be provided below
const nextApp = next({ dev, hostname, port: env.PORT });
const handle = nextApp.getRequestHandler();
const expressApp = express();
nextApp.prepare().then(() => {
  console.log('it works');

  expressApp.use('/api', (req, res, next) => {
    res.send('THIS IS ROOT API');
  });

  expressApp.get('*', async (req, res, next) => {
    console.log(req.url);
    await handle(req, res, req.originalUrl as any);
  });
});
export { expressApp, nextApp };
