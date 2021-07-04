const reaction = require("./commands/reactions.js");
const gif = require("./commands/gifs.js");
const help = require("./commands/help.js");


const emojis = ['ronaldinho', 'cheh', 'ouille']

const commandsmess = {gif, help}

module.exports = async function (msg) {
    for (const emoji of emojis){
        if (msg.content.toLowerCase().includes(emoji)){
            reaction(msg, emoji);
        }
    }

    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '!'){
        command = command.substring(1);
        commandsmess[command](msg, tokens);
    }
}
