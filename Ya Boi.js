
const Discord = require("discord.js")
const bot = new Discord.Client()

const embed = new Discord.MessageEmbed()
.setTitle('Help Page 1/1')
.setDescription('yb!help; Shows this\nyb!invite; Gives you the invite to my home server\nyb!git; Git link')
.setTimestamp()
.setColor('#FF0000')
const embed2 = new Discord.MessageEmbed()
.setTitle('Invite')
.setDescription('https://discord.gg/xSTSKfj')
.setColor('#FF0000')
const embed3 = new Discord.MessageEmbed()
.setTitle('Downloads and GitHub')
.setDescription('Git Link: https://github.com/GRex2359/ya-boi-discord-bot')
.setColor('#FF0000')

var config = require("./config.json")
const prefix = config.prefix
bot.on("ready", () => {
    bot.login(config.token);
    console.log('----------------------------------------------------------')
    console.log('[Ya Boi] Connected to Discord via the token successfully.')
    console.log('[Ya Boi] Username: ' + bot.user.username)
    console.log('[Ya Boi] Running on Discord API version ' + Discord.version)
    bot.user.setActivity(`yb!help; Hey man, this bot sucks... don't bother even using it.`);
})

bot.on("message", msg => {
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length)
    let args = msg.content.split(" ").slice(1)
    if (cmd === "help") {
        msg.channel.send(embed)
    }
    if (cmd === "invite") {
        msg.channel.send(embed2)
    }
    if (cmd === "git")
        msg.channel.send(embed3)
})

bot.login(config.token)