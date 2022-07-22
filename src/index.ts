import { Client } from 'discord.js';
import { env } from './dotenv';

const client = new Client({ intents: 'Guilds' });
client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log(interaction.options.getSubcommand());
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

client.login(env.BOT_TOKEN);

console.log('IT WORKSS');
