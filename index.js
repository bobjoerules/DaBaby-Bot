//console logs NODEJS Version
console.log("NodeJS Version: " + process.version)

const express = require('express');
require('dotenv').config()

const { Client, GatewayIntentBits, AttachmentBuilder, Message, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ActivityType, setPosition } = require('discord.js');

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages   
  ],
  partials: ['CHANNEL']
})
const fsLibrary  = require('fs'); 


process.on("unhandledRejection", error => console.error("Promise rejection:", error));
client.on("guildCreate", async (guild) =>{
  console.log('bot was added to a new server. (total servers is now: ' + client.guilds.cache.size)
  const serverlog = new EmbedBuilder();
  serverlog.setTitle('bot was added to a new server. (total servers is now: ' + client.guilds.cache.size)
  serverlog.setColor('#ffffff')
  serverlog.setTimestamp()
  client.channels.cache.get('838264759899652137').send({embeds:[serverlog]})
});  

client.once('ready', () => {
  //logs bot's id
  console.log(client.user.id)
  //logs bot's username
  console.log(`Logged in as ${client.user.tag}!`);
  //logs how many servers the bot is in
  console.log('In ' + client.guilds.cache.size + ' servers')
  //sets th icon of if the bot is dnd, Idle, Online
  client.user.setPresence({
    activities: [{ name: `memes`, type: ActivityType.Competing }],
    status: 'online',
  });
  //sets activity
  //logs that the bot restarted/started in the support server
  const restartlog = new EmbedBuilder();
    restartlog.setTitle('DaBaby has been restarted')
    restartlog.setColor('#00ff00')
    restartlog.addFields(
      { name: 'Servers:', value: `${client.guilds.cache.size}`, inline: true },
      {name: 'Bot version:', value: `⚙️3.1`, inline: true},
      { name: 'NodeJS Version:', value: `${process.version}`, inline: true },
      { name: 'Discord.js Version:', value: `${require("discord.js").version}`, inline: true }
    )
    restartlog.setTimestamp()
 client.channels.cache.get('838264759899652137').send({embeds:[restartlog]})

 //shows stats on my bot on my server
 let guild = client.guilds.cache.get('814940437751660595');
 let serversin = guild.channels.cache.get('849051882314924053')
 let usesabout = guild.channels.cache.get('849860265989242890')
  serversin.setName('Servers: ' + client.guilds.cache.size)
  
});

client.on('interactionCreate', async interaction => {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  used = false
  if (interaction.isButton()) {
    if (interaction.customId ==='rickroll'){
    console.log(interaction.customId)
    await interaction.deferUpdate()
    await interaction.followUp({content: 'Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', ephemeral: true });
    await interaction.deleteReply()
    }
  }
	if (!interaction.isCommand() && !interaction.isButton())  return;

	const { commandName } = interaction;
  if (interaction.commandName === 'vote') {
    const vote = new EmbedBuilder()
    vote.setColor('FF3366')
    vote.addFields({name: 'Vote on top.gg using this Link:',value:'[https://top.gg/bot/836069453389234206/vote](https://top.gg/bot/836069453389234206/vote)', inline: true })
    vote.setThumbnail('https://i.imgur.com/UyNFNmL.png')
    const toper = new EmbedBuilder()
    toper.setColor('5865F2')
    toper.addFields({name: 'Vote on discordbotlist.com using this Link:',value:'[https://discordbotlist.com/bots/dababy-not-finished/upvote](https://discordbotlist.com/bots/dababy-not-finished/upvote)', inline: true })
    toper.setThumbnail('https://i.imgur.com/39vsYPN.png')
    await interaction.reply({ embeds: [ vote, toper ] });
  }
  if (interaction.commandName === 'invite') {
    var size = client.guilds.cache.size
    console.log(client.guilds.cache.size)
    console.log(size)
    const link = new EmbedBuilder()
    link.setColor('ffffff')
    link.addFields({name: 'In my profile, click \'Add me\' button to add me to your server',value:'[Or click this link \(may not work\)](https://discord.com/api/oauth2/authorize?client_id=836069453389234206&permissions=532646526784&scope=applications.commands%20bot)', inline: true })
    link.setTimestamp()
    await interaction.reply({ embeds: [ link ] });
  }
  if (interaction.commandName === 'game') {
    await interaction.reply('https://apps.apple.com/us/app/dagame/id1562587737')
  }
  if (interaction.commandName === 'image') {
    var images = []
    var image = Math.floor(Math.random() * images.length);
    await interaction.reply('command coming soon...')

  }
  if (interaction.commandName === 'car') {
    const car = new EmbedBuilder()
    car.setColor('#A020F0')
    car.setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eccecf5b-58df-4fb5-b1ca-a55568933bb6/deg8fye-faabd46d-5052-4425-8687-59d79b5d9a5c.png/v1/fill/w_1024,h_582/dababy_car_by_xxheavy_swagxx_deg8fye-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgyIiwicGF0aCI6IlwvZlwvZWNjZWNmNWItNThkZi00ZmI1LWIxY2EtYTU1NTY4OTMzYmI2XC9kZWc4ZnllLWZhYWJkNDZkLTUwNTItNDQyNS04Njg3LTU5ZDc5YjVkOWE1Yy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1nWxKVKtsRsUr5I2zsanyDyMpndfFOXQG_syeh73P-U')
    car.setTitle('Lessgo')
    await interaction.reply({ embeds: [ car ] });
  }
  if (interaction.commandName === 'lessgo') {
    await interaction.reply({ content: 'Lessgo!',  files: ["./vids/lessgo.mp4"]});
  }
	if (interaction.commandName === 'meme'|| interaction.customId ==='nextmeme') {
    var randomnum = Math.round(Math.random() * 5)
    if (randomnum === 2 || randomnum === 1 || randomnum === 3){
      var memes = ["mail001.jpg", "starbuck001.jpg", "italian001.jpg", "pea001.jpg", "car001.jpg", "car002.jpg", "spotify001.jpg", "daplane001.jpg", "3dcar001.jpg", "attackontitan001.jpg", "glass001.png", "fnf001.png", "cool001.jpg", "finalboss001.jpg", "exam001.jpg", "spongebob001.jpg", "mario001.jpg", "card001.jpg", "realdababy001.jpg", "dababyinmc001.jpg", "white001.jpg", "DAVINCI001.jpg", "school001.jpg"];
      var meme = Math.floor(Math.random() * memes.length);
      var colors = ["#0099ff", "", ""];
      const embedmeme = new EmbedBuilder();
      embedmeme.setColor('#A020F0')
      embedmeme.setTitle(memes[meme].slice(0, -7))
      embedmeme.setImage('attachment://' + memes[meme])
      const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('nextmeme')
          .setLabel('Next Meme')
          .setStyle('Success'),
      )
      console.log('./images/' + memes[meme])
      await interaction.reply({ embeds: [ embedmeme ], files: ['./images/' + memes[meme]], components: [row]});
    
    } else {
      if (randomnum === 0){
        var memes = ["spongebob1.mp4"]
        var meme = Math.floor(Math.random() * memes.length);
        const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('nextmeme')
            .setLabel('Next Meme')
            .setStyle('Success'),
        )
        console.log("./vids/" + memes[meme])
        await interaction.reply({ content: 'Lessgo!',  files: ["./vids/" + memes[meme]], components: [row]});
      }else{
        var memevids = ["https://www.youtube.com/watch?v=XV3f7r1ZGVU", "https://www.youtube.com/watch?v=bT7FGwTw-rY", "https://www.youtube.com/watch?v=BMPWVEXGRxA", "https://www.youtube.com/watch?v=DZpY6nr8c8g", "https://www.youtube.com/watch?v=VFn1pvYht2Y", "https://www.youtube.com/watch?v=63amyCOleOk", "https://www.youtube.com/watch?v=iSGdVuo2swg", "https://www.youtube.com/watch?v=FH_TXS56rQA", "https://www.youtube.com/watch?v=FsVxzR1Qtrs", "https://www.youtube.com/watch?v=3uuLWG-Gqtk", "https://www.youtube.com/watch?v=9at6I6ZEJXQ", "https://www.youtube.com/watch?v=GBLEXvphIgk", "https://www.youtube.com/watch?v=e2oNweTWO2Q", "https://www.youtube.com/watch?v=cC2c7EUWdr0", "https://www.youtube.com/watch?v=DcRLTClL5YU", "https://www.youtube.com/watch?v=upflDVv3k50", "https://www.youtube.com/watch?v=i-nIe8QaKfE", "https://www.youtube.com/watch?v=WWJ_35tM4wk", "https://www.youtube.com/watch?v=bYX57kWcwgQ", "https://www.youtube.com/watch?v=tuHTFatvytk", "https://youtu.be/sb_9AEV6qT4", "https://youtu.be/SczRjdY9X1o", "https://youtu.be/FsVxzR1Qtrs", "https://youtu.be/tNG9sHUxN-U", "https://youtu.be/b7tEganBpn8", "https://youtu.be/i-nIe8QaKfE", "https://youtu.be/P6MQUeVbj-o", "https://youtu.be/b0vM3FqkS_Y", "https://youtu.be/c4dsGJnVQpY", "https://youtu.be/7KTSNCCZXVc", "https://youtu.be/tuHTFatvytk", "https://youtu.be/Ep8PVrYV0dQ", "https://youtu.be/h9SdCKjC7gU", "https://youtu.be/_QRCczOSdFQ", "https://youtu.be/dLYS9XcnuIg", "https://youtu.be/ioqRj9JlpIM", "https://youtu.be/cC2c7EUWdr0", "https://youtu.be/oLHjwbLqtpw", "https://youtu.be/sBSoR2Zpg4g", "https://youtu.be/61k1JZ1RvCw","https://youtu.be/mIe2k6ql7zI", "https://youtu.be/P9oTql1aRx8","https://youtu.be/xtbJyhVQdIw","https://youtu.be/MHgsbwYEbGo","https://youtu.be/P6MQUeVbj-o","Here is some good content for ten hours: https://youtu.be/v4y9YeWeT3M","https://youtu.be/jhE76TXosGc","https://youtu.be/Nw4kDgR_D2s","https://youtu.be/EVtJWMWr_SY","https://youtu.be/63amyCOleOk",""]
        var memevid = Math.floor(Math.random() * memevids.length);
        const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('nextmeme')
            .setLabel('Next Meme')
            .setStyle('Success'),
        )
        await interaction.reply({content: memevids[memevid], components: [row]}); 
      }
    }   
	}
	if (interaction.commandName === 'help') {
    const help = new EmbedBuilder();
    help.setColor('00FF00')
    help.setTitle('DaBaby bot now uses slash commands(/)')
    help.setDescription('• /fact = Sends a fact about DaBaby\n • /help = Lists the commands the bot has\n• /meme = Meme related to DaBaby (either a video from YouTube or a photo)\n• /ping = Sends the bot\'s Uptime, Latency, and API Latency\n• /websites = Links to websites related to bot and DaBaby\n• /car = DaBaby is now a car\n• /invite = Invite this bot to your server\n• /suggest = Have a suggestion? Bot will send a link to a google form to fill out')
		help.addFields({name: 'Join the support server:', value:'[https://discord.gg/AYj39T6N](https://discord.gg/AYj39T6N)', inline: true })
    help.setFooter({text: 'Bot made by Bobjoerules'})
    help.setTimestamp()
    await interaction.reply({ embeds: [help] , ephemeral: true });
	}   
  if (interaction.commandName === 'websites') {
    const websites = new EmbedBuilder();
    websites.setColor('FFFFFF')
    websites.setTitle('Here are those websites')
    websites.addFields({name: "The rappers website:", value:"[http://www.officialdababy.com/](http://www.officialdababy.com/)", inline: true })
    const topdababy = new EmbedBuilder();
    topdababy.addFields({name: "Top.gg page for bot:", value:"[https://top.gg/bot/836069453389234206](https://top.gg/bot/836069453389234206)", inline: true })
    topdababy.setColor('FF3366')
    const developer = new EmbedBuilder();
    developer.addFields({name: "Develepors website:",value: "[https://bobjoerules.github.io/DarkMode-sheet/](https://bobjoerules.github.io/DarkMode-sheet/)", inline: true })
    developer.setTimestamp()
		await interaction.reply({ embeds: [websites, topdababy, developer] , ephemeral: false });
	}   

  if (interaction.commandName === 'suggest') {
    const suggestion = new EmbedBuilder();
    suggestion.setColor('ffff00')
    suggestion.setTitle('Suggest your suggestions on the google form linked:')
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('nothing')
        .setLabel('This does nothing ok?')
        .setStyle('Danger')
        .setDisabled(true),
      new ButtonBuilder()
        .setCustomId('rickroll')
        .setLabel('This does tho')
        .setStyle('Success'),
    
      new ButtonBuilder()
      .setURL('https://forms.gle/LpZubqihvNfseDhbA')
      .setLabel('https://forms.gle/LpZubqihvNfseDhbA')
      .setStyle('Link')
    )
    suggestion.setTimestamp()
		await interaction.reply({ embeds: [suggestion] , ephemeral: false , components: [row]});
	} 

  if (interaction.commandName === 'fact' || interaction.customId ==='nextfact')  {
    console.log('#A020F0')
    var facts = [ "DaBaby's youtube channel has 9.87M subscribers", "DaBaby's youtube channel has 221 videos (including videos not made by DaBaby)",  "DaBaby is an American rapper", "Jonathan Lyndale Kirk, known professionally as DaBaby, is an American rapper. After releasing several mixtapes between 2014 and 2018, he rose to mainstream prominence in 2019.", "DaBaby was born: December 22, 1991 (age 30 years), Cleveland, OH", "DaBaby's full name is: Jonathan Lyndale Kirk", "DaBaby when he started rapping was called: Baby Jesus", "DaBaby is a rapper", "DaBaby has a sibling: Glen Johnson","DaBaby reportedly has three(or four) kids. The rapper shares his children with different women.","DaBaby stands at five feet eight inches tall.", "DaBaby been rapping since 2014","He was involved in a shooting at Walmart in 2018","DaBaby's Net Worth: $5 Million","Kirk has three children, the first born in 2017","Kirk's father died in 2019 shortly after the release of his debut studio album. His second album is a tribute to his last name and contains a picture of his father on the cover.", "Kirk's brother, Glen Johnson, died in November 2020, at age 34, from a self-inflicted gunshot wound.","In August 2020, Kirk formally endorsed the presidential campaign of independent candidate and fellow rapper Kanye West.","He dated American singer DaniLeigh in 2020. They split in February 2021 after her song lyrics \"yellow bone that's what he wants\" stirred controversy. Months after the split, it was reportedly confirmed that Kirk had fathered a child with the singer after an incident of the two was recorded and posted on Instagram.","If you were to combine all of DaBaby's youtube videos' views, it would add up to about 4,495,218,740 views", 'Dababy faced backlash after rapping about Jojo Siwa, he later commented that his daughter is a fan of Jojo and he had  nothing against her.', 'DaBaby and his ex-girlfriend MeMe met five years ago through mutual friends, and despite not being together anymore they remain friends.', 'DaBaby\'s breakthrough hit \'Suge\' dropped in April 2019 and received two nominations at the 62nd Annual Grammy Awards for \'Best Rap Performance\' and \'Best Rap Song.\'','Dababy moved to Charlotte, North Carolina in 1999, where he spent most of his early years.', 'Dababy attended Vance High School (now called Julius L. Chambers High School), where he graduated in 2010.', 'DaBaby grew up listening to Eminem, 50 Cent and Lil Wayne with his two older brothers.'];
    var fact = Math.floor(Math.random() * facts.length);
    const factembed = new EmbedBuilder();
    factembed.setTitle('DaBaby Fact')
    factembed.setDescription(facts[fact])
    factembed.setColor('#A020F0')
    factembed.setTimestamp()
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('nextfact')
        .setLabel('Next Fact')
        .setStyle('Success'),
    )
    await interaction.reply({embeds: [factembed] , ephemeral: false , components: [row]});
  }
  if (interaction.commandName === 'oldping') {
    const pong = new EmbedBuilder();
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    pong.setColor('ffff00')
    pong.setTimestamp()
    await interaction.reply( {content: 'Pong', fetchReply: true }).then (async (resultinteraction) =>{
    pong.setDescription(`**Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s**\nLatency is ${resultinteraction.createdTimestamp - interaction.createdTimestamp}ms. \nAPI Latency is ${Math.round(client.ws.ping)}ms\n\nIn ` + client.guilds.cache.size + ' servers\nNodeJS Version: ' + process.version + '\nDiscord.js Version: ' + require("discord.js").version)
    pong.setThumbnail('https://www.pngkit.com/png/full/284-2843649_ping-pong-paddle-png-ping-pong-racket-png.png')
    await interaction.editReply({ embeds: [pong] , ephemeral: false });
    
    })
  }

  if (interaction.commandName === 'ping') {
    const pong = new EmbedBuilder();
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    pong.setColor('ffff00')
    pong.setTimestamp()
    await interaction.reply( {content: 'Pong', fetchReply: true }).then (async (resultinteraction) =>{
    pong.addFields(
      { name: 'Uptime:', value: `${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true },
      { name: 'Latency:', value: `${resultinteraction.createdTimestamp - interaction.createdTimestamp}ms`, inline: true },
      { name: 'API Latency:', value: `${Math.round(client.ws.ping)}ms`, inline: true }
    )
    pong.addFields(
      { name: 'Servers:', value: `${client.guilds.cache.size}`, inline: true },
      { name: 'NodeJS Version:', value: `${process.version}`, inline: true },
      { name: 'Discord.js Version:', value: `${require("discord.js").version}`, inline: true }
    )
    pong.addFields(
      {name: 'Bot version: ', value: '⚙️3.1', inline: true}
    )
    pong.setThumbnail('https://www.pngkit.com/png/full/284-2843649_ping-pong-paddle-png-ping-pong-racket-png.png')
    await interaction.editReply({ embeds: [pong] , ephemeral: false });
    
    })
  }
  if (interaction.commandName === 'changelog') {
    const changes = new EmbedBuilder();
    changes.setColor('0000FF')
    changes.addFields(
      { name: '⚙️ Version:', value: `3.1`, inline: false },
      { name: 'Change one:', value: `Changed layout of /ping command`, inline: false },
      { name: 'Change two:', value: `Added the /changelog command`, inline: false }
    )
    await interaction.reply({embeds: [changes] , ephemeral: false});

  }

});


client.login(process.env.TOKEN)