import Redis, {RedisClient} from 'redis'
import {promisify} from 'util'

const client = Redis.createClient()

export const redisTest = async (key: string) => {
    let obj = {
        data1 : "data1",
        data2 : "data2",
    }
    let rdisSet = client.hmset(key, obj, (val) => val)
    console.log(rdisSet)

    let redisGet = client.hgetall(key, Redis.print)
    console.log(redisGet)


}


/**
 * check existing in redis
 * check existing to MongoDB
 * set caching to redis
 *
 * @param key
 */
export const authorize = async(key : string) => {
    return await checkIdRedis(key)
}

export const checkIdRedis = (id : string) => {
    const redisClient = Redis.createClient()
    const getSync = promisify(redisClient.get).bind(redisClient)
    getSync(id).then(val => console.log("set :" + val))

}

export const test = authorize("123")

