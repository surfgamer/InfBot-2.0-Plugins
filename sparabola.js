const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  let a = messageArray[1]*1;
  let b = messageArray[2]*1;
  let s = (b**(4)/4)-(a**(4)/4);
  let title;
  let description;
  if(isNaN(s)) {
	  title = 'Ошибка';
	  description = 'Неверное выражение';
} else {
	title = 'int(x**3,x='+a+'..'+b+')';
	description = String(s);
}
	let embed = new Discord.RichEmbed()
	.setTitle(title)
	.setAuthor(message.author.username, message.author.avatarURL)
	.setColor(16777011)
	.setDescription(description);
	message.channel.send({embed});
module.exports.help = {
	name: "sparabola",
	desc: "Площадь фигуры кубической функции ограниченной линиями, укажите y и x.",
	author: "Surfgamer"
}
