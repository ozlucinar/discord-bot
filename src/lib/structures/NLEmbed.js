const { MessageEmbed } = require("discord.js");
class NLEmbed extends MessageEmbed {
  constructor(data = {}) {
    super(data);
    this.setColor("ffce00").setTimestamp();
  }
}

module.exports = NLEmbed;
