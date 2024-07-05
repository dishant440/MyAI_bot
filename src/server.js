require('dotenv').config();

const telegram_bot = require('node-telegram-bot-api');

const bot_token = "6853668850:AAGMPUf21T3-J6GK5SiAeQKvypMUjprV4BY"

const bot = new telegram_bot(bot_token, { polling: true })

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
   bot.sendMessage(chatId, 'hii how are you');
  });