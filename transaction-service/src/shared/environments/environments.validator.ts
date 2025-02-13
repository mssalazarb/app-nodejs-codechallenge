import * as Joi from 'joi';

export const environmentsValidator = Joi.object({
  NODE_ENV: Joi.string().required(),
  API_KEY: Joi.string().required(),
  APP_NAME: Joi.string().required(),
  DB_HOST: Joi.string(),
  DB_NAME: Joi.string(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  PORT: Joi.number().required(),
  PREFIX: Joi.string().required(),
  TIMEZONE: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),
  REDIS_TIMEOUT: Joi.number().required(),
  KAFKA_HOST: Joi.string().required(),
  KAFKA_PORT: Joi.number().required(),
  KAFKA_TIMEOUT: Joi.number().required(),
  KAFKA_RETRIES: Joi.number().required(),
  KAFKA_CLIENT_ID: Joi.string().required(),
  KAFKA_GROUP_ID: Joi.string().required(),
  TRANSACTION_TOPIC: Joi.string().required(),
  TRANSACTION_EVALUATED_TOPIC: Joi.string().required(),
});
