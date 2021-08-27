import chalk from 'chalk'
import figlet from 'figlet'

export const FigletChalkStarter = (text : string) => {
    return console.log(
        chalk.magenta(
            figlet.textSync(text, {
                font : "Swamp Land",
                horizontalLayout: "full"
                })
        )
    )
}