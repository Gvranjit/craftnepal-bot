export interface Env {
  NODE_ENV: 'development' | 'production' | 'local';
  DATABASE_URL: string;
  BOT_TOKEN: string;
  CLIENT_ID: string;
  GUILD_ID: string;
  [key: string]: string | number;
}
