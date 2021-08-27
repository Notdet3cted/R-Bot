import dotenv from 'dotenv'
import {Client, create, Message} from '@open-wa/wa-automate'
import {enumCommand, FigletChalkStarter, Logger} from './utils'
import {connectMongoDB, initConfiguration} from './config'

dotenv.config()

const Start = async (RBot :Client) => {
    FigletChalkStarter("R-Dev")
    console.log("start")
    RBot.onAnyMessage(function(p1: Message){
        console.log(p1)
    }, undefined)
}

// @ts-ignore
create(initConfiguration(true, Start))
    .then((rizqy : Client) =>
        // @ts-ignore
        connectMongoDB(process.env.MONGODB_URI).then(()=> {
            Logger.success({command: enumCommand.BOT, msg: "Database connected"})
            Start(rizqy)
        }).catch((err : string) => {
            Logger.error({command : enumCommand.ERR ,msg : err})
            process.exit()
        })
    )
    .catch((err : any) => Logger.error({command : enumCommand.ERR, msg:err}))