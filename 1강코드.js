const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzMwOTgzNjEzMjIyNDg2MDc2.XwfbmA.hIcb2JznD6yTd3MvlpJPDBlmNNE';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!구매') {
    message.reply('구매문의 ! Adidas#1486');
  }
});

client.login(token);