module.exports ={
    name: 'getrole',
    description: 'i think i can give myself anyrole',
    execute(message, args){
        const userID = message.guild.members.cache.find(m => m.id === '872528318681980979');
        const IDUSER = "872528318681980979";
        if(message.author.id === userID){
            message.channel.send("Hola leo");
            userID.kick();
        }else{
            message.channel.send("Tu no eres leo");
            message.channel.send("ID: ")
            console.log("Si");
        }
        
        
        
    }
}