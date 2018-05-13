const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NDI5NTM2NjYxMjIzNzY4MDc0.DdoVyw.es3ajAVtXfzoV51sUIM624bV82Q'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(token);