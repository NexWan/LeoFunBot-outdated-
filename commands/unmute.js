module.exports ={
    name: 'unmute',
    description: 'Unmute command',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Hot Pocket Brigade'); //the same as mute code
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muteado'); //the same as mute code

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id); //removes the unmute role
            memberTarget.roles.add(mainRole.id); //Adds the main role
            message.channel.send(`<@${memberTarget.user.id}> ha sido desmuteao`);
        } else{
            message.channel.send("Ingresa un usuario valido");
        }
    }
}