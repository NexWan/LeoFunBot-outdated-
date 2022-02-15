const Discord = require('discord.js');

const ErrorHandler = require("discord-error-handler");


require('dotenv-flow').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "!";

const prefijo = "";
const fs = require('fs');

client.commands = new Discord.Collection();

const logins = {
    token: process.env.TOKEN
};



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Leo bot is online and ready to fuck')
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'zsu') {
        client.commands.get('zsu').execute(message, args);

    } else if (command === 'kick') { //Kick command
        client.commands.get('kick').execute(message, args);

    } else if (command === 'ban') { //Ban command
        client.commands.get('ban').execute(message, args);

    } else if (command === 'mute') { //mute command
        client.commands.get('mute').execute(message, args);

    } else if (command === 'unmute') { //unmute command, 
        client.commands.get('unmute').execute(message, args);

    } else if (command === 'dm') {
        client.commands.get('dm').execute(client, message, args);
    }
    //else if (command === 'getrole'){
    //client.commands.get('getrole').execute(message, args);
    // }
});

//let abecedary = ["a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

client.on('message', message => { //Commands without the prefix, for funs normally
    if (message.author.bot) return;
    const args = message.content.slice(prefijo.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'zsuwu' || command === 'suwu' || command === 'xsuwu') { //zsuwu
        message.channel.send("Biggest hoe ever");

    } else if (command === 'chichona' || command === 'valdez' || command === 'tetona') { //gerry
        client.commands.get('chichona_valdez').execute(message, args);

    } else if (command === 'suricata') { //this one is the funniest
        client.commands.get('suricata').execute(message, args);

    } else if (command === 'betito') { //pedo
        client.commands.get('betito').execute(message, args);

    } else if (command === 'jerry' || command === 'gerry') { //pedo 2
        client.commands.get('jerry').execute(message, args);

    } else if (command === 'hola') {
        if (message.mentions.has(client.user.id)) {
            client.commands.get('hola').execute(message, args);
        }

    } else if (message.mentions.members.has('240694939950907394')) {
        client.commands.get('mention').execute(message, args);

    } else if (message.author.id === '872528318681980979') {
        message.channel.bulkDelete(1);
    } else if (message.content == "https://www.youtube.com/channel/UCzD4rcGh_l76BCY3VI5Hb2A") {
        message.channel.bulkDelete(1);
    }
});

client.on('message', message => { //Commands that only activates with the IDs stablished
    if (message.author.bot || !message.author.id === '297585199674294272' || !message.author.id === '701860897072873688' || message.author.id === '942603279974670346') return;
    const args = message.content.slice(prefijo.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command === "a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z') { //this one kicks illu
        if (message.author.id === '297585199674294272') {
            client.commands.get('illu').execute(message, args);
        } else if (message.author.id === '701860897072873688' || message.author.id === '942603279974670346') {
            client.commands.get('pigga').execute(message, args);
        }
    }
});

process.on('warning', (warning) => {
    console.log(warning.stack);
});

client.login(logins.token);




