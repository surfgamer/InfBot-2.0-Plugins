const Discord = require("discord.js");
const schedule = require("node-schedule");
var started;

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  if (messageArray[1] == 'status') {
    if(started == true) {
      message.channel.send({embed: {
        "title": "MEE6TOOLS запущен.",
        "color": 4039491,
        "footer": {
        "text": "MEE6TOOLS 1.0"
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
      message.channel.send({embed: {
				"title": "MEE6TOOLS не запущен.",
				"color": 0xFF0000,
				"footer": {
				"text": "MEE6TOOLS 1.0"
				},
				  "author": {
				  "name": message.author.username,
				  "icon_url": message.author.avatarURL
				}
			}
			}).then(sentMessage => {
				sentMessage.delete(5000);
			});
    }
  }
  if (messageArray[1] == 'start') {
    if(started != true) {
			started = true;
			console.log('Started!');
			message.channel.send({embed: {
				"title": "MEE6TOOLS был запущен!",
				"color": 4039491,
				"footer": {
				"text": "MEE6TOOLS 1.0"
				},
				  "author": {
				  "name": message.author.username,
				  "icon_url": message.author.avatarURL
				}
			}
			}).then(sentMessage => {
				sentMessage.delete(5000);
			});
      var timer = schedule.scheduleJob('*/1 * * * *', function(){
				message.channel.send('``` ```').then(sentMessage => {
				sentMessage.delete(0);
				});
      });
    }else{
      message.channel.send({embed: {
				"title": "MEE6TOOLS уже запущен!",
				"color": 0xFF0000,
				"footer": {
				"text": "MEE6TOOLS 1.0"
				},
				  "author": {
				  "name": message.author.username,
				  "icon_url": message.author.avatarURL
				}
			}
			}).then(sentMessage => {
				sentMessage.delete(5000);
			});
    }
  }
}

module.exports.help = {
  name: "mee6tools",
  desc: "Работа с MEE6 ботом.",
  author: "InfiniteC0re"
}
