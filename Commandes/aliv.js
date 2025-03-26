"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "creator", reaction: "💀", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*💀* 👋 \n\n ' + " hellow friends my name is RAHMANI MD im a simple wastappbot created by *RAHMANI* on 2/1/2025 on Sunday morning 6;00am and im o happy now and im here to help and iknow 1k languages on the word so be free and im pure single 😢 i have more to talk but keep using RAHMANI MD";
    let d = '                                                                            my handsome creator RAHMANI MD';
    let varmess = z + d;
    var mp4 ='https://files.catbox.moe/1gdmdb.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
