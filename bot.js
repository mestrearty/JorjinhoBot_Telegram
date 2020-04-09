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

  bot.command("comandos", (ctx, next) => {
    ctx.reply(`
    /start ->Fala seu nome
    /falas -> Lista das palavras que responde
    /comandos -> Lista de comandos
    /discord -> Link do nosso canal no discord`);
    next();
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on("text", async (context, next) => {
    try {
      if (context.update.message.text) {
        const msg = context.update.message.text.toLowerCase();
        const from = context.update.message.from;
        console.log(from);

        if (msg.includes("cancela")) {
          await context.reply("Você ta cancelado!");
        }

        if (msg.includes("palmito")) {
          await context.reply(
            "O cara mais incrível de todo o grupo. Manda um salve pra ele por mim!"
          );
        }
        if (msg.includes("anj")) {
          await context.reply("Não fale mal do meu papai!");
        }
        if (msg.includes("jorjito")) {
          await context.reply("Eu");
        }
        if (msg.includes("pokemon")) {
          await context.reply("digimon > pokemon");
        }

        if (msg.includes("onde")) {
          await context.reply("No busão");
        }

        if (msg.includes("bom")) {
          await context.reply("Bom é chupar um saco");
        }

        if (msg.includes("mama")) {
          await context.reply("Glub Glub");
        }

        //folha
        if (msg.includes("lista")) {
          await context.reply("Que lista????");
        }

        if (msg.includes("folha")) {
          await context.reply("Que folha?");
        }
        if (msg.includes("que folha")) {
          await context.reply("A rasgada que te dei");
        }

        if (msg.includes("rasgada")) {
          await context.reply("quem rasga aqui sou eu!");
        }

        //bam bam
        if (msg.includes("porra") || msg.includes("poha")) {
          await context.reply("É hora do show poha!!!");
        }
        if (msg.includes("idade") || msg.includes("anos")) {
          await context.reply(" É 37 anos caralho!!");
        }
        if (msg.includes("não vai dar") || msg.includes("nao vai dar")) {
          await context.reply(" Que não vai da o que!!");
        }

        if (msg.includes("mais")) {
          await context.reply(" Mais! Quero mais! Quero mais!");
        }

        if (msg.includes("casa")) {
          await context.reply(
            " Não vai dar? Que não vai dar o que rapá, saí de casa comi pra caralho!"
          );
        }

        if (
          msg.includes("13") ||
          msg.includes("lula") ||
          msg.includes("dilma") ||
          msg.includes("pt") ||
          msg.includes("bolsonaro")
        ) {
          await context.reply("É 13 poha!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

          if (msg.includes("lula")) {
            await context.reply("Livre!");
          }
        }

        if (msg.includes("maquina") || msg.includes("máquina")) {
          await context.reply("vc quer uma máquina minha?");
        }

        if (msg.includes("laranja")) {
          await context.reply("você gosta de laranja?");
        }

        if (msg.includes("?")) {
          await context.reply("ta curioso?");
        }

        if (msg.includes("mew")) {
          await context.reply("mew meu com mew seu");
        }

        if (msg.includes("show")) {
          await context.reply("que show?");
        }

        if (msg.includes("janta")) {
          await context.reply("Filho vem jantar!!");
        }

        if (msg.includes("pau")) {
          await context.reply("Mama aqui ó");
        }

        if (msg.includes("mim")) {
          await context.reply("O @eonibugi, tão te chamando aqui ó");
        }
      }
      next();
    } catch (e) {
      console.log(e);
    }
  });

  bot.launch()
};
