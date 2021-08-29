import {Client, Message} from '@open-wa/wa-automate'
import {typeConfigBot, ConfigBot} from '../config'
import {IPrefix, Logger} from "../utils";
import {typeUserSchema} from "../databases/model";
import {typeGroupSchema} from "../databases/model/group.model";

/**
 * - Validate prefix
 * - Authorization Users / Groups
 * @param Rbot
 * @param msg
 */
export const messageRouter = async (Rbot : Client, msg : Message) => {
    try {
        let prefix : IPrefix = await validPrefix(msg.body)
        if(prefix.prefix == null) return;

        console.log(msg.chatId)
        let dataAuthorized = await authorizing(msg)

        // Rbot.sendText(msg.chatId, `Your prefix is valid`)

    } catch (e) {
        Logger.error(`messageRouter ${e}`)
    }
}

const authorizing = async (msg: Message) => {
    try {
        // hmget redis

    }catch (e) {

    }
}


// region validate prefix
/**
 * Just clearance whitespace, get prefix and set to prefix Interface
 * @param target
 * @param validate
 */
const validPrefix = (target : string, validate :Array<string> = ConfigBot.prefixAllowed) : IPrefix=> {
    let res : IPrefix = {prefix : null}
    target = target.trim()
    for (let i = 0; i < validate.length; i++ ){
        if( target.startsWith(validate[i])) {
            res.prefix = validate[i]
            break;
        }
    }
    return res
}
//endregion