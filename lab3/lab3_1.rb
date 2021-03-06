require 'rubygems'
require 'telegram/bot'

token = '2102535644:AAFL2AMqS_HhRk7T7SY-FTi_WiWJkdV7yGo'

Telegram::Bot::Client.run(token) do |bot|
bot.listen do |message|
  case message
  when Telegram::Bot::Types::CallbackQuery
    # Here you can handle your callbacks from inline buttons
    if message.data == 'name'
      bot.api.send_message(chat_id: message.from.id, text: "#{message.from.first_name}")
	elsif message.data == 'sitepoint'
      bot.api.send_message(chat_id: message.from.id, text: "Welcome to http://sitepoint.com")
	  kb1 = [
		Telegram::Bot::Types::KeyboardButton.new(text: 'Мой номер', request_contact: true),
		Telegram::Bot::Types::KeyboardButton.new(text: 'Моя локация', request_location: true)
      ]
    markup = Telegram::Bot::Types::ReplyKeyboardMarkup.new(keyboard: kb1)
	Telegram::Bot::Types::KeyboardButton.new(remove_keyboard: true)
    end
  when Telegram::Bot::Types::Message
    kb = [
      Telegram::Bot::Types::InlineKeyboardButton.new(text: 'Weril', url: 'https://weril.me/'),
      Telegram::Bot::Types::InlineKeyboardButton.new(text: 'Имя', callback_data: 'name'),
      Telegram::Bot::Types::InlineKeyboardButton.new(text: 'Отправить другу', switch_inline_query: 'Привет! Это мой собственный бот. Проверь его работу)'),
	  Telegram::Bot::Types::InlineKeyboardButton.new(text: 'Sitepoin', callback_data: 'sitepoint')

    ]
    markup = Telegram::Bot::Types::InlineKeyboardMarkup.new(inline_keyboard: kb)
    bot.api.send_message(chat_id: message.chat.id, text: 'Выберите один вариант', reply_markup: markup)
  end
end
end