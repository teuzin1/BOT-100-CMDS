const client = require("../index");
const db = require("quick.db")
client.on("guildMemberAdd", (member) => { 

   let carg =  db.get(`autorole_${member.guild.id}`)
   if(!carg == null) return;
member.roles.add(carg)

})