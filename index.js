import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { configDotenv } from 'dotenv';
import  {connection}  from './config/db.js';
import User from './model/User.js';
configDotenv();

const Token = process.env.BOT_TOKEN

const bot = new Telegraf(Token)

connection();

bot.start(async(ctx)=> {
  const from = await bot.update.from;
  try {
    await User.findOneAndUpdate({tgId: from.tgId},
      {
        $setOnInsert:{
          firstName: from.first_name,
          username: from.username,
          isBot:from.is_bot,
        },
      },
      {upsert:true,new:true}
    );
    await ctx.reply(`Welcome to MyAI ${from.first_name}`)
  } catch (error) {

    await cts.reply("something went wrong")

  }
})

bot.on(message('text'), async (ctx) => {
  await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.from.first_name} how can i help you`)
});


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))