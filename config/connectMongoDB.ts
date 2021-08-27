import Mongoose from 'mongoose'
import {Logger} from '../utils'

const connectMongoDB = (URI:string) :Promise<any> => {
    return Mongoose.connect(URI, {
        }).then(() => {
            return
        }).catch(err => {
            throw Error("Database connection error")
        })
}

export {
    connectMongoDB
}