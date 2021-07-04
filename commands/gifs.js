const fetch = require('node-fetch');

module.exports = async function (msg, args){
    if (args == 'bonk'){
        msg.channel.send('https://tenor.com/view/doom-doom-eternal-glory-kill-doom-glory-kill-doom-eternal-zombie-gif-18694440');
    }
    else if (args == "bifle"){
        msg.channel.send('https://tenor.com/view/slap-in-the-face-angry-gtfo-bitc-bitch-slap-gif-15667197');
    }
    else if (args == "AAAAAA"){
        msg.channel.send('https://tenor.com/view/doom-revanant-gif-10462704');
    }
    else if (args.length > 0) {
        keyword = args.join("");
        let url = 'https://g.tenor.com/v1/search?q=' + keyword + '&key=' + process.env.TENORKEY;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
    }
    else {
        msg.channel.send('https://tenor.com/view/dark-souls-dance-sif-gif-14567450');
    }
}