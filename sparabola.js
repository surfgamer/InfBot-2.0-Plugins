const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  let a = messageArray[1]*1;
  let b = messageArray[2]*1;
  if(typeof(a) == 'number' && typeof(b) == 'number') {
	  let s = (b**(4)/4)-(a**(4)/4);
	  message.channel.send({embed: {
		  'title': 'int(x**3,x='+a+'..'+b+')',
		  'color': '16777011',
		  'description': String(s)
		  }});
		  } else {
			  message.channel.send({embed: {
				  'title': 'Введите y и x',
				  'color': '16777011',
				  'author': 'message.author.username, message.author.avatarURL'
			  }});
		  }
}
module.exports.help = {
	name: "sparabola",
	desc: "Площадь фигуры кубической функции ограниченной линиями, укажите y и x.",
	author: "Surfgamer"
}
