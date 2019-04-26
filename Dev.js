const discord = require("discord.js");
const jl = "NTU4Njg3MzU0NDQxNjk1MjMy.XLonIg.Fb2-LUXBjFeuFF7F2tFWmKBGZHw"
const bot = new discord.Client();
let sp, e;
let ch2 = ['570294365302423609', '569139094345744395']
bot.on('ready', () => {
    console.log('ready')
    bot.channels.get(ch2[0]).send(',')
    bot.channels.get(ch2[1]).send(',')
})
let MoveNo = '2'
let MoveName = "Surf"
let Text = [',gy', ',s', ',spawn', ',gym', ',gym']

let name = ['Ay!', 'jingalalahoohoo']
function check(message){
    const collector = new discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {
        time: 20000
    });
    collector.on('collect', message => {
        if(Text.includes(message.content)){
            collector.stop()
            return;
        }
    })
    collector.on('end', data => {
        if(!data.first())
        message.channel.send(',gy')
    })
}
function Sspam(message){
    sp = setTimeout(() => {
        message.channel.startTyping();
        random()
        message.channel.send(Text[e]);
        message.channel.stopTyping();
    }, (Math.random()*1000) + 3000)
}
function c(){
    clearInterval(sp)
}
function random(){
    e = Math.floor(Math.random()*4)
}
bot.on('message', message => {
	if(ch2.includes(message.channel.id)){
    if(message.content === ',')
    Sspam(message)
    else if(message.content === '//')
    c()
    else if (message.content.startsWith(name[1]) && message.content.includes('!captcha') && message.author.id === '432616859263827988') {
		let msg = name[1].concat(" Please type `!")
        message.content = message.content.replace(msg, '')
        message.content = message.content.replace('` to continue.', '');
        message.channel.send(',' + message.content);
    }
    else if(message.content === 'You have successfully confirmed yourself and can now use other commands.' || message.content.includes(" You don't have any captcha to fill!")) 
        Sspam(message)

    else if(Text.includes(message.content) || message.content === `,f ${MoveNo}` || message.content === ',eat' || message.content.includes(".catch"))
        check(message)
	
	else if(message.content.startsWith("SMno")){
		let msg = message.content.replace("SMno ", "");
		MoveNo = msg
	}
	else if(message.content.startsWith("SMna")){
		let msg = message.content.replace("SMna ", "");
		MoveName = msg
	}
    
    for(var i = 0; i < message.embeds.length; i++){  
        
        if(message.embeds[i] &&
            message.embeds[i].footer &&
            message.embeds[i].footer.text.includes("for your Pokemon"))
            Sspam(message)
        else if(message.embeds[i] &&
            message.embeds[i].footer &&
            message.embeds[i].footer.text.includes("!fight / !catch / !travel"))
            message.channel.send(`,f ${MoveNo}`)
        else if(message.embeds[i] &&
            message.embeds[i].title &&
            message.embeds[i].title.includes("You found an Easter Egg"))
            message.channel.send(`,eat`)
        else if(message.embeds[i] &&
            message.embeds[i].title &&
            message.embeds[i].title.includes("You've chosen eat "))
            Sspam(message)
        else if(message.embeds[i] &&
            message.embeds[i].footer &&
            message.embeds[i].footer.text.includes("This is the location's secondary gym - it doesn't unlock any new locations for you."))
            message.channel.send(`,f ${MoveNo}`)
        else if(message.embeds[i] &&
            message.embeds[i].description &&
            message.embeds[i].description.includes(MoveName))
            message.channel.send(`,f ${MoveNo}`)
	} }})

bot.on('unhandledRejection', err => {
	throw err
})

bot.login(jl)
