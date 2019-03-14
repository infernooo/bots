const discord = require("discord.js");
/*require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;

http.createServer().listen(port);*/

const TOKEN = 'MzUyNTYxNTIzNjU2MzU5OTM2.Di3IwA._a82uAudJzYQyVKFdpDU2QaSnlU';
let Xp = '50',
    LuckyXp = '';
let NoSpawn = 'The chance for a successful rare spawn is very low, but you can do it! Keep trying.';
let NoFight = ', Nothing to fight right now!';
let InfernoID = '352561523656359936',
    BotID = '432616859263827988';
MoveNo = '2';
chnl = '551385745743675392'
const bot = new discord.Client();


var spam;

bot.on('ready', () => {
    console.log('-----------------------------------------------------------------');
    console.log('                        AUTO MOD MOIN                            ');
    console.log('-----------------------------------------------------------------');

})

bot.on('error', error => {
    console.log(error)
})


function spamSt() {
    spam = setInterval(() => {
        bot.channels.get('551385745743675392').send('spaaaaaaaaammmmm');
    }, 2000)
}

function spamSp() {
    clearInterval(spam)
}


bot.on('message', (message) => {

    if (message.channel.id === '551385745743675392') {
        if(message.content.includes('.')){
            spamSt();
        }
        else if (message.content.includes(', A **rare** Raider Pokémon has arrived! Who will be brave enough to take on the challenge?')) 
                   spamSp();
        else if(message.content.includes('A rare pokemon has spawned! Who will catch it?')){
            spamSp();
            message.channel.send(',c 9');
            spamSt();
        }
        else if(message.content.includes('//')){
            spamSp();
        }

        for (var i = 0; i < message.embeds.length; i++) {
            if (message.embeds[i] && message.embeds[i].title && message.embeds[i].title.includes("You found a plant patch with a four leaf clover!")) {
                message.channel.send(',take')
                break;
            }
        }
    }
})
        

bot.off('error', err => {
    console.log(err)
});

bot.login(process.env.TOKEN);
