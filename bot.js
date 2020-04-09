const Telegraf = require("telegraf");

module.exports = function (key) {
const bot = new Telegraf(key);
  bot.start((ctx) => {
    const from = ctx.update.message.from;
    ctx.reply(`Seja bem vindo, ${from.first_name}: ${from}`);
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on("message", (context) => {
    if (context.update.message.text) {
      const msg = context.update.message.text.toLowerCase();

      try {
        if (msg.includes("onde")) {
          console.log("no busão");
          context.reply("No busão");
        }

        if (msg.includes("bom")) {
          context.reply("Bom é chupar um saco");
        }

        if (msg.includes("lista")) {
          context.reply("Que lista????");
        }

        if (msg.includes("folha")) {
          context.reply("Que folha?");
        }

        if (msg.includes("maquina") || msg.includes("máquina")) {
          context.reply("vc quer uma máquina minha?");
        }

        if (msg.includes("laranja")) {
          context.reply("você gosta de laranja?");
        }

        if (msg.includes("?")) {
          context.reply("ta curioso?");
        }

        if (msg.includes("mew")) {
          context.reply("mew meu com mew seu");
        }
      } catch (e) {
        console.log(e);
      }
    }
  });

  bot.startPolling();
};
