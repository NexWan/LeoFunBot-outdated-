
module.exports ={
    name: 'dm',
    description: 'This sends a message to the user',
    execute(client, message, args){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!user) return message.channel.send("Necesitas nombrar a un usuario");
        user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("That user could not be dmed")).then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
        message.channel.bulkDelete(1);
    }
}