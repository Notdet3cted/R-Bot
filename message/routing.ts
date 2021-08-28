import {Client, Message} from '@open-wa/wa-automate'
import {typeConfigBot, ConfigBot} from '../config'
import {Logger} from "../utils";

export const messageRouter = (Rbot : Client, msg : Message) => {
    try {
        const {
            chatId,
            body,
            id
        } : Message = msg
        let isCmd = ConfigBot.prefixAllowed.includes(body.charAt(0))
                    ? body.charAt(0)
                    : null
        if(!isCmd) return Rbot.sendText(chatId, `Sorry i dont understand`)
        Rbot.sendText(chatId, `Your message registered in my databases.\nYour ID = ${id} \nIm being development`)

        // Rbot.sendText(chatId, "RBot In development")

    } catch (e) {
        Logger.error(`messageRouter ${e}`)
    }
}

const handleCommand = (cmd : string) :string|null => {
    let isCmd = ConfigBot.prefixAllowed.includes(cmd.charAt(0))
    if(!isCmd) return null
    return cmd.charAt(0)
}