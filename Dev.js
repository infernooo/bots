const discord = require("discord.js");
const http = require('http');
const token = ''

const bot = new discord.Client();


bot.on('ready', () => {
    console.log('Staring')
})

function spamSt() {
var spam = setInterval(() =>  {
    bot.channels.get('551385745743675392').send('spaaaaaaaaaaaaaam');
}, 2000)
}

function spamstp(){
    clearInterval(spam) 
}

bot.on('message', msg => {
    if(msg.channel.id === '551385745743675392'){
        if(msg.channel.includes('.')){
            spamSt();
        }
        else if(msg.channel.includes('A rare pokemon has spawned! Who will catch it?')){
        spamstp();
        msg.channel.send(',c 9');
        console.log('random rare caught')
        spamSt()
        }
    }

})

bot.on('error', err => {
    console.log('err')
})

bot.login(process.env.TOKEN);
