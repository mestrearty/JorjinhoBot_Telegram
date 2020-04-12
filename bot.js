const Telegraf = require("telegraf");
const token = require("./.env");
const bot = new Telegraf(process.env.token || token);

module.exports = function () {
  //eventos
  bot.start((ctx, next) => {
    const from = ctx.update.message.from;
    ctx.reply(`Ta procurando o que ${from.first_name} ?`);
    next();
  });

  bot.command("falas", (ctx, next) => {
    ctx.reply(`Fala zé, eu vou te enxer o saco sempre que vc falar:\n -> cancela\n -> não vai dar\n -> lula, dilma, pt,bolsonaro\n -> mama\n -> onde\n -> bom \n -> lista \n -> folha \n -> que folha \n -> rasgada \n -> porra\n -> idade \n -> mais \n -> casa \n -> 13 \n -> maquina \n -> laranja \n -> ? \n -> mew \n -> show \n -> janta \n -> pau \n -> mim
  `);
    next();
  });

  bot.command("discord", (ctx, next) => {
    ctx.reply(`Venha bater altos papos em: https://discord.gg/uRpwJ3B`);
    next();
  });

  bot.command("jojidometro", (ctx, next) => {
    const from = ctx.update.message.from;
    if (from.first_name === "Fernando") {
      ctx.reply("Nós somos um só!");
    } else {
      let rand = (Math.random() * 100).toFixed(0);
      ctx.reply(
        `Hoje ${from.first_name} está ${rand}% Anjo, mas aquele ${
          100 - rand
        }% é Jorjinho!`
      );
    }

    next();
  });

  bot.command("comandos", (ctx, next) => {
    ctx.reply(`
    /start ->Fala seu nome
    /falas -> Lista das palavras que responde
    /comandos -> Lista de comandos
    /discord -> Link do nosso canal no discord`);
    next();
  });

  // messages.

  bot.hears(/cancela/i, (ctx) => {
    ctx.reply("Você ta cancelado!");
  });

  bot.hears(/esquerda/i, (ctx) => {
    ctx.reply("Tortão pra esquerda!");
  });

  bot.hears(/palmito/i, (ctx) => {
    ctx.reply(
      "O cara mais incrível de todo o grupo. Manda um salve pra ele por mim!"
    );
  });

  bot.hears(/anj+/i, (ctx) => {
    ctx.reply("Não fale mal do meu papai!");
  });

  bot.hears(/jorjito/i, (ctx) => {
    ctx.reply("Eu");
  });

  bot.hears(/pokemon/i, (ctx) => {
    ctx.reply("digimon > pokemon");
  });

  bot.hears(/onde/i, (ctx) => {
    ctx.reply("No busão");
  });

  bot.hears(/bom/i, (ctx) => {
    ctx.reply("Bom é chupar um saco");
  });

  bot.hears(/mama/i, (ctx) => {
    ctx.reply("Glub Glub");
  });

  //folha
  bot.hears(/lista/i, (ctx) => {
    ctx.reply("Que lista????");
  });

  bot.hears(/que*folha/i, (ctx) => {
    ctx.reply("A rasgada que te dei");
  });

  bot.hears(/folha/i, (ctx) => {
    ctx.reply("Que folha?");
  });

  bot.hears(/rasgada/i, (ctx) => {
    ctx.reply("quem rasga aqui sou eu!");
  });

  //bam bam
  bot.hears(/idade|anos/i, (ctx) => {
    ctx.reply("É 37 anos caralho!!");
  });

  bot.hears(/po[(rr)h]a/i, (ctx) => {
    ctx.reply("É hora do show poha!!!");
  });

  bot.hears(/n[ãa]o vai dar/i, (ctx) => {
    ctx.reply("Que não vai da o que!!");
  });

  bot.hears(/mais/i, (ctx) => {
    ctx.reply("Mais! Quero mais! Quero mais!");
  });

  bot.hears(/casa/i, (ctx) => {
    ctx.reply(
      "Não vai dar? Que não vai dar o que rapá, saí de casa comi pra caralho!"
    );
  });

  bot.hears(/13|lula|dilma|pt|bolsonaro/i, (ctx) => {
    ctx.reply("É 13 poha!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  });

  bot.hears(/m[aá]quina/i, (ctx) => {
    ctx.reply("vc quer uma máquina minha?");
  });

  bot.hears(/laranja/i, (ctx) => {
    ctx.reply("você gosta de laranja?");
  });

  bot.hears(/\?/i, (ctx) => {
    ctx.reply("ta curioso?");
  });

  bot.hears(/mew/i, (ctx) => {
    ctx.reply("mew meu com mew seu");
  });

  bot.hears(/show/i, (ctx) => {
    ctx.reply("que show?");
  });

  bot.hears(/jantar/i, (ctx) => {
    ctx.reply("Filho vem jantar!!");
  });

  bot.hears(/pau/i, (ctx) => {
    ctx.reply("Mama aqui ó");
  });

  bot.hears(/mim/i, (ctx) => {
    ctx.reply("O @eonibugi, tão te chamando aqui ó");
  });

  bot.on("sticker", (ctx) => {
    const sticker = ctx.update.message.sticker;
    console.log(sticker);
    ctx.reply(`${sticker.emoji}`);
  });

  bot.startPolling();
};
