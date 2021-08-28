import redis, {RedisClient} from 'redis'

const connectRedis = async () => {
    const client: RedisClient = await redis.createClient()
    return client;
}