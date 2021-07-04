module.exports = function (msg, args){
    const emoji = msg.guild.emojis.cache.find(emoji => emoji.name === args);
    msg.react(emoji);
}