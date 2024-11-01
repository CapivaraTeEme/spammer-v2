(async () => {
    const readline = require('readline');
    const { Client } = require('discord.js-selfbot-v13');
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    const chalk = (await import('chalk')).default;
  
    let client;
  
    console.log(chalk.magentaBright(`
        
  /$$$$$$                                                                     
 /$$__  $$                                                                    
| $$  \__/  /$$$$$$   /$$$$$$  /$$$$$$/$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$   Developed by CapivaraTeEme
|  $$$$$$  /$$__  $$ |____  $$| $$_  $$_  $$| $$_  $$_  $$ /$$__  $$ /$$__  $$  
 \____  $$| $$  \ $$  /$$$$$$$| $$ \ $$ \ $$| $$ \ $$ \ $$| $$$$$$$$| $$  \__/  Ty Saox
 /$$  \ $$| $$  | $$ /$$__  $$| $$ | $$ | $$| $$ | $$ | $$| $$_____/| $$        Ty Demonic
|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$ | $$ | $$| $$ | $$ | $$|  $$$$$$$| $$        
 \______/ | $$____/  \_______/|__/ |__/ |__/|__/ |__/ |__/ \_______/|__/               discord.gg/demonicc
          | $$                                                                
          | $$                                                                
          |__/                                                                
                          dsc.gg/demonicc | /demonicc   | CapivaraTeEme
`))
    rl.question(chalk.magentaBright("Put your token > "), (token) => {
      client = new Client();
  
      client.on("ready", async () => {
        console.log(chalk.blueBright(`[$] Logged in as ${client.user.tag}`));
      rl.question("Put Message To Spam >"), (spamMessage) => {
        const spamMessage = `${spamMessage}`
      }
        rl.question("Put server Id > ", async (serverId) => {
          const server = client.guilds.cache.get(serverId);
  
          if (!server) {
            console.log(chalk.red("[x] Server not found. Check the server ID."));
            rl.close();
            process.exit(1);
          }
  
          const spamMessage = spamMessage;
          let count = 0;
  
          server.channels.cache
            .filter((channel) => channel.isText() && channel.permissionsFor(client.user).has("SEND_MESSAGES"))
            .forEach((channel) => {
              for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                  channel.send(spamMessage).then(() => {
                    count++;
                    console.log(chalk.magentaBright(`Message sent ${count} times in ${channel.name}`));
                  }).catch(() => {
                    console.log(chalk.red(`[x] No se pudo spammear en el canal ${channel.name}`));
                  });
                }, i * 2000);
              }
            });
  
          rl.close();
        });
      });
  
      client.login(token).catch(() => {
        console.log(chalk.red("[x] Invalid token. Please check and try again."));
        rl.close();
      });
    });
  })();
