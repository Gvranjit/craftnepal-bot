import { Client } from 'discord.js';
import { env } from '../dotenv';

const client = new Client({ intents: 'Guilds' });

client.once('ready', (bot) => {
  console.info('Ready!');
  bot.user.setPresence({ status: 'idle' });
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.info(interaction.options.getSubcommand());
  const { options, commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply(
      `Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`,
    );
  } else if (options.getSubcommand() === 'name') {
    await interaction.reply(`Server name ${interaction.guild?.name}`);
  }
});
function initializeDiscordBot() {
  client
    .login(env.BOT_TOKEN)
    .then((res) => {
      console.info('successfully Logged in', res);
    })
    .catch((err) => console.error(err))
    .finally();
}

export { initializeDiscordBot };
