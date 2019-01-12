const Discord = require("discord.js");

const TOKEN = "NTMzNjMxMTI0MjI4ODAwNTEy.DxvvpQ.iFHDb_Exq5_0m9_4oNuaQJNCQpE";

var bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} online!`)
    bot.user.setActivity("World War 2 Memes", {type: "WATCHING"});
});

bot.on("message", function(message) {
    var channel = bot.channels.find("name", "general");
    channel.sendMessage("Hello Owner Just Restarted Me!");

    console.log("Bot is ready.");
});

bot.on("message", function(message){
    if(message.content == "hei")
    {
        message.reply("Hold kjeften på deg!");
    }
})

bot.login(TOKEN);
