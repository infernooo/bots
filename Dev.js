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
exports.InfernoID = InfernoID;
exports.BotID = BotID;
MoveNo = '2';
chnl = '551385745743675392'
const bot = new discord.Client();
exports.bot = bot;


var spam;
var check = false;

bot.on('ready', () => {
    console.log('-----------------------------------------------------------------');
    console.log('                        AUTO MOD MOIN                            ');
    console.log('-----------------------------------------------------------------');

})

bot.on('error', error => {
    console.log(error)
})

function capt(message, t) {
    const collector = new discord.MessageCollector(message.channel, m => m.author.id === InfernoID, {
        time: t,
        max: 1
    });
    collector.on('collect', message => {
        if (message.content.includes(',s') || message.content.includes(`,f ${MoveNo}`)) {
            collector.stop();
            return;
        }
    });
    collector.on('end', data => {
        if (!data.first()) {
            bot.channels.get('551385745743675392').send(',s');
        }
    });
}

function spamSt() {
    check = true;
    spam = setInterval(() => {
        bot.channels.get('551385745743675392').send(`,f ${MoveNo}`);
    }, 3000)
}

function spamSp() {
    clearInterval(spam)
    check = false
}

function Ns(message) {
    if (message.content.includes(NoSpawn))
        message.channel.send(`,f ${MoveNo}`)
}

function spawn(message) { //,s
    const collector = new discord.MessageCollector(message.channel, m => m.author.id === BotID, {
        time: 10000
    });

    collector.on('collect', message => {

        for (var i = 0; i < message.embeds.length; i++) {
            if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.includes('Mega (Boss)')) {
                spamSt();
            } else if (message.embeds[i] &&
                message.embeds[i].footer &&
                message.embeds[i].footer.text.includes('!fight / !catch / !travel')) {
                message.channel.send(`,f ${MoveNo}`)
                collector.stop();
            } else if (message.embeds[i] && message.embeds[i].title && message.embeds[i].title.includes("You found a plant patch with a four leaf clover!")) {
                message.channel.send(',take')
                collector.stop();
            }
        }
    });
    collector.on('end', msg => {
        if (!msg.first()) {
            bot.channels.get('551385745743675392').send(',s').then(console.log('this nigga'));
        }
    })
}

function won(message) { //,f

    const collector = new discord.MessageCollector(message.channel, m => m.author.id === BotID, {
        time: 10000
    });

    collector.on('collect', message => {
        for (var i = 0; i < message.embeds.length; i++) {

            if (message.embeds[i] &&
                message.embeds[i].footer &&
                message.embeds[i].footer.text.includes(`Your player has also gained`)) {
                message.channel.send(',s')
                collector.stop();
            }
        }
    })
    collector.on('end', data => {
        if (!data.first())
            bot.channels.get('551385745743675392').send(',s');
    })

}

bot.on('message', (message) => {
    if (message.channel.id === '551385745743675392') {
        
        if (message.content.includes(',s')) 
            spawn(message)
         else if (message.content === '.') 
            message.channel.send(',s')
         else if (message.content.includes('//')) 
            bot.destroy().then(setTimeout(() => bot.login(TOKEN), 10000));
        
        for (var i = 0; i < message.embeds.length; i++) {
            if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.includes("Boss Defeated!")) {
                spamSp();
                message.channel.send(',s')
            }else if (message.embeds[i] && message.embeds[i].title && message.embeds[i].title.includes("You've chosen take"))
            message.channel.send(',s')
        }
        if (message.content.includes(`,f ${MoveNo}`) && check === false)
            won(message);
        else if (message.content.startsWith('|-Ïñfërñø-|') && message.content.includes('!captcha') && message.author.id != bot.user.id) {
            let msg = message.content;
            msg = msg.replace('|-Ïñfërñø-| Please type `!', '')
            msg = msg.replace('` to continue.', '');
            message.channel.send(',' + msg);
        }else if (message.content.includes('You have successfully confirmed yourself and can now use other commands.') && check === false)
        bot.destroy().then(bot.login(TOKEN)).then(setTimeout(() => message.channel.send(',s'), 5000));
         

         else if (message.content.includes('You have successfully confirmed yourself and can now use other commands.') && check === true)
            return;
          
        else if(message.content.includes('Nothing to fight right now!')){
        capt(message, 10000);
        }
}
})


bot.on('error', err => {
    console.log(err)
});

bot.login(TOKEN);
