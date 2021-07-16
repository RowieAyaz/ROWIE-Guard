const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed.setColor('#36393e').setTitle(`Hata!`).setTimestamp().setDescription(`Bu komutu kullanabilmek için yetkiniz bulunmamaktadır!`))

if(!args[0]) return message.channel.send
(embed.setColor('#36393e')
 .setTimestamp()
.setDescription(`Reklam guard sistemi açılmamış .hat aç yazarak açabilirsiniz.`))
if(args[0] === 'aç') {
data.set(`reklam.${message.guild.id}`, true);
return message.channel.send
(embed.setColor('#36393e')
 .setTimestamp()
 .setFooter("Rowie")
.setDescription(`Reklam guard sistemi başarıyla açıldı.
\n
\`\`\`\n• Reklam engel sistemi
\n\`\`\`
**Not** Bu sistem belirli permler yani izinlere sahip olan kişilere etki etmeyecektir! (Yönetici)`))
} else if(args[0] === 'kapat') {
data.delete(`reklam.${message.guild.id}`);
return message.channel.send
(embed.setColor('#36393e')
 .setTimestamp()
 .setFooter("Rowie")
.setDescription(`Chat guard sistemi başarıyla kapatıldı.
\n
\`\`\`\n• Reklam engel sistemi
\n\`\`\`
**Not** Bu sistem belirli permler yani izinlere sahip olan kişilere etki etmeyecektir! (Yönetici)`))
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'reklam'
};