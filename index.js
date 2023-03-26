const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require('fs');
const { MessageEmbed } = require("discord.js");
const auth = require("./auth.json");

//INITIALIZE BOT

const client = new Client({
	owner: '374247680832176133',
    disableEveryone: true,
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

//BOT START UP MESSAGE IN TERMINAL.

client.on('ready', () => {
    console.log(` ${client.user.username} is now online, connected to ${client.guilds.cache.size} Servers!`);

    client.user.setActivity(",help", {type: "WATCHING"})
});

client.login(auth.token);

//BOT CONDITIONS

client.on("message", async message => {
    const prefix = ",";
    if(message.author.bot) return;
    
    //IF USER DMS BOT REPLY WITH HELP! & SAY DM COMMANDS NOT ALLOWED!
       if (message.channel.type == 'dm'){
        message.reply("**Commands don't function in DM's!**").catch(err => console.log(err));  
                           const embed = new MessageEmbed()
                 
                 //constant embed for help commands
                 .setTitle("Bot Commands:")
                 .setDescription("My other Bot [MasterController](https://discord.com/api/oauth2/authorize?client_id=703304870035456101&permissions=8&scope=bot).")
                 .setThumbnail("https://i.ibb.co/HTX9nG7/the-hub-3.gif")
                 .setTimestamp()
                 .setFooter("Created By Rep Graphics#1419!", "https://i.ibb.co/B3Ck7tv/mylogo.png")
                 .setColor(15105570)



                 //add more commands below when added
                 .addField("**Prefix:**",                                     "```\n,```")
                 .addField("**Bot Status:**",                                 "```\nstatus```")
                 .addField("**Balance:**",                                    "```\nbal (username)```")       
                 .addField("**Feedback:**",                                   "```\nfeedback s(suggest)/b(bug) (message)```")              
                 .addField("**Server Info:**",                                "```\nserverinfo```")      

                 .addField("\u200B", "\u200B")    //invisible field/space       

                 .addField("**Ban:**",                                        "```\nban (username) (reason)```")         
                 .addField("**Clear:**",                                      "```\nclear (amount)```")                                 
                 
                message.channel.send(embed).catch(err => console.log(err));   
        }

    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
    
});