const discord = require("discord.js");
const token = 'MzUyNTYxNTIzNjU2MzU5OTM2.Di3IwA._a82uAudJzYQyVKFdpDU2QaSnlU'

const bot = new discord.Client();


bot.on('ready', () => {
    console.log('Staring')
})

function spamSt() {
var spaam = setInterval(() =>  {
    bot.channels.get('551385745743675392').send('spaaaaaaaaaaaaaam');
}, 2000)
}

function spamstp(){
    clearInterval(spaam) 
}

bot.on('message', msg => {
    if(msg.channel.id === '551385745743675392'){
        if(msg.content.includes('.')){
            spamSt();
        }
        else if(msg.content.includes('A rare pokemon has spawned! Who will catch it?')){
        spamstp();
        msg.channel.send(',c 9');
        console.log('random rare caught')
        spamSt()
        }

        for (var i = 0; i < msg.embeds.length; i++) {
        if (msg.embeds[i] &&
            msg.embeds[i].title &&
            msg.embeds[i].title.includes('You found a plant patch with a four leaf clover!')) 
                msg.channel.send(',take')

        }
    }

})

bot.on('error', err => {
    console.log(err)
})

bot.login(process.env.TOKEN);
