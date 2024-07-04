const { Client, GatewayIntentBits, Partials, REST, Routes, ActivityType } = require('discord.js');
const { token, botID } = require('./config');

const client = new Client({ 
    intents: [
      GatewayIntentBits.Guilds, // Sunucu verilerini çekmek içindir
      GatewayIntentBits.GuildBans, // Sunucu Ban verilerini çekmek içindir
      GatewayIntentBits.GuildEmojisAndStickers, // Sunucu Emoji ve Sticker verisini çekmek içindir
      GatewayIntentBits.GuildIntegrations, // Sunucu Entagrasyon verisini çekmek içindir 
      GatewayIntentBits.GuildInvites, // Sunucu Davet verisini çekmek içindir
      GatewayIntentBits.GuildMembers, // Sunucu Üye verisini çekmek içindir
      GatewayIntentBits.GuildMessageReactions, // Sunucu Mesaj Tepki verisini çekmek içindir
      GatewayIntentBits.GuildMessageTyping, // Sunucu Mesaj Yazma verisini çekmek içindir
      GatewayIntentBits.GuildMessages, // Sunucu Mesaj verilerini çekmek içindir
      GatewayIntentBits.GuildPresences, // Sunucu Durum verisini çekmek içindir
      GatewayIntentBits.GuildScheduledEvents, // Sunucu Etkinlikler verisini çekmek içindir
      GatewayIntentBits.GuildVoiceStates, // Sunucu Ses verilerini çekmek içindir
      GatewayIntentBits.GuildWebhooks, // Sunucu webhook verilerini çekmek içindir
      GatewayIntentBits.DirectMessages, // DM Mesaj verilerini çekmek içindir
      GatewayIntentBits.DirectMessageTyping, // DM Mesaj Yazma verisini çekmek içindir
      GatewayIntentBits.DirectMessageReactions, // DM Mesaj Tepki verisini çekmek içindir
      GatewayIntentBits.MessageContent, // Mesaj verisini çekmek içindir
  ],
    partials: [
      Partials.User, // Üye verisini çekmek içindir
      Partials.Message, // Mesaj verisini çekmek içindir
      Partials.GuildMember, // Suncuu üye verisini çekmek içindir
      Partials.ThreadMember, // Altbaşlık verisini çekmek içindir 
  ],
  });

  const commands = [
      {
          name: 'test',
          description: 'Bu bir test komutudur.'
      }
      {
        name: 'fiyatlar',
        description: 'Map Fiyatlarını Öğrenmek İçin Founder İle İletişime Geçiniz.'
      }
];
  
  const rest = new REST({ version: '10'}).setToken(token)

  (async ( ) => {
    try {
        await rest.put(Routes.applicationCommands(botID), { body: commands });
        console.log('Komutlar Yüklendi ✅');
    } catch (error) {
        console.log(error);
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'test') {
        await interaction.reply({ contect: 'Bu bir test mesajıdır.', ephemeral: false})
    };
    
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'fiyat') {
        await interaction.reply({ contect: 'Map Fiyatlarını Öğrenmek İçin Founder İle İletişime Geçiniz.', ephemeral: false})
    };
});

client.login(token).then(() => {
  console.log('${client.user.username} ismi ile giriş yaptım!');
  client.user.setStatus('online');
  client.user.setActivity({ name: 'Bratva', type: ActivityType.Playing})
}).catch((err) => console.log(err));