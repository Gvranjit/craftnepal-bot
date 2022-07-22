import { expressApp } from './app';
import { env } from './dotenv';
expressApp.listen(env.PORT, () => {
  console.info(`The server is now running at port ${env.PORT}`);
});
