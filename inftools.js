const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  let content = messageArray.slice(2).join(" ");
  if (messageArray[1] == 'spaces'){
    if (content != "") {
      content.toLowerCase();
      var x = 0;
      var done = '';
      while (x < content.length) {
        var curChar = content.charAt(x);
        done += `${curChar} `;
        x++;
      }
      message.channel.send(done);
    }else{
      let embed = new Discord.RichEmbed()
      .setTitle("Вы не указали текст.")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xff0000);
      message.channel.send({embed});
    }
    return;
  }else if(messageArray[1] == 'abc') {
		var abc_content = messageArray.slice(2).join(" ");
		abc_content.toLowerCase();
		abc_content.replace(/\n/g, '');
		if (/[a-z0-9]+$/i.test(content)) {
			var x = 0;
			var done = '';
			while (x < abc_content.length) {
				var curChar = abc_content.charAt(x).toLowerCase();
				if (curChar != ' ' && curChar != '1' && curChar != '2' && curChar != '3' && curChar != '4' && curChar != '5' && curChar != '6' && curChar != '7' && curChar != '8' && curChar != '9' && curChar != '0'){
					done += ':regional_indicator_'+curChar+':';
				}else if(curChar==' '){
					done += ':white_large_square:';
				}else if(curChar=='1'){
					done += ':one:';
				}else if(curChar=='2'){
					done += ':two:';
				}else if(curChar=='3'){
					done += ':three:';
				}else if(curChar=='4'){
					done += ':four:';
				}else if(curChar=='5'){
					done += ':five:';
				}else if(curChar=='6'){
					done += ':six:';
				}else if(curChar=='7'){
					done += ':seven:';
				}else if(curChar=='8'){
					done += ':eight:';
				}else if(curChar=='9'){
					done += ':nine:';
				}else if(curChar=='0'){
					done += ':zero:';
				}
				x++;
			}
			message.channel.send(done);
		}else{
			message.channel.send({embed: {
				"title": "Используются запрещенные символы!",
				"color": 16722249,
				  "author": {
				  "name": message.author.username,
				  "icon_url": message.author.avatarURL
				}
			}
		});
  }
  message.delete(5000);
  }else if (messageArray[1] == 'playing') {
    message.delete(5000);
		var playing_content = messageArray.slice(2).join(" ");
		if(content != "") {
			bot.user.setActivity(playing_content, { type: 'PLAYING' });
			message.channel.send({embed: {
					"title": "Установлено на "+playing_content,
					"color": 4039491,
					"footer": {
					"text": "InfTools 1.2c"
					},
					  "author": {
					  "name": message.author.username,
					  "icon_url": message.author.avatarURL
					}
				}
				}).then(sentMessage => {
					sentMessage.delete(5000);
				});
		}else{
      message.channel.send("Вы не указали название!");
    }
  }else if (messageArray[1] == 'listening') {
    message.delete(5000);
		var listening_content = messageArray.slice(2).join(" ");
		if(content != "") {
			bot.user.setActivity(listening_content, { type: 'LISTENING' });
			message.channel.send({embed: {
					"title": "Установлено на "+listening_content,
					"color": 4039491,
					"footer": {
					"text": "InfTools 1.2c"
					},
					  "author": {
					  "name": message.author.username,
					  "icon_url": message.author.avatarURL
					}
				}
				}).then(sentMessage => {
					sentMessage.delete(5000);
				});
		}else{
      message.channel.send("Вы не указали название!");
    }
  }else if (messageArray[1] == 'watching') {
    message.delete(5000);
		var watching_content = messageArray.slice(2).join(" ");
		if(content != "") {
			bot.user.setActivity(watching_content, { type: 'WATCHING' });
			message.channel.send({embed: {
					"title": "Установлено на "+watching_content,
					"color": 4039491,
					"footer": {
					"text": "InfTools 1.2c"
					},
					  "author": {
					  "name": message.author.username,
					  "icon_url": message.author.avatarURL
					}
				}
				}).then(sentMessage => {
					sentMessage.delete(5000);
				});
		}else{
      message.channel.send("Вы не указали название!");
    }
  }else{
    message.channel.send("Доступные команды: abc, spaces, watching, listening, playing");
  }
}
module.exports.help = {
  name: "InfTools",
  desc: "Модуль InfTools",
  author: "InfiniteC0re"
}
