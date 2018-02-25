const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+spam') {
    	message.reply('spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam sapm spam spam spam spam spam spam spam spam spam spam spam spam spam spam sapm spam spam spam spam spam spam spam spam spam spam spam spam spam spam sapm spam spam spam spam ');
  	}
});
client.on('message', message => {
    if (message.content === '+spam') {
    	message.reply('3, 2, 1 ☢️NUKE INCOMMING...☢️');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
