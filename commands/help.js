const messages = [
    "Le développeur a eu la flemme d'écrire cette aide donc démerde toi",
    "command not found"    
]

module.exports = async function (msg, args){
    const index = Math.floor(Math.random() * messages.length);
    msg.channel.send(messages[index])
}