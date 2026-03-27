
import { variaveis } from "./variaveis.js";
import { aritmeticos } from "./aritmeticos.js";
import { relacionais } from "./relacionais.js";
import { logicos } from "./logicos.js";
import { ifElse } from "./ifElse.js";
import { switc } from "./switch.js";
import { repeticao } from "./repeticao.js";
import { vetor } from "./vetor.js";

import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sistema(topico) {
    switch (topico) {
        
        case 1:
            variaveis();
            break;
        case 2:
            aritmeticos();
            break;
        case 3:
            relacionais();
            break;
        case 4:
            logicos();
            break;
        case 5:
            ifElse();
            break;
        case 6:
            switc();
            break;
        case 7:
            repeticao();
            break;
        case 8:
            vetor();
            break;
        default:
            console.log("Tópico inválido! Escolha de 1 a 8.");
    }
}

rl.question("Escolha um tópico (1 a 8): ", function(resposta) {

    let numero = parseInt(resposta);

    sistema(numero);

    rl.close();
});

