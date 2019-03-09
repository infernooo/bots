const discord = require("discord.js");
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;

http.createServer().listen(port);

//const token = process.env.TOKEN;
let Xp = '50',
    LuckyXp = '3880';
let NoSpawn = 'The chance for a successful rare spawn is very low, but you can do it! Keep trying.';
let NoFight = ', Nothing to fight right now!';
let InfernoID = '352561523656359936',
    BotID = '432616859263827988';
MoveNo = '1';
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


function bosskill() {
    spam = setInterval(() => {
        bot.channels.get('551385745743675392').send(',f 1');
    }, 2000)
}

function bossDefeat() {
    clearInterval(spam2)
}


bot.on('message', (message) => {

    if (message.channel.id === '551385745743675392') {


        if (message.content.includes(',s')) {

            const collector = new discord.MessageCollector(message.channel, m => m.author.id === BotID, {
                time: 10000
            });
            collector.on('collect', message => {
                if (message.content === NoSpawn)
                    message.channel.send(`,f ${MoveNo}`)
            })

            collector.on('end', data => {
                if (!data.first()) {
                    bot.channels.get('551385745743675392').send(',s')
                }
            })
        } else if (message.content.includes(NoFight)) {
            const collector = new discord.MessageCollector(message.channel, m => m.author.id === InfernoID, {
                time: 10000
            });
            collector.on('collect', message => {
                if (message.content === ",s")
                    return;
            })


            collector.on('end', data => {
                if (!data.first())
                    bot.channels.get('551385745743675392').send(',s');
            })

        }





        for (var i = 0; i < message.embeds.length; i++) {
            if (message.embeds[i] && message.embeds[i].title && message.embeds[i].title.includes("You found a plant patch with a four leaf clover!")) {
                message.channel.send(',take')
                break;
            } else if (message.embeds[i] &&
                message.embeds[i].footer &&
                message.embeds[i].footer.text.includes(`Your player has also gained ${Xp} XP!`)) {
                message.channel.send(',s')
                break;
                //common luca defeat
            } else if (message.embeds[i] &&
                message.embeds[i].footer &&
                message.embeds[i].footer.text.includes("Your player has also gained 608 XP!")) {
                message.channel.send(',trial')
                break;
                //bliss
            } else if (message.embeds[i] &&
                message.embeds[i].footer &&
                message.embeds[i].footer.text.includes(`Your player has also gained ${LuckyXp}XP!`)) {
                message.channel.send(',s')
                break;
                //lucky
            } else if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.includes('Mega (Boss)')) {
                console.log('                       BOSS WAS KILLED');
                console.log('-----------------------------------------------------------------')

                bosskill();

                //bossKill active
            } else if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.startsWith('Arcanine')) {
                message.channel.send(',f 1')

            } else if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.startsWith('An NPC Blissey')) {
                message.channel.send(',f 23')

            } else if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.includes('Boss Defeated!')) {
                bossDefeat();
                message.channel.send(',s');

            } else if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.includes('Wild NPC Blissey')) {

                message.channel.send(',f 23');
            } else if (message.embeds[i] &&
                message.embeds[i].title &&
                message.embeds[i].title.startsWith("You've chosen take")) {
                message.channel.send(',s')

            }
        }
        if (message.content === 'sp1') {
            console.log('||                    STARTING SPAWN SPAM                      ||')
            console.log('-----------------------------------------------------------------')
            startSpam()
        } else if (message.content === 'st1')
            stopSpam()

        else if (message.content === 'st2')
            message.channel.send(',s')

        else if (message.content.includes(', A rare Pokémon has spawned! Will you catch it?') || message.content.includes('A rare pokemon has spawned! Who will catch it?')) {
            message.channel.send(',c 9')
            console.log('-----------------------------------------------------------------')
            console.log('         A rare Caught at ' + (message.createdAt) + ' !')
            console.log('-----------------------------------------------------------------')
            message.channel.send(',s')
        } else if (message.content.includes('The chance for a successful rare spawn is very low, but you can do it! Keep trying.')) {

            bot.channels.get('551385745743675392').send(',f 1')
        } else if (message.content.startsWith('|-Ïñfërñø-|') && message.content.includes('!captcha') && message.author.id != bot.user.id) {
            let msg = message.content;
            msg = msg.replace('|-Ïñfërñø-| Please type `!', '')
            msg = msg.replace('` to continue.', '');
            message.channel.send(',' + msg);
            message.channel.send(',s');
        } else if (message.content === '251199')
            bot.destroy().then(stopSpam()).then(() => bot.login(TOKEN));

        else if (message.content.includes('A Raider Pokémon has arrived! Who will be brave enough to take on the challenge?')) {
            stopSpam();
        }



    }
});

bot.off('error', err => {
    console.log(err)
});

bot.login(process.env.TOKEN);
