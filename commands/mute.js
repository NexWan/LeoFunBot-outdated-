module.exports ={
    name: 'mute',
    description: 'Mute command',
    execute(message, args){
        //Not finished yet, a timer function to be added and permissions command
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Hot Pocket Brigade'); //this removes the role in case u have a default rol for everyone
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muteado'); //u should change this role name for the one on ur server or create a rol called like this
            //same goes for unmute role

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(muteRole.id); //this adds the mute role
            memberTarget.roles.remove(mainRole.id); //this removes the mute role
            message.channel.send(`<@${memberTarget.user.id}> ha sido muteao`);
        } else{
            message.channel.send("Ingresa un usuario valido");
        }
    }
}