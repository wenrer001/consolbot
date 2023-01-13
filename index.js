const TelegramApi = require('node-telegram-bot-api')

const token = '5983051327:AAHDMJrZSZAVrO_CHRHxWvMHTKxherF0Gtg'

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/options', description: 'Опции'},
        {command: '/creator', description: 'Создатель бота'},
        {command: '/save', description: 'Облочный хранение'},
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
     if (text === '/start') {
   await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/animefanf/png/1.png')
    return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот`);
    }
     if (text === '/info') {
     return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
     }
     if (text === '/creator') {
        return bot.sendMessage(chatId, `@CreatorNiki`);
        }
        if (text === '/options') {
         const chatld = msg.chat.id
         return bot.sendMessage(chatId, `Выберите котегорию`);
        }
     if (text === '/save') {
        return bot.sendMessage(chatId, `Здесь будут сохранятся вашие файлы`);
       }
       return bot.sendMessage(chatId, `Я тебя не понимаю, попробуйте ещё раз`)
      })
   
   
   bot.onText(/\/options/, msg => {

      const chatld = msg.chat.id

     return bot.sendMessage(chatld,  'Все для вас', {
         reply_markup: {
            inline_keyboard: [
               [
                  {
                     text:'Google',
                     url: 'https://www.google.ru/'
                  }
               ],
               [
                  {
                     text:'Разраб делал через',
                     url: 'https://ru.wikipedia.org/wiki/JavaScript'
                  },
                  {
                     text:'Бот для знакомств ',
                     url: 'https://t.me/leomatchbot'
                  }
               ]
            ]
            }
         });
   })
}

start ()