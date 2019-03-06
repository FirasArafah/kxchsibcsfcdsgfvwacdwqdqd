const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("#ENFELATEH..","https://www.twitch.tv/idk");
});





hero.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  if(!message.content.startsWith(prefix)) return;
  let cmd = message.content.split(" ")[0].substring(prefix.length);
  let args = message.content.split(" ").slice(1);
  let devs = ["478291914106339332"];
  let err = "▫";
  
  if(cmd === 'clear') {
    if(!devs.includes(message.author.id)) return message.channel.send(`**${err} You are not one of the bot admins.**`);
    let fetched = await message.channel.fetchMessages();
    let filtered = await fetched.filter(r => r.author.id === hero.user.id);
    if(filtered.size <= 0) return message.channel.send(`**${err} There are no messages to delete.**`).then(m => m.delete(5000));
    message.channel.bulkDelete(filtered)
    .then(() => {
      message.channel.send(`**${err} Successfully Deleted \`${filtered.size}\` messages.**`);
    })
    .catch(e => {
      if(e) message.channel.send(`**${err} An error happend :: \`${e.message}\`**`);
    });
  }
});


client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith("!ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });


client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', '・text');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});


client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith('اسحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`:white_check_mark: <@${usermentioned}> Moved. `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});


client.login(process.env.BOT_TOKEN); //
