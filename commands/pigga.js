module.exports = {
    name: 'pigga',
    description: 'Callate a la verga pigga',
    execute(message, args) {
        let userID = message.guild.members.cache.find(m => m.id === "701860897072873688");
        if (message.author.id === userID) {
            message.channel.send("Callate a la verga " + userID.displayName);
            message.channel.bulkDelete(1);
        } else 
            message.channel.send("Callate a la verga " + message.author.id);
            message.channel.bulkDelete(1);
        }

    }
