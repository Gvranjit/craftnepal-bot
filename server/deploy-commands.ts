import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { env } from './dotenv';
const { CLIENT_ID, GUILD_ID } = env;
const builtCommands = [
  new SlashCommandBuilder()
    .setName('cn')
    .setDescription('All CraftNepal related Commands')
    .addSubcommand((sc) => sc.setName('name').setDescription('Returns of this server')),
].map((command) => command.toJSON());

const rest = new REST({ version: '9' }).setToken(env.BOT_TOKEN);

rest
  .get(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID))
  .then((response: any) => console.log('Successfully fetched application commands.', response))
  .catch(console.error);

rest
  .delete(Routes.applicationGuildCommand(CLIENT_ID, GUILD_ID, '999053564028649593'))
  .then((response: any) => console.log('Successfully deleted', response))
  .catch(console.error);
