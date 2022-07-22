import { config } from 'dotenv';
import Joi from 'joi';
import { Env } from './types';
config();

const env = process.env as Env;

const envSchema = Joi.object<Env>({
  NODE_ENV: Joi.string().valid('production', 'development', 'local'),
  DATABASE_URL: Joi.string().uri().required(),
  BOT_TOKEN: Joi.string().required(),
  CLIENT_ID: Joi.number().unsafe(),
  GUILD_ID: Joi.number().unsafe(),
  PORT: Joi.number().required(),
});

const validation = envSchema.validate(env, { abortEarly: false, allowUnknown: true });
if (validation.error) {
  console.log(
    validation.error.details.map((eachError) => ({
      message: eachError.message,
      provided: eachError.context?.value,
    })),
  );
  process.exit();
}

export { env };
