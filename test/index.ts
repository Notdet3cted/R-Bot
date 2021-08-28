import {enumCommand, Logger} from '../utils'
import {ConfigBot} from "../config";

// region Test Command

const req : string = "#haha  asd asd"

const handleCommand = (cmd : string) :string|null => {
    let isCmd = ConfigBot.prefixAllowed.includes(cmd.charAt(0))
    if(!isCmd) return null
    return cmd.charAt(0)
}

console.log(
    handleCommand(req)
)

//endregion


//region Logger
const TestLogger = () => {
    Logger.error("hahah")
    Logger.warn("hahah")
    Logger.bot("hahah")
    Logger.dev("hahah")
    Logger.done("hahah")
    Logger.process("hahah")
    Logger.custom("hahah")
}

// TestLogger()

//endregion