import { Redis } from "ioredis"
import "dotenv/config"

export const redis = new Redis({
  password: process.env.REDIS_PASSWORD,
  username: process.env.REDIS_USER,
  port: +process.env.REDIS_PORT!
})