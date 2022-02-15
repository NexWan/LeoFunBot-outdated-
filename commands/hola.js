module.exports ={
    name: 'hola',
    description: 'Commands that replies to the user back',
    execute(message, args){
        message.channel.send(`Hola ${message.author}`);
    }
}