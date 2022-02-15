module.exports = {
    name: 'illu',
    description: 'Kicks illu everytime he text',
    execute(message, args) {
        const userID = message.guild.members.cache.find(m => m.id === "297585199674294272");
        message.channel.send("Adios illu");
        userID.kick();
    }
}