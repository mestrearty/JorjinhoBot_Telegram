const Telegraf = require("telegraf");
const token = require("./.env");
const bot = new Telegraf(process.env.token || token);

module.exports = function () {
  let chance = 40;
  const setChance = value =>{chance = value}
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

  bot.command("chance", (ctx, next) => {
    let msg = (ctx.update.message.text);
    msg = msg.match(/\d+/g);
    if(msg){
     setChance(parseInt(msg,10));
      ctx.reply(`Certo, vou te responder só ${chance}% das vezes... Ou não. Eu faço o que eu quero meu amor!`);
    }
    if(msg === null) ctx.reply('Vou ter que desenhar pra você?')
    next();
  });

  bot.command("chancerate", (ctx, next) => {
 
      ctx.reply(`Eu estou respondendo sempre que eu quero, ou seja ${chance}% das vezes.`);
    
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
    /discord -> Link do nosso canal no discord
    /jojidometro -> Safadometro do Jorjinho
    /chance + % -> Intensidade da resposta do Jorjito (%) 
    /chancerate -> Intensidade atual do Jorjito `);
    next();
  });

  // messages.
  let showMsgOrNot = () => {
    const prob = (Math.random() * 100).toFixed(0);
    if (prob < chance) {
      return true;
    }
    return false;
  };

  bot.hears(/cancela/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Você ta cancelado!");
  });

  bot.hears(/aumento/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Aumento? Você está precisando de um aumento peniano?! Clique aqui![www.pintaomaisgrossoegostoso.com.penis]");
  });

  bot.hears(/esquerda/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Tortão pra esquerda!");
  });

  bot.hears(/n[aã]o da/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Que não vai da o que!");
  });

  bot.hears(/lut[ae][rm]/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Vocês que lutem!");
  });

  bot.hears(/escapa/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Mas da minha você não escapa!");
  });

  bot.hears(/palmito/i, (ctx) => {
    if (showMsgOrNot())
      ctx.reply(
        "O cara mais incrível de todo o grupo. Manda um salve pra ele por mim!"
      );
  });

  bot.hears(/anjo/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Não fale mal do meu papai!");
  });

  bot.hears(/peg[ao]/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Pega aqui pra não cair!");
  });
  bot.hears(/quer/i, (ctx) => {
    if (showMsgOrNot())
      ctx.reply("Querer não é poder. Já dizia o professor X.");
  });

  bot.hears(/jorjito/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Eu");
  });

  bot.hears(/pokemon/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("digimon > pokemon");
  });

  bot.hears(/onde/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("No busão");
  });

  bot.hears(/bom/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Bom é chupar um saco");
  });

  bot.hears(/mama/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Glub Glub");
  });

  //folha
  bot.hears(/lista/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Que lista????");
  });

  bot.hears(/que*folha/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("A rasgada que te dei");
  });

  bot.hears(/folha/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Que folha?");
  });

  bot.hears(/rasgada/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("quem rasga aqui sou eu!");
  });

  //bam bam
  bot.hears(/idade|anos/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("É 37 anos caralho!!");
  });

  bot.hears(/po[(rr)h]a/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("É hora do show poha!!!");
  });

  bot.hears(/n[ãa]o vai dar/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Que não vai da o que!!");
  });

  bot.hears(/mais/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Mais! Quero mais! Quero mais!");
  });

  bot.hears(/casa/i, (ctx) => {
    if (showMsgOrNot())
      ctx.reply(
        "Não vai dar? Que não vai dar o que rapá, saí de casa comi pra caralho!"
      );
  });

  bot.hears(/13|lula|dilma|pt|bolsonaro/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("É 13 poha!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  });

  bot.hears(/m[aá]quina/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("vc quer uma máquina minha?");
  });

  bot.hears(/laranja/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("você gosta de laranja?");
  });

  bot.hears(/\?/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("ta curioso?");
  });

  bot.hears(/mew/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("mew meu com mew seu");
  });

  bot.hears(/show/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("que show?");
  });

  bot.hears(/jantar/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Filho vem jantar!!");
  });

  bot.hears(/pau/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Mama aqui ó");
  });

  bot.hears(/mim/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("O @eonibugis, tão te chamando aqui ó");
  });
  
  bot.hears(/olh[oa]/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("Olhou, sorriu, mandioca no bombril!");
  });

  
  bot.hears(/passa/i, (ctx) => {
    if (showMsgOrNot()) ctx.reply("levanta que a tia quer passa pano!");
  });


  bot.on("sticker", (ctx) => {
    const sticker = ctx.update.message.sticker;
    console.log(sticker);
    ctx.reply(`${sticker.emoji}`);
  });

  bot.startPolling();
};
