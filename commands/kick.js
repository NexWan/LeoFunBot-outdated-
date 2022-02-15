
module.exports = {
    name: 'kick',
    descrpition: 'RNG kick command',
    execute(message, args) {
        try {
            if (message.member.permissions.has('KICK_MEMBERS')) { //Permissions
                let target = message.mentions.members.first();
                if (target) {
                    if (target.kickeable) {
                        kickd = Math.floor(Math.random() * 10);
                        const mensaje = "ha sido kickeado ";
                        if (kickd == kickd) {
                            target.kick();
                            message.channel.send(":wave: " + mensaje + target.displayName);
                            console.log(kickd);
                        } else {
                            message.channel.send("Te salvaste por zorra, num: " + kickd);
                        }
                    }else{
                        message.channel.send(`No puedo kickear a ` + target.displayName );
                    }
                } else {
                    message.channel.send("Debes ingresar un usuario valido");
                }
            } else {
                message.channel.send("No tienes permisos che jodido");
            }
        } catch (err) {
            console.error();
        }


    }
}
