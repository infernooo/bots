const discord = require("discord.js");
const mou = ""

const bot = new discord.Client();
let sp, e;
let ch = ['572485995543527445', '572486227727613982']

let name = ['']

bot.on('ready', () => {
    console.log('catching...')
})

bot.on('message', message => {
    if(ch.includes(message.channel.id)){

    if (message.content.startsWith(name[0]) && message.content.includes('!captcha') && message.author.id === '432616859263827988') {
        let msg = name[0].concat(" Please type `!")
        message.content = message.content.replace(msg, '')
        message.content = message.content.replace('` to continue.', '');
        message.channel.send(',' + message.content);
    }

    else if (message.content.includes(", A rare Pokémon has spawned! Will you catch it?")){
        console.log('caught')
        message.channel.send(',c 9')
    }
}
})

bot.login(mou)
