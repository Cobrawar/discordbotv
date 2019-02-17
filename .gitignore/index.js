


/////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();




var prefix = ("!");
var staff = (".");
var pv =("²")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
    
});


bot.on('message', message => {

    
    bot.user.setAvatar('./bot1.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('Développement')
        .catch(console.error)


//////////////////////////////////////////////////NOUVEAU MEMBRES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(prefix + "accept")) {

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.find('name', '[MEMBRE]');

    membre.addRole(role).catch(console.error);

    message.channel.send(`${membre} a accepté les règles, devient ${role}! et peut maintenant accéder au reste du serveur`);

    message.delete();
}



//////////////////////////////////////////////////COMMANDES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (message.content === prefix + "regles") {
        var aregles_embed = new Discord.RichEmbed()
        .setColor("#FF5733")



        .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")
         .setTitle("__**A -REGLEMENT GENERALE**__")
        .addField("[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]")
        .addField("[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",)
        .addField("[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",)
        .addField("[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",)
        .addField("[5. Ne pas tenir de propos religieux, politique]",)
        .addField("[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",)
        .addField("[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",)
        .addField("[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",)



        .addField("__**B -REGLEMENT SALONS TEXTUELS**__")
        .addField("[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",)
        .addField("[2. Ne pas **abuser** des majuscules !]",)
        .addField("[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",)
        .addField("[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",)
        .addField("[5. Ne pas **spammer** les commandes des bots]",)
        .addField("[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",)


        .addField("__**C -REGLEMENT SALON VOCAUX**__")
        .addField("[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",)
        .addField("[2. Le changement de channel continu est **INTERDIT**]",)
        .addField("[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",)
        
        
        message.channel.sendMessage(aregles_embed);
        message.delete();   

    }

    if (message.content === prefix + "aregles") {
        var regles_embed = new Discord.RichEmbed()
      .setTitle("**REGLEMENT**")
      .setAuthor("Cobrawar", "")
     
      .setColor(0x00AE86)
      .setDescription("Ceci est le règlement du serveur :")
      .setFooter("reglement by @cobrawar")
      
      
    
      .setTimestamp()

      .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")

      
      .addField("__**A -REGLEMENT GENERALE :**__",
        "[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]",
        "[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",
        "[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",
        "[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",
        "[5. Ne pas tenir de propos religieux, politique]",
        "[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",
        "[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",
        "[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",
        
    )
     
      .addField("__**B -REGLEMENT SALONS TEXTUELS :**__",
      "[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",
      "[2. Ne pas **abuser** des majuscules !]",
      "[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",
      "[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",
      "[5. Ne pas **spammer** les commandes des bots]",
      "[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",

    
    )
      
      .addField("__**C -REGLEMENT SALON VOCAUX :**__",
      "[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",
      "[2. Le changement de channel continu est **INTERDIT**]",
      "[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",
    
    
    )



      
    .addBlankField(true)
    
      message.channel.sendMessage(regles_embed);
      
            message.delete();
    }


    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**Commandes :**")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !discution")
        .addField("10.  !pt")
        .addField("11.  !candidature")
        .addField("12.  !version")                                                  
        .addField("**Commandes Admin :**")
        .addField("1.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("2.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("3.   .mute @pseudo / .unmute @pseudo  ---> réservé au grade Admin ou plus")
        .addField("4.   .clear @pseudo ---> réservé au grade Admin ou plus")
        
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("1° Demandez de l'aide dans le salon écrit aide-plainte et attendez une réponse de la part d'un gradé")
        .addField("2° Suivez la procédure demandée")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar  : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn  : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        .addField("PowerGaming  : https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6taq20FeuKj?si=WgNUWwrwS-SHN2tlfsovVQ")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les commandes du bot de musique : (Vous devez être VIP ou plus)")
        .addField("-join ---> Faire venir le bot dans votre channel")
        .addField("-leave  ---> Faire partir le bot de votre channel")
        .addField("-play + (URL) ---> Faire jouer une musique au bot à partir de youtube ! ")
        .addField("-pause ---> Mettre la musique en pause")
        .addField("-stop ---> Stopper la musique")
        .addField("Proposez des musiques dans le channel musique")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différents grades du serveur :")
        .setDescription("Augmenter de garde ? : demander une requête à une Administrateur ou plus")
        .addField("1.   [💪 DEUS💪 ] : Grade le plus élevé du serveur, tous les droits.")
        .addField("2.   [💻ADMINISTRATEUR💻] : Fait respecter les règles du serveur et aide les Fondateurs ")     
        .addField("3.   [👋 CHEF-HELPER👋 ] : Chef du grade [🤚 HELPER🤚 ]")
        .addField("4.   [⚙️ MODERATEUR⚙️ ] : Règle les soucis entre joueurs et contribut aux respect des règles")     
        .addField("5.   [👮🏼 POLICE👮🏼 ] : Même grade que modérateur ")
        .addField("6.   [🤚 HELPER🤚 ] : Helper : Aide les personnes en difficultés et sert de porte parole")
        .addField("7.   [🔑 VIP🔑 ] : Grade de membre supérieur, peut insérer des liens et autres")
        .addField("8.   [MEMBRE] : Grade de base du serveur")
        .addField("9.   [GOLBUTE] : Grade punit, correspond à un tempban")
        message.channel.sendMessage(grade_embed);
        message.delete();
    }

    if (message.content === prefix + "maj") {
        var maj_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "discution") {
        var chat_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Discution :")
        .addField("Le channel Discustion est là pour discuter de tout et de rien sans embrouilles en respectant les règles!")
      
        message.channel.sendMessage(chat_embed);
        message.delete();

    }

    if (message.content === prefix + "pt") {
        var pt_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Plainte")
        .addField("Faites votre plainte")
        if(message.mentions.users.size === 0) {                                             //COMMANDE DE PLAINTE A FINIR//
            return message.channel.send("You need to mention an @user");
        }
        if(message.mentions.users.size === 1) {
            
        }
    }

    if (message.content === prefix + "candidature") {
        var candidature_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Candidature demandée avec succès ! Postée la ")                          //COMMANDE DE CANDIDATUR EA FINIR//
    }

    if (message.content === prefix + "version") {
        var version_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Version actuel du serveur [💪NOVA💪] : 2.0")                            //VERSION 2.1 --> COMMANDES FINIES// //.setTitle("Version actuel du serveur [💪NOVA💪] : 2.1")//

        message.channel.sendMessage(version_embed);
        message.delete();
    }
   
///////////////////////////////////////////////////COMMANDES STAFF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(message.content.startsWith(staff + "kick")) {
        var kick_embed = new Discord.RichEmbed()
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(kick) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de kick cette personne !");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN PURIFICATED BY ${message.author.username}`)
        });
        message.channel.sendMessage(kick_embed)
        message.delete();
    }


    if(message.content.startsWith(staff + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(ban) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de ban cette personne !");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN HAMMERED BY ${message.author.username}`)
        });
        message.delete();
    }

    if(message.content.startsWith(staff + "mute")) {
        
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de mute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de mute cette personne !");
        }
        if(message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`${mute.user.username} IS MUTE !`);
            
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de unmute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }m
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de unmute cette personne !");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`${mute.user.username} is now unmute !`);
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "clear")) {
        if(!message.guild.member(message.author).hasPermission("CLEAR_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
    }
    var clear = message.guild.member(message.mentions.users.first());
    if(clear) {
        return message.channel.send("I don't know if the user exist");
    }
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
        return message.channel.send("I don't have the permission for mute user");
    }
    clear.clear().then(member => {
        message.channel.send(`${member.user.username}  has been clear by ${message.author.username}`)
    });
    message.delete();
}







var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(staff + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(staff+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(staff+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

///////////////////////////////////////////////////COMMANDES PV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === pv + "p") {

       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");

       message.delete();

    }

    if (message.content === pv + "noir") {

        message.reply("LE NOIR EST MORT, JE L'AI TUER !!!");
    
        message.delete();

    }
    
















///////////////////////////////////////////////////BLACKLIST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


     if (message.content === "fdp") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "pute") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "merde") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "salope") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "enculer") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connard") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "putain") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connasse") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "saloperie") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ntm") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "nique") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ta mere") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "gueule") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "couilles") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }


/////////////////////////////////////////////////MUSIQUE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  
  //if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    
    }

  }

  if (message.content === '/leavebot') {

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
      .then(deconncetion => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully disconnected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  
  }

}

  if (message.content === '/play' + "") {

    
  }

});

})

bot.login('NDMxODc4MTMxNDU2OTMzODg5.DcJiFw.0uhqMJfknMKFvRlg0nuV4UrZAOY');
bot.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();




var prefix = ("!");
var staff = (".");
var pv =("²")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
    
});


bot.on('message', message => {

    
    bot.user.setAvatar('./bot1.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('Développement')
        .catch(console.error)


//////////////////////////////////////////////////NOUVEAU MEMBRES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(prefix + "accept")) {

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.find('name', '[MEMBRE]');

    membre.addRole(role).catch(console.error);

    message.channel.send(`${membre} a accepté les règles, devient ${role}! et peut maintenant accéder au reste du serveur`);

    message.delete();
}



//////////////////////////////////////////////////COMMANDES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (message.content === prefix + "regles") {
        var aregles_embed = new Discord.RichEmbed()
        .setColor("#FF5733")



        .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")
         .setTitle("__**A -REGLEMENT GENERALE**__")
        .addField("[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]")
        .addField("[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",)
        .addField("[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",)
        .addField("[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",)
        .addField("[5. Ne pas tenir de propos religieux, politique]",)
        .addField("[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",)
        .addField("[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",)
        .addField("[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",)



        .addField("__**B -REGLEMENT SALONS TEXTUELS**__")
        .addField("[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",)
        .addField("[2. Ne pas **abuser** des majuscules !]",)
        .addField("[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",)
        .addField("[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",)
        .addField("[5. Ne pas **spammer** les commandes des bots]",)
        .addField("[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",)


        .addField("__**C -REGLEMENT SALON VOCAUX**__")
        .addField("[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",)
        .addField("[2. Le changement de channel continu est **INTERDIT**]",)
        .addField("[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",)
        
        
        message.channel.sendMessage(aregles_embed);
        message.delete();   

    }

    if (message.content === prefix + "aregles") {
        var regles_embed = new Discord.RichEmbed()
      .setTitle("**REGLEMENT**")
      .setAuthor("Cobrawar", "")
     
      .setColor(0x00AE86)
      .setDescription("Ceci est le règlement du serveur :")
      .setFooter("reglement by @cobrawar")
      
      
    
      .setTimestamp()

      .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")

      
      .addField("__**A -REGLEMENT GENERALE :**__",
        "[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]",
        "[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",
        "[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",
        "[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",
        "[5. Ne pas tenir de propos religieux, politique]",
        "[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",
        "[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",
        "[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",
        
    )
     
      .addField("__**B -REGLEMENT SALONS TEXTUELS :**__",
      "[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",
      "[2. Ne pas **abuser** des majuscules !]",
      "[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",
      "[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",
      "[5. Ne pas **spammer** les commandes des bots]",
      "[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",

    
    )
      
      .addField("__**C -REGLEMENT SALON VOCAUX :**__",
      "[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",
      "[2. Le changement de channel continu est **INTERDIT**]",
      "[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",
    
    
    )



      
    .addBlankField(true)
    
      message.channel.sendMessage(regles_embed);
      
            message.delete();
    }


    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**Commandes :**")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !discution")
        .addField("10.  !pt")
        .addField("11.  !candidature")
        .addField("12.  !version")                                                  
        .addField("**Commandes Admin :**")
        .addField("1.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("2.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("3.   .mute @pseudo / .unmute @pseudo  ---> réservé au grade Admin ou plus")
        .addField("4.   .clear @pseudo ---> réservé au grade Admin ou plus")
        
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("1° Demandez de l'aide dans le salon écrit aide-plainte et attendez une réponse de la part d'un gradé")
        .addField("2° Suivez la procédure demandée")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar  : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn  : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        .addField("PowerGaming  : https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6taq20FeuKj?si=WgNUWwrwS-SHN2tlfsovVQ")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les commandes du bot de musique : (Vous devez être VIP ou plus)")
        .addField("-join ---> Faire venir le bot dans votre channel")
        .addField("-leave  ---> Faire partir le bot de votre channel")
        .addField("-play + (URL) ---> Faire jouer une musique au bot à partir de youtube ! ")
        .addField("-pause ---> Mettre la musique en pause")
        .addField("-stop ---> Stopper la musique")
        .addField("Proposez des musiques dans le channel musique")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différents grades du serveur :")
        .setDescription("Augmenter de garde ? : demander une requête à une Administrateur ou plus")
        .addField("1.   [💪 DEUS💪 ] : Grade le plus élevé du serveur, tous les droits.")
        .addField("2.   [💻ADMINISTRATEUR💻] : Fait respecter les règles du serveur et aide les Fondateurs ")     
        .addField("3.   [👋 CHEF-HELPER👋 ] : Chef du grade [🤚 HELPER🤚 ]")
        .addField("4.   [⚙️ MODERATEUR⚙️ ] : Règle les soucis entre joueurs et contribut aux respect des règles")     
        .addField("5.   [👮🏼 POLICE👮🏼 ] : Même grade que modérateur ")
        .addField("6.   [🤚 HELPER🤚 ] : Helper : Aide les personnes en difficultés et sert de porte parole")
        .addField("7.   [🔑 VIP🔑 ] : Grade de membre supérieur, peut insérer des liens et autres")
        .addField("8.   [MEMBRE] : Grade de base du serveur")
        .addField("9.   [GOLBUTE] : Grade punit, correspond à un tempban")
        message.channel.sendMessage(grade_embed);
        message.delete();
    }

    if (message.content === prefix + "maj") {
        var maj_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "discution") {
        var chat_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Discution :")
        .addField("Le channel Discustion est là pour discuter de tout et de rien sans embrouilles en respectant les règles!")
      
        message.channel.sendMessage(chat_embed);
        message.delete();

    }

    if (message.content === prefix + "pt") {
        var pt_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Plainte")
        .addField("Faites votre plainte")
        if(message.mentions.users.size === 0) {                                             //COMMANDE DE PLAINTE A FINIR//
            return message.channel.send("You need to mention an @user");
        }
        if(message.mentions.users.size === 1) {
            
        }
    }

    if (message.content === prefix + "candidature") {
        var candidature_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Candidature demandée avec succès ! Postée la ")                          //COMMANDE DE CANDIDATUR EA FINIR//
    }

    if (message.content === prefix + "version") {
        var version_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Version actuel du serveur [💪NOVA💪] : 2.0")                            //VERSION 2.1 --> COMMANDES FINIES// //.setTitle("Version actuel du serveur [💪NOVA💪] : 2.1")//

        message.channel.sendMessage(version_embed);
        message.delete();
    }
   
///////////////////////////////////////////////////COMMANDES STAFF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(message.content.startsWith(staff + "kick")) {
        var kick_embed = new Discord.RichEmbed()
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(kick) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de kick cette personne !");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN PURIFICATED BY ${message.author.username}`)
        });
        message.channel.sendMessage(kick_embed)
        message.delete();
    }


    if(message.content.startsWith(staff + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(ban) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de ban cette personne !");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN HAMMERED BY ${message.author.username}`)
        });
        message.delete();
    }

    if(message.content.startsWith(staff + "mute")) {
        
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de mute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de mute cette personne !");
        }
        if(message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`${mute.user.username} IS MUTE !`);
            
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de unmute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }m
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de unmute cette personne !");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`${mute.user.username} is now unmute !`);
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "clear")) {
        if(!message.guild.member(message.author).hasPermission("CLEAR_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
    }
    var clear = message.guild.member(message.mentions.users.first());
    if(clear) {
        return message.channel.send("I don't know if the user exist");
    }
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
        return message.channel.send("I don't have the permission for mute user");
    }
    clear.clear().then(member => {
        message.channel.send(`${member.user.username}  has been clear by ${message.author.username}`)
    });
    message.delete();
}







var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(staff + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(staff+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(staff+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

///////////////////////////////////////////////////COMMANDES PV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === pv + "p") {

       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");

       message.delete();

    }

    if (message.content === pv + "noir") {

        message.reply("LE NOIR EST MORT, JE L'AI TUER !!!");
    
        message.delete();

    }
    
















///////////////////////////////////////////////////BLACKLIST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


     if (message.content === "fdp") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "pute") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "merde") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "salope") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "enculer") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connard") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "putain") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connasse") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "saloperie") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ntm") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "nique") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ta mere") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "gueule") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "couilles") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }


/////////////////////////////////////////////////MUSIQUE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  
  //if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    
    }

  }

  if (message.content === '/leavebot') {

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
      .then(deconncetion => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully disconnected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  
  }

}

  if (message.content === '/play' + "") {

    
  }

});

})

bot.login('NDMxODc4MTMxNDU2OTMzODg5.DcJiFw.0uhqMJfknMKFvRlg0nuV4UrZAOY');
bot.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();




var prefix = ("!");
var staff = (".");
var pv =("²")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
    
});


bot.on('message', message => {

    
    bot.user.setAvatar('./bot1.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('Développement')
        .catch(console.error)


//////////////////////////////////////////////////NOUVEAU MEMBRES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(prefix + "accept")) {

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.find('name', '[MEMBRE]');

    membre.addRole(role).catch(console.error);

    message.channel.send(`${membre} a accepté les règles, devient ${role}! et peut maintenant accéder au reste du serveur`);

    message.delete();
}



//////////////////////////////////////////////////COMMANDES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (message.content === prefix + "regles") {
        var aregles_embed = new Discord.RichEmbed()
        .setColor("#FF5733")



        .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")
         .setTitle("__**A -REGLEMENT GENERALE**__")
        .addField("[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]")
        .addField("[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",)
        .addField("[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",)
        .addField("[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",)
        .addField("[5. Ne pas tenir de propos religieux, politique]",)
        .addField("[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",)
        .addField("[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",)
        .addField("[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",)



        .addField("__**B -REGLEMENT SALONS TEXTUELS**__")
        .addField("[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",)
        .addField("[2. Ne pas **abuser** des majuscules !]",)
        .addField("[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",)
        .addField("[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",)
        .addField("[5. Ne pas **spammer** les commandes des bots]",)
        .addField("[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",)


        .addField("__**C -REGLEMENT SALON VOCAUX**__")
        .addField("[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",)
        .addField("[2. Le changement de channel continu est **INTERDIT**]",)
        .addField("[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",)
        
        
        message.channel.sendMessage(aregles_embed);
        message.delete();   

    }

    if (message.content === prefix + "aregles") {
        var regles_embed = new Discord.RichEmbed()
      .setTitle("**REGLEMENT**")
      .setAuthor("Cobrawar", "")
     
      .setColor(0x00AE86)
      .setDescription("Ceci est le règlement du serveur :")
      .setFooter("reglement by @cobrawar")
      
      
    
      .setTimestamp()

      .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")

      
      .addField("__**A -REGLEMENT GENERALE :**__",
        "[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]",
        "[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",
        "[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",
        "[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",
        "[5. Ne pas tenir de propos religieux, politique]",
        "[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",
        "[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",
        "[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",
        
    )
     
      .addField("__**B -REGLEMENT SALONS TEXTUELS :**__",
      "[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",
      "[2. Ne pas **abuser** des majuscules !]",
      "[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",
      "[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",
      "[5. Ne pas **spammer** les commandes des bots]",
      "[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",

    
    )
      
      .addField("__**C -REGLEMENT SALON VOCAUX :**__",
      "[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",
      "[2. Le changement de channel continu est **INTERDIT**]",
      "[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",
    
    
    )



      
    .addBlankField(true)
    
      message.channel.sendMessage(regles_embed);
      
            message.delete();
    }


    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**Commandes :**")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !discution")
        .addField("10.  !pt")
        .addField("11.  !candidature")
        .addField("12.  !version")                                                  
        .addField("**Commandes Admin :**")
        .addField("1.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("2.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("3.   .mute @pseudo / .unmute @pseudo  ---> réservé au grade Admin ou plus")
        .addField("4.   .clear @pseudo ---> réservé au grade Admin ou plus")
        
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("1° Demandez de l'aide dans le salon écrit aide-plainte et attendez une réponse de la part d'un gradé")
        .addField("2° Suivez la procédure demandée")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar  : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn  : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        .addField("PowerGaming  : https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6taq20FeuKj?si=WgNUWwrwS-SHN2tlfsovVQ")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les commandes du bot de musique : (Vous devez être VIP ou plus)")
        .addField("-join ---> Faire venir le bot dans votre channel")
        .addField("-leave  ---> Faire partir le bot de votre channel")
        .addField("-play + (URL) ---> Faire jouer une musique au bot à partir de youtube ! ")
        .addField("-pause ---> Mettre la musique en pause")
        .addField("-stop ---> Stopper la musique")
        .addField("Proposez des musiques dans le channel musique")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différents grades du serveur :")
        .setDescription("Augmenter de garde ? : demander une requête à une Administrateur ou plus")
        .addField("1.   [💪 DEUS💪 ] : Grade le plus élevé du serveur, tous les droits.")
        .addField("2.   [💻ADMINISTRATEUR💻] : Fait respecter les règles du serveur et aide les Fondateurs ")     
        .addField("3.   [👋 CHEF-HELPER👋 ] : Chef du grade [🤚 HELPER🤚 ]")
        .addField("4.   [⚙️ MODERATEUR⚙️ ] : Règle les soucis entre joueurs et contribut aux respect des règles")     
        .addField("5.   [👮🏼 POLICE👮🏼 ] : Même grade que modérateur ")
        .addField("6.   [🤚 HELPER🤚 ] : Helper : Aide les personnes en difficultés et sert de porte parole")
        .addField("7.   [🔑 VIP🔑 ] : Grade de membre supérieur, peut insérer des liens et autres")
        .addField("8.   [MEMBRE] : Grade de base du serveur")
        .addField("9.   [GOLBUTE] : Grade punit, correspond à un tempban")
        message.channel.sendMessage(grade_embed);
        message.delete();
    }

    if (message.content === prefix + "maj") {
        var maj_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "discution") {
        var chat_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Discution :")
        .addField("Le channel Discustion est là pour discuter de tout et de rien sans embrouilles en respectant les règles!")
      
        message.channel.sendMessage(chat_embed);
        message.delete();

    }

    if (message.content === prefix + "pt") {
        var pt_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Plainte")
        .addField("Faites votre plainte")
        if(message.mentions.users.size === 0) {                                             //COMMANDE DE PLAINTE A FINIR//
            return message.channel.send("You need to mention an @user");
        }
        if(message.mentions.users.size === 1) {
            
        }
    }

    if (message.content === prefix + "candidature") {
        var candidature_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Candidature demandée avec succès ! Postée la ")                          //COMMANDE DE CANDIDATUR EA FINIR//
    }

    if (message.content === prefix + "version") {
        var version_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Version actuel du serveur [💪NOVA💪] : 2.0")                            //VERSION 2.1 --> COMMANDES FINIES// //.setTitle("Version actuel du serveur [💪NOVA💪] : 2.1")//

        message.channel.sendMessage(version_embed);
        message.delete();
    }
   
///////////////////////////////////////////////////COMMANDES STAFF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(message.content.startsWith(staff + "kick")) {
        var kick_embed = new Discord.RichEmbed()
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(kick) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de kick cette personne !");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN PURIFICATED BY ${message.author.username}`)
        });
        message.channel.sendMessage(kick_embed)
        message.delete();
    }


    if(message.content.startsWith(staff + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(ban) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de ban cette personne !");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN HAMMERED BY ${message.author.username}`)
        });
        message.delete();
    }

    if(message.content.startsWith(staff + "mute")) {
        
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de mute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de mute cette personne !");
        }
        if(message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`${mute.user.username} IS MUTE !`);
            
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de unmute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }m
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de unmute cette personne !");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`${mute.user.username} is now unmute !`);
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "clear")) {
        if(!message.guild.member(message.author).hasPermission("CLEAR_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
    }
    var clear = message.guild.member(message.mentions.users.first());
    if(clear) {
        return message.channel.send("I don't know if the user exist");
    }
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
        return message.channel.send("I don't have the permission for mute user");
    }
    clear.clear().then(member => {
        message.channel.send(`${member.user.username}  has been clear by ${message.author.username}`)
    });
    message.delete();
}







var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(staff + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(staff+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(staff+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

///////////////////////////////////////////////////COMMANDES PV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === pv + "p") {

       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");

       message.delete();

    }

    if (message.content === pv + "noir") {

        message.reply("LE NOIR EST MORT, JE L'AI TUER !!!");
    
        message.delete();

    }
    
















///////////////////////////////////////////////////BLACKLIST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


     if (message.content === "fdp") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "pute") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "merde") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "salope") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "enculer") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connard") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "putain") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connasse") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "saloperie") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ntm") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "nique") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ta mere") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "gueule") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "couilles") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }


/////////////////////////////////////////////////MUSIQUE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  
  //if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    
    }

  }

  if (message.content === '/leavebot') {

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
      .then(deconncetion => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully disconnected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  
  }

}

  if (message.content === '/play' + "") {

    
  }

});

})

bot.login('NDMxODc4MTMxNDU2OTMzODg5.DcJiFw.0uhqMJfknMKFvRlg0nuV4UrZAOY');
bot.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();




var prefix = ("!");
var staff = (".");
var pv =("²")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
    
});


bot.on('message', message => {

    
    bot.user.setAvatar('./bot1.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('Développement')
        .catch(console.error)


//////////////////////////////////////////////////NOUVEAU MEMBRES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(prefix + "accept")) {

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.find('name', '[MEMBRE]');

    membre.addRole(role).catch(console.error);

    message.channel.send(`${membre} a accepté les règles, devient ${role}! et peut maintenant accéder au reste du serveur`);

    message.delete();
}



//////////////////////////////////////////////////COMMANDES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (message.content === prefix + "regles") {
        var aregles_embed = new Discord.RichEmbed()
        .setColor("#FF5733")



        .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")
         .setTitle("__**A -REGLEMENT GENERALE**__")
        .addField("[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]")
        .addField("[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",)
        .addField("[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",)
        .addField("[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",)
        .addField("[5. Ne pas tenir de propos religieux, politique]",)
        .addField("[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",)
        .addField("[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",)
        .addField("[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",)



        .addField("__**B -REGLEMENT SALONS TEXTUELS**__")
        .addField("[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",)
        .addField("[2. Ne pas **abuser** des majuscules !]",)
        .addField("[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",)
        .addField("[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",)
        .addField("[5. Ne pas **spammer** les commandes des bots]",)
        .addField("[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",)


        .addField("__**C -REGLEMENT SALON VOCAUX**__")
        .addField("[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",)
        .addField("[2. Le changement de channel continu est **INTERDIT**]",)
        .addField("[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",)
        
        
        message.channel.sendMessage(aregles_embed);
        message.delete();   

    }

    if (message.content === prefix + "aregles") {
        var regles_embed = new Discord.RichEmbed()
      .setTitle("**REGLEMENT**")
      .setAuthor("Cobrawar", "")
     
      .setColor(0x00AE86)
      .setDescription("Ceci est le règlement du serveur :")
      .setFooter("reglement by @cobrawar")
      
      
    
      .setTimestamp()

      .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")

      
      .addField("__**A -REGLEMENT GENERALE :**__",
        "[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]",
        "[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",
        "[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",
        "[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",
        "[5. Ne pas tenir de propos religieux, politique]",
        "[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",
        "[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",
        "[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",
        
    )
     
      .addField("__**B -REGLEMENT SALONS TEXTUELS :**__",
      "[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",
      "[2. Ne pas **abuser** des majuscules !]",
      "[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",
      "[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",
      "[5. Ne pas **spammer** les commandes des bots]",
      "[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",

    
    )
      
      .addField("__**C -REGLEMENT SALON VOCAUX :**__",
      "[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",
      "[2. Le changement de channel continu est **INTERDIT**]",
      "[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",
    
    
    )



      
    .addBlankField(true)
    
      message.channel.sendMessage(regles_embed);
      
            message.delete();
    }


    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**Commandes :**")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !discution")
        .addField("10.  !pt")
        .addField("11.  !candidature")
        .addField("12.  !version")                                                  
        .addField("**Commandes Admin :**")
        .addField("1.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("2.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("3.   .mute @pseudo / .unmute @pseudo  ---> réservé au grade Admin ou plus")
        .addField("4.   .clear @pseudo ---> réservé au grade Admin ou plus")
        
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("1° Demandez de l'aide dans le salon écrit aide-plainte et attendez une réponse de la part d'un gradé")
        .addField("2° Suivez la procédure demandée")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar  : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn  : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        .addField("PowerGaming  : https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6taq20FeuKj?si=WgNUWwrwS-SHN2tlfsovVQ")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les commandes du bot de musique : (Vous devez être VIP ou plus)")
        .addField("-join ---> Faire venir le bot dans votre channel")
        .addField("-leave  ---> Faire partir le bot de votre channel")
        .addField("-play + (URL) ---> Faire jouer une musique au bot à partir de youtube ! ")
        .addField("-pause ---> Mettre la musique en pause")
        .addField("-stop ---> Stopper la musique")
        .addField("Proposez des musiques dans le channel musique")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différents grades du serveur :")
        .setDescription("Augmenter de garde ? : demander une requête à une Administrateur ou plus")
        .addField("1.   [💪 DEUS💪 ] : Grade le plus élevé du serveur, tous les droits.")
        .addField("2.   [💻ADMINISTRATEUR💻] : Fait respecter les règles du serveur et aide les Fondateurs ")     
        .addField("3.   [👋 CHEF-HELPER👋 ] : Chef du grade [🤚 HELPER🤚 ]")
        .addField("4.   [⚙️ MODERATEUR⚙️ ] : Règle les soucis entre joueurs et contribut aux respect des règles")     
        .addField("5.   [👮🏼 POLICE👮🏼 ] : Même grade que modérateur ")
        .addField("6.   [🤚 HELPER🤚 ] : Helper : Aide les personnes en difficultés et sert de porte parole")
        .addField("7.   [🔑 VIP🔑 ] : Grade de membre supérieur, peut insérer des liens et autres")
        .addField("8.   [MEMBRE] : Grade de base du serveur")
        .addField("9.   [GOLBUTE] : Grade punit, correspond à un tempban")
        message.channel.sendMessage(grade_embed);
        message.delete();
    }

    if (message.content === prefix + "maj") {
        var maj_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "discution") {
        var chat_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Discution :")
        .addField("Le channel Discustion est là pour discuter de tout et de rien sans embrouilles en respectant les règles!")
      
        message.channel.sendMessage(chat_embed);
        message.delete();

    }

    if (message.content === prefix + "pt") {
        var pt_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Plainte")
        .addField("Faites votre plainte")
        if(message.mentions.users.size === 0) {                                             //COMMANDE DE PLAINTE A FINIR//
            return message.channel.send("You need to mention an @user");
        }
        if(message.mentions.users.size === 1) {
            
        }
    }

    if (message.content === prefix + "candidature") {
        var candidature_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Candidature demandée avec succès ! Postée la ")                          //COMMANDE DE CANDIDATUR EA FINIR//
    }

    if (message.content === prefix + "version") {
        var version_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Version actuel du serveur [💪NOVA💪] : 2.0")                            //VERSION 2.1 --> COMMANDES FINIES// //.setTitle("Version actuel du serveur [💪NOVA💪] : 2.1")//

        message.channel.sendMessage(version_embed);
        message.delete();
    }
   
///////////////////////////////////////////////////COMMANDES STAFF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(message.content.startsWith(staff + "kick")) {
        var kick_embed = new Discord.RichEmbed()
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(kick) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de kick cette personne !");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN PURIFICATED BY ${message.author.username}`)
        });
        message.channel.sendMessage(kick_embed)
        message.delete();
    }


    if(message.content.startsWith(staff + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(ban) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de ban cette personne !");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN HAMMERED BY ${message.author.username}`)
        });
        message.delete();
    }

    if(message.content.startsWith(staff + "mute")) {
        
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de mute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de mute cette personne !");
        }
        if(message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`${mute.user.username} IS MUTE !`);
            
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de unmute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }m
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de unmute cette personne !");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`${mute.user.username} is now unmute !`);
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "clear")) {
        if(!message.guild.member(message.author).hasPermission("CLEAR_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
    }
    var clear = message.guild.member(message.mentions.users.first());
    if(clear) {
        return message.channel.send("I don't know if the user exist");
    }
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
        return message.channel.send("I don't have the permission for mute user");
    }
    clear.clear().then(member => {
        message.channel.send(`${member.user.username}  has been clear by ${message.author.username}`)
    });
    message.delete();
}







var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(staff + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(staff+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(staff+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

///////////////////////////////////////////////////COMMANDES PV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === pv + "p") {

       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");

       message.delete();

    }

    if (message.content === pv + "noir") {

        message.reply("LE NOIR EST MORT, JE L'AI TUER !!!");
    
        message.delete();

    }
    
















///////////////////////////////////////////////////BLACKLIST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


     if (message.content === "fdp") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "pute") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "merde") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "salope") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "enculer") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connard") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "putain") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connasse") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "saloperie") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ntm") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "nique") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ta mere") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "gueule") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "couilles") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }


/////////////////////////////////////////////////MUSIQUE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  
  //if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    
    }

  }

  if (message.content === '/leavebot') {

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
      .then(deconncetion => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully disconnected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  
  }

}

  if (message.content === '/play' + "") {

    
  }

});

})

bot.login('NDMxODc4MTMxNDU2OTMzODg5.DcJiFw.0uhqMJfknMKFvRlg0nuV4UrZAOY');
bot.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();




var prefix = ("!");
var staff = (".");
var pv =("²")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
    
});


bot.on('message', message => {

    
    bot.user.setAvatar('./bot1.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('Développement')
        .catch(console.error)


//////////////////////////////////////////////////NOUVEAU MEMBRES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(prefix + "accept")) {

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.find('name', '[MEMBRE]');

    membre.addRole(role).catch(console.error);

    message.channel.send(`${membre} a accepté les règles, devient ${role}! et peut maintenant accéder au reste du serveur`);

    message.delete();
}



//////////////////////////////////////////////////COMMANDES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (message.content === prefix + "regles") {
        var aregles_embed = new Discord.RichEmbed()
        .setColor("#FF5733")



        .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")
         .setTitle("__**A -REGLEMENT GENERALE**__")
        .addField("[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]")
        .addField("[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",)
        .addField("[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",)
        .addField("[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",)
        .addField("[5. Ne pas tenir de propos religieux, politique]",)
        .addField("[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",)
        .addField("[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",)
        .addField("[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",)



        .addField("__**B -REGLEMENT SALONS TEXTUELS**__")
        .addField("[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",)
        .addField("[2. Ne pas **abuser** des majuscules !]",)
        .addField("[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",)
        .addField("[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",)
        .addField("[5. Ne pas **spammer** les commandes des bots]",)
        .addField("[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",)


        .addField("__**C -REGLEMENT SALON VOCAUX**__")
        .addField("[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",)
        .addField("[2. Le changement de channel continu est **INTERDIT**]",)
        .addField("[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",)
        
        
        message.channel.sendMessage(aregles_embed);
        message.delete();   

    }

    if (message.content === prefix + "aregles") {
        var regles_embed = new Discord.RichEmbed()
      .setTitle("**REGLEMENT**")
      .setAuthor("Cobrawar", "")
     
      .setColor(0x00AE86)
      .setDescription("Ceci est le règlement du serveur :")
      .setFooter("reglement by @cobrawar")
      
      
    
      .setTimestamp()

      .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")

      
      .addField("__**A -REGLEMENT GENERALE :**__",
        "[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]",
        "[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",
        "[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",
        "[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",
        "[5. Ne pas tenir de propos religieux, politique]",
        "[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",
        "[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",
        "[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",
        
    )
     
      .addField("__**B -REGLEMENT SALONS TEXTUELS :**__",
      "[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",
      "[2. Ne pas **abuser** des majuscules !]",
      "[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",
      "[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",
      "[5. Ne pas **spammer** les commandes des bots]",
      "[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",

    
    )
      
      .addField("__**C -REGLEMENT SALON VOCAUX :**__",
      "[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",
      "[2. Le changement de channel continu est **INTERDIT**]",
      "[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",
    
    
    )



      
    .addBlankField(true)
    
      message.channel.sendMessage(regles_embed);
      
            message.delete();
    }


    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**Commandes :**")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !discution")
        .addField("10.  !pt")
        .addField("11.  !candidature")
        .addField("12.  !version")                                                  
        .addField("**Commandes Admin :**")
        .addField("1.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("2.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("3.   .mute @pseudo / .unmute @pseudo  ---> réservé au grade Admin ou plus")
        .addField("4.   .clear @pseudo ---> réservé au grade Admin ou plus")
        
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("1° Demandez de l'aide dans le salon écrit aide-plainte et attendez une réponse de la part d'un gradé")
        .addField("2° Suivez la procédure demandée")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar  : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn  : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        .addField("PowerGaming  : https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6taq20FeuKj?si=WgNUWwrwS-SHN2tlfsovVQ")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les commandes du bot de musique : (Vous devez être VIP ou plus)")
        .addField("-join ---> Faire venir le bot dans votre channel")
        .addField("-leave  ---> Faire partir le bot de votre channel")
        .addField("-play + (URL) ---> Faire jouer une musique au bot à partir de youtube ! ")
        .addField("-pause ---> Mettre la musique en pause")
        .addField("-stop ---> Stopper la musique")
        .addField("Proposez des musiques dans le channel musique")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différents grades du serveur :")
        .setDescription("Augmenter de garde ? : demander une requête à une Administrateur ou plus")
        .addField("1.   [💪 DEUS💪 ] : Grade le plus élevé du serveur, tous les droits.")
        .addField("2.   [💻ADMINISTRATEUR💻] : Fait respecter les règles du serveur et aide les Fondateurs ")     
        .addField("3.   [👋 CHEF-HELPER👋 ] : Chef du grade [🤚 HELPER🤚 ]")
        .addField("4.   [⚙️ MODERATEUR⚙️ ] : Règle les soucis entre joueurs et contribut aux respect des règles")     
        .addField("5.   [👮🏼 POLICE👮🏼 ] : Même grade que modérateur ")
        .addField("6.   [🤚 HELPER🤚 ] : Helper : Aide les personnes en difficultés et sert de porte parole")
        .addField("7.   [🔑 VIP🔑 ] : Grade de membre supérieur, peut insérer des liens et autres")
        .addField("8.   [MEMBRE] : Grade de base du serveur")
        .addField("9.   [GOLBUTE] : Grade punit, correspond à un tempban")
        message.channel.sendMessage(grade_embed);
        message.delete();
    }

    if (message.content === prefix + "maj") {
        var maj_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "discution") {
        var chat_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Discution :")
        .addField("Le channel Discustion est là pour discuter de tout et de rien sans embrouilles en respectant les règles!")
      
        message.channel.sendMessage(chat_embed);
        message.delete();

    }

    if (message.content === prefix + "pt") {
        var pt_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Plainte")
        .addField("Faites votre plainte")
        if(message.mentions.users.size === 0) {                                             //COMMANDE DE PLAINTE A FINIR//
            return message.channel.send("You need to mention an @user");
        }
        if(message.mentions.users.size === 1) {
            
        }
    }

    if (message.content === prefix + "candidature") {
        var candidature_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Candidature demandée avec succès ! Postée la ")                          //COMMANDE DE CANDIDATUR EA FINIR//
    }

    if (message.content === prefix + "version") {
        var version_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Version actuel du serveur [💪NOVA💪] : 2.0")                            //VERSION 2.1 --> COMMANDES FINIES// //.setTitle("Version actuel du serveur [💪NOVA💪] : 2.1")//

        message.channel.sendMessage(version_embed);
        message.delete();
    }
   
///////////////////////////////////////////////////COMMANDES STAFF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(message.content.startsWith(staff + "kick")) {
        var kick_embed = new Discord.RichEmbed()
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(kick) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de kick cette personne !");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN PURIFICATED BY ${message.author.username}`)
        });
        message.channel.sendMessage(kick_embed)
        message.delete();
    }


    if(message.content.startsWith(staff + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(ban) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de ban cette personne !");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN HAMMERED BY ${message.author.username}`)
        });
        message.delete();
    }

    if(message.content.startsWith(staff + "mute")) {
        
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de mute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de mute cette personne !");
        }
        if(message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`${mute.user.username} IS MUTE !`);
            
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de unmute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }m
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de unmute cette personne !");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`${mute.user.username} is now unmute !`);
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "clear")) {
        if(!message.guild.member(message.author).hasPermission("CLEAR_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
    }
    var clear = message.guild.member(message.mentions.users.first());
    if(clear) {
        return message.channel.send("I don't know if the user exist");
    }
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
        return message.channel.send("I don't have the permission for mute user");
    }
    clear.clear().then(member => {
        message.channel.send(`${member.user.username}  has been clear by ${message.author.username}`)
    });
    message.delete();
}







var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(staff + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(staff+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(staff+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

///////////////////////////////////////////////////COMMANDES PV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === pv + "p") {

       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");

       message.delete();

    }

    if (message.content === pv + "noir") {

        message.reply("LE NOIR EST MORT, JE L'AI TUER !!!");
    
        message.delete();

    }
    
















///////////////////////////////////////////////////BLACKLIST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


     if (message.content === "fdp") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "pute") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "merde") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "salope") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "enculer") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connard") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "putain") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connasse") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "saloperie") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ntm") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "nique") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ta mere") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "gueule") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "couilles") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }


/////////////////////////////////////////////////MUSIQUE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  
  //if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    
    }

  }

  if (message.content === '/leavebot') {

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
      .then(deconncetion => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully disconnected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  
  }

}

  if (message.content === '/play' + "") {

    
  }

});

})

bot.login('NDMxODc4MTMxNDU2OTMzODg5.DcJiFw.0uhqMJfknMKFvRlg0nuV4UrZAOY');
bot.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();




var prefix = ("!");
var staff = (".");
var pv =("²")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
    
});


bot.on('message', message => {

    
    bot.user.setAvatar('./bot1.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('Développement')
        .catch(console.error)


//////////////////////////////////////////////////NOUVEAU MEMBRES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(prefix + "accept")) {

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.find('name', '[MEMBRE]');

    membre.addRole(role).catch(console.error);

    message.channel.send(`${membre} a accepté les règles, devient ${role}! et peut maintenant accéder au reste du serveur`);

    message.delete();
}



//////////////////////////////////////////////////COMMANDES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (message.content === prefix + "regles") {
        var aregles_embed = new Discord.RichEmbed()
        .setColor("#FF5733")



        .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")
         .setTitle("__**A -REGLEMENT GENERALE**__")
        .addField("[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]")
        .addField("[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",)
        .addField("[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",)
        .addField("[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",)
        .addField("[5. Ne pas tenir de propos religieux, politique]",)
        .addField("[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",)
        .addField("[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",)
        .addField("[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",)



        .addField("__**B -REGLEMENT SALONS TEXTUELS**__")
        .addField("[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",)
        .addField("[2. Ne pas **abuser** des majuscules !]",)
        .addField("[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",)
        .addField("[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",)
        .addField("[5. Ne pas **spammer** les commandes des bots]",)
        .addField("[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",)


        .addField("__**C -REGLEMENT SALON VOCAUX**__")
        .addField("[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",)
        .addField("[2. Le changement de channel continu est **INTERDIT**]",)
        .addField("[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",)
        
        
        message.channel.sendMessage(aregles_embed);
        message.delete();   

    }

    if (message.content === prefix + "aregles") {
        var regles_embed = new Discord.RichEmbed()
      .setTitle("**REGLEMENT**")
      .setAuthor("Cobrawar", "")
     
      .setColor(0x00AE86)
      .setDescription("Ceci est le règlement du serveur :")
      .setFooter("reglement by @cobrawar")
      
      
    
      .setTimestamp()

      .addField("LE REGLEMENT CE DOIT D'ETRE VALIDEE A L'ARRIVEE DU SERVEUR ET APPLIQUE SOUS PEINE DE SANCTIONS PROPORTIONELLES ! \n")

      
      .addField("__**A -REGLEMENT GENERALE :**__",
        "[1. Respecter les différentes personnes du serveur (quelque soit le grade de celui-çi)]",
        "[2. Les provocations, incitations ou manipulations envers **n'importe** quels membres est totalement **INTERDIT**]",
        "[3. D'après la norme de la protection des renseignements personnels, la divulgation publique d'informations personnelles d'autruis **SANS** son accord est **INTERDIT**]",
        "[4. L'usurpation d'identitées, de menaces (hack, ou autres) est **défendus**]",
        "[5. Ne pas tenir de propos religieux, politique]",
        "[6. Tout contenus (messages, pseudos, liens, vidéos, images, etc.) illicites, sexuels, horrifiants, insultants, sexistes, racistes est **interdits**, cependant +18 est autorisé dans le channel 🔞trash🔞]",
        "[7. Si un problème d'un entre vous et un autre membre du serveur ce déclare, bloquer le mais nous ne n'en occupons pas !]",
        "[8. Pour les problémes : ne pas le résoudre **seul** mais appeller un plus haut grader (Helper, Admin, Modo, DEUS)] \n",
        
    )
     
      .addField("__**B -REGLEMENT SALONS TEXTUELS :**__",
      "[1. Le spam, flood, et messages d'inusltes, grossiertées ne sont pas tolérés]",
      "[2. Ne pas **abuser** des majuscules !]",
      "[3. Le partage de musiques (liens) sont autorisés **seulement** dans le salon 🎼musique🎼]",
      "[4. Pas de publicitées (marques, chaînes....), (la mention est autorisée mais pas la pub)]",
      "[5. Ne pas **spammer** les commandes des bots]",
      "[6. Le salon 🔑musique🔑 (VIP+) est réservé aux musiques demandées au bot MUSIQUE, **PAS AILLEURS**] \n",

    
    )
      
      .addField("__**C -REGLEMENT SALON VOCAUX :**__",
      "[1. Pas de cris, évitez les grésillements ou autres bruits dérangants, les modificateurs de voix et autres soundboards son autorisés dans la **limite** du raisonnable]",
      "[2. Le changement de channel continu est **INTERDIT**]",
      "[3. Ne pas diffuser des contenus non appropriés à la règle A-6]",
    
    
    )



      
    .addBlankField(true)
    
      message.channel.sendMessage(regles_embed);
      
            message.delete();
    }


    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**Commandes :**")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !discution")
        .addField("10.  !pt")
        .addField("11.  !candidature")
        .addField("12.  !version")                                                  
        .addField("**Commandes Admin :**")
        .addField("1.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("2.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("3.   .mute @pseudo / .unmute @pseudo  ---> réservé au grade Admin ou plus")
        .addField("4.   .clear @pseudo ---> réservé au grade Admin ou plus")
        
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("1° Demandez de l'aide dans le salon écrit aide-plainte et attendez une réponse de la part d'un gradé")
        .addField("2° Suivez la procédure demandée")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar  : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn  : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        .addField("PowerGaming  : https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6taq20FeuKj?si=WgNUWwrwS-SHN2tlfsovVQ")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les commandes du bot de musique : (Vous devez être VIP ou plus)")
        .addField("-join ---> Faire venir le bot dans votre channel")
        .addField("-leave  ---> Faire partir le bot de votre channel")
        .addField("-play + (URL) ---> Faire jouer une musique au bot à partir de youtube ! ")
        .addField("-pause ---> Mettre la musique en pause")
        .addField("-stop ---> Stopper la musique")
        .addField("Proposez des musiques dans le channel musique")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différents grades du serveur :")
        .setDescription("Augmenter de garde ? : demander une requête à une Administrateur ou plus")
        .addField("1.   [💪 DEUS💪 ] : Grade le plus élevé du serveur, tous les droits.")
        .addField("2.   [💻ADMINISTRATEUR💻] : Fait respecter les règles du serveur et aide les Fondateurs ")     
        .addField("3.   [👋 CHEF-HELPER👋 ] : Chef du grade [🤚 HELPER🤚 ]")
        .addField("4.   [⚙️ MODERATEUR⚙️ ] : Règle les soucis entre joueurs et contribut aux respect des règles")     
        .addField("5.   [👮🏼 POLICE👮🏼 ] : Même grade que modérateur ")
        .addField("6.   [🤚 HELPER🤚 ] : Helper : Aide les personnes en difficultés et sert de porte parole")
        .addField("7.   [🔑 VIP🔑 ] : Grade de membre supérieur, peut insérer des liens et autres")
        .addField("8.   [MEMBRE] : Grade de base du serveur")
        .addField("9.   [GOLBUTE] : Grade punit, correspond à un tempban")
        message.channel.sendMessage(grade_embed);
        message.delete();
    }

    if (message.content === prefix + "maj") {
        var maj_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "discution") {
        var chat_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Discution :")
        .addField("Le channel Discustion est là pour discuter de tout et de rien sans embrouilles en respectant les règles!")
      
        message.channel.sendMessage(chat_embed);
        message.delete();

    }

    if (message.content === prefix + "pt") {
        var pt_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Plainte")
        .addField("Faites votre plainte")
        if(message.mentions.users.size === 0) {                                             //COMMANDE DE PLAINTE A FINIR//
            return message.channel.send("You need to mention an @user");
        }
        if(message.mentions.users.size === 1) {
            
        }
    }

    if (message.content === prefix + "candidature") {
        var candidature_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Candidature demandée avec succès ! Postée la ")                          //COMMANDE DE CANDIDATUR EA FINIR//
    }

    if (message.content === prefix + "version") {
        var version_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Version actuel du serveur [💪NOVA💪] : 2.0")                            //VERSION 2.1 --> COMMANDES FINIES// //.setTitle("Version actuel du serveur [💪NOVA💪] : 2.1")//

        message.channel.sendMessage(version_embed);
        message.delete();
    }
   
///////////////////////////////////////////////////COMMANDES STAFF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(message.content.startsWith(staff + "kick")) {
        var kick_embed = new Discord.RichEmbed()
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(kick) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de kick cette personne !");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN PURIFICATED BY ${message.author.username}`)
        });
        message.channel.sendMessage(kick_embed)
        message.delete();
    }


    if(message.content.startsWith(staff + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(ban) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
            return message.channel.send("Je n'ai pas la permission de ban cette personne !");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username}  HAS BEEN HAMMERED BY ${message.author.username}`)
        });
        message.delete();
    }

    if(message.content.startsWith(staff + "mute")) {
        
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de mute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }
        if(message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de mute cette personne !");
        }
        if(message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`${mute.user.username} IS MUTE !`);
            
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de unmute !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur (@user)");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(mute) {
            return message.channel.send("Je ne sais pas si cette personne existe");
        }m
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Je n'ai pas la permission de unmute cette personne !");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`${mute.user.username} is now unmute !`);
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "clear")) {
        if(!message.guild.member(message.author).hasPermission("CLEAR_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
    }
    var clear = message.guild.member(message.mentions.users.first());
    if(clear) {
        return message.channel.send("I don't know if the user exist");
    }
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
        return message.channel.send("I don't have the permission for mute user");
    }
    clear.clear().then(member => {
        message.channel.send(`${member.user.username}  has been clear by ${message.author.username}`)
    });
    message.delete();
}







var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(staff + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(staff+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+staff+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(staff+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+staff+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

///////////////////////////////////////////////////COMMANDES PV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === pv + "p") {

       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");

       message.delete();

    }

    if (message.content === pv + "noir") {

        message.reply("LE NOIR EST MORT, JE L'AI TUER !!!");
    
        message.delete();

    }
    
















///////////////////////////////////////////////////BLACKLIST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


     if (message.content === "fdp") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "pute") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "merde") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "salope") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "enculer") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connard") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "putain") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connasse") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "saloperie") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ntm") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "nique") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ta mere") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "gueule") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "couilles") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }


/////////////////////////////////////////////////MUSIQUE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  
  //if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    
    }

  }

  if (message.content === '/leavebot') {

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
      .then(deconncetion => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully disconnected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  
  }

}

  if (message.content === '/play' + "") {

    
  }

});

})


bot.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
