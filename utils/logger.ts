import Chalk,{Color} from 'chalk'

export enum enumCommand {
    DEV = "[DEV]",
    BOT = "[RBOT]",
    ERR = "[ERR]",
    DONE = "[DONE]",
    WARN = "[WARN]",
    SPAM = "[SPAM]",
    GROUP = "[GROUP]",
    PROCESS = "[PROCESS]"
}

interface IMessageLogger {
    command? : enumCommand | string,
    msg? : any
}

export const Logger = {
    error : (msg : IMessageLogger) => {
        return PrintLogger(Chalk.redBright(`${msg.command ? msg.command + "\t" : ""}${msg.msg}`))
    },
    warn : (msg : IMessageLogger) =>{
        return PrintLogger(Chalk.yellowBright(`${msg.command ? msg.command + "\t" : ""}${msg.msg}`))
    },
    success : (msg : IMessageLogger) =>{
        return PrintLogger(Chalk.greenBright(`${msg.command ? msg.command + "\t" : ""}${msg.msg}`))
    },
    default : () => {

    }
}

const PrintLogger = (res : any) => {
    return console.log((res))
}
