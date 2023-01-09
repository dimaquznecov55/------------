const {VK, AudioMessageAttachment, API, Keyboard, getRandomId} = require('vk-io');
const {hear, HearManager} = require('@vk-io/hear');
const f = require('fs');
const { get } = require('http');
const vk = new VK({token: 'vk1.a.kHgD6VyEV7Ks-z-nNJQy1UsusRrpiit-IiIiz6-XkHBhgd3bt3R6D3xvOGXZYtzBn_u36r-HaQPsYSbblR15ihlkFPsANDGSwNXi3yFq7o-Q7Gb6Qs-wHrMHesDNE49ULq7tpM2yCDiap4XcoucQ_SDDozmFUmrEmcCsHqOxp_E-BJ-UHatfkUpcU8C-J8HKnNRwLuONJejPRJWC1B2yrQ'});
const bot = new HearManager();
vk.updates.on('message_new', bot.middleware);
const breakfast = "https://1000.menu/catalog/na-zavtrak?ysclid=laqgnnpxdv319552214";
const lunch = "https://www.russianfood.com/recipes/bytype/?fid=927&ysclid=laqhb07lq0491929665";
const dinner = "https://1000.menu/catalog/zvanji-uzhin?ysclid=laqiczlaod782639396";
const candy = "https://1000.menu/catalog/desert?ysclid=lbesqerd9v851217849";
const fil = f.readFileSync('mems.txt', 'utf-8');
const foods = f.readFileSync('food.txt', 'utf-8');
function getrun(){return Math.ceil(Math.random() * 1000)};
bot.hear(/начать/i, msg => {msg.send({sticker_id: 63263})});
bot.hear(/1/i, msg => {msg.send({attachment: 'photo-206063274_457239057'})});
bot.hear(/2/i, msg => {msg.send({attachment: 'photo-206063274_457239058'})});
bot.hear(/3/i, msg => {msg.send({attachment: 'photo-206063274_457239059'})});
bot.hear(/4/i, msg => {msg.send({attachment: 'photo-206063274_457239060'})});
bot.hear(/5/i, msg => {msg.send({attachment: 'photo-206063274_457239061'})});
bot.hear(/6/i, msg => {msg.send({attachment: 'photo-206063274_457239062'})});
bot.hear(/7/i, msg => {msg.send({attachment: 'photo-206063274_457239063'})});
bot.hear(/8/i, msg => {msg.send({attachment: 'photo-206063274_457239064'})});
bot.hear(/9/i, msg => {msg.send({attachment: 'photo-206063274_457239065'})});
bot.hear(/10/i, msg => {msg.send({attachment: 'photo-206063274_457239066'})});
bot.hear(/завтрак/i, msg => {msg.send(`посмотреть завтраки можно здесь ${breakfast} приятного аппетита!`)});
bot.hear(/обед/i, msg => {msg.send(`посмотреть обеды можно здесь ${lunch} приятного аппетита!`)});
bot.hear(/ужин/i, msg => {msg.send(`посмотреть ужины можно здесь ${dinner} приятного аппетита!`)});
bot.hear(/десерты/i, msg => {msg.send(`посмотреть десерты можно здесь ${candy} приятного аппетита!`)});
bot.hear(/случайное число/i, msg => {msg.send(getrun())});
bot.hear(/мемы/i, msg => {msg.send(fil)});
bot.hear(/рецепты/i, msg =>  {msg.send(foods)});
bot.hear(/./i, msg => {let keyboard = Keyboard
.keyboard([[
    Keyboard.textButton({
        label: 'мемы', color: 'primary'
}), Keyboard.textButton({label: 'рецепты', color: 'primary'})
], Keyboard.urlButton({label: 'вступить в сообщество бота', url: 'https://vk.com/club206063274'}),
Keyboard.textButton({label: 'случайное число', color: 'positive'})]);
msg.send({message: 'я вас не понимаю воспользуйтесь кнопками ниже', attachment: 'photo-206063274_457239046', keyboard: keyboard, random_id: getRandomId()})
});
console.log("бот активен!");
vk.updates.start().catch(console.error);
