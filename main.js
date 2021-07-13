/*Giovanni Sanchez */

/*Here a 'require' method was used to implement our discord js. */
const Discord = require('discord.js');

/*Here the Discord Client object was made to help determine when we gained access to the bot. */
const client = new Discord.Client();

/*This variable was initializd with '-' to help make our bot talk. */
const prefix = '-';

/*This anonymous function was used to determine when we have gained access to the bot. */
client.once('ready', () => {
    console.log('lil Gio is online!');
});

/*This function was used to help the bot talk whenever the user enters certain keywords and strings. */
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'sheesh') {
        message.channel.send('yuh!');
    }
    else if (command === 'keep') {
        message.channel.send('breathin!');
    }
    else if (command === 'ariana') {
        message.channel.send('https://youtu.be/nQJEp-k-ogs');
    }
    else if (command === 'go') {
        message.channel.send('pikachu!');
    }
});

/*This is the access link to my bot. */
client.login('ODY0NTk4NDE3NjExNTU0ODQ3.YO3yBg.jLpDKeeJfnPqSd5zAcAKhksZwWI')