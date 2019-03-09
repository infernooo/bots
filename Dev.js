const discord = require('discord.js');

const bot = new discord.Client();

bot.on('ready', () => {
	console.log('checking!');
})


bot.login(process.env.TOKEN);
