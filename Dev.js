const discord = require("discord.js");
const TOKEN = "NTY4MDI2MDE5MjQwNDc2Njcz.XLcF6A.9_teAXv4ZxtOSmXvDrpl-aGRUjM"
//"NDcwMTU1ODQ4NDk3NDk2MDY1.XLWQeA.vLt21ipNYb7pn-EKyE_pzgkCp6A"; 
const bot = new discord.Client();
let sp;
bot.on('ready', () => {
    console.log('ready')
})
let channels = ["568310724556750861", "568310683209564172", "469516684307464196"]

let Text = 'spaaaammmmmmm'
function Sspam(message){
    sp = setTimeout(() => {
        message.channel.startTyping();
        message.channel.send(message);
        message.channel.stopTyping();
    }, 1000)
}
bot.on('message', message => {
    for(var i = 0; i < channels.length; i++){
    if(message.channel.id === channels[i])
        if (message.author.id === '470155848497496065')
            Sspam(message)
        
      
}})


bot.login(TOKEN)
