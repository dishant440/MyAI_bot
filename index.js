import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { configDotenv } from 'dotenv';
configDotenv();

const Token = process.env.BOT_TOKEN

const bot = new Telegraf(Token)


bot.on(message('text'), async (ctx) => {
  await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello how can i help you`)
})
bot.on(message('./login'), async (ctx) => {
    await ctx.telegram.sendMessage(ctx.message.chat.id,'enter your credentials')
})


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))