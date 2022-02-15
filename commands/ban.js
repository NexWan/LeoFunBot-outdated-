module.exports ={
    name: 'ban',
    descrpition: 'RNG ban command',
    execute(message, args){
        if (message.member.permissions.has('BAN_MEMBERS')) {
            let target = message.mentions.members.first();
            if(target){
                band = Math.floor(Math.random() * 10);
                const mensaje = "ha sido kickeado ";
                if (band == 1) {
                    target.ban();
                    message.channel.send(":wave: " + mensaje + target.displayName);
                    console.log(band);
                } else {
                    message.channel.send("Te salvaste por zorra, num: " + band);
                }
            }else{
                message.channel.send("Ingresa un usuario valido");
            }
        }else{
            message.channel.send("No tienes permisos che jodido");
        }
    }
}