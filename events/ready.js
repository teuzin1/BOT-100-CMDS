const client = require("../index");

client.on("ready", () => { 

    const Discord = require("discord.js")
    const logs_ini = new Discord.WebhookClient({id:"898633875490758688", token: "dlzXOLWj5hBMzGrrSX9WoRTBuoVs-ztC95oHvJ9Cn4qo7RLOrj-E8II4K5d21xGjeGf0"});
    console.log(`Estou online`);
    client.user.setActivity("USO COMANDOS DE /")
    logs_ini.send({content: "ESTOU ONLINE!"});
  
});
