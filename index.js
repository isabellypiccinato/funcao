
import { variaveis } from "./variaveis.js";
import { aritmeticos } from "./aritmeticos.js";
import { relacionais } from "./relacionais.js";
import { logicos } from "./logicos.js";
import { ifElse } from "./ifElse.js";
import { switc } from "./switch.js";
import { repeticao } from "./repeticao.js";
import { vetor } from "./vetor.js";
import express from 'express';

const app = express()

app.get('/ex1', (req, res) => {

    let res1 = variaveis()
  res.send(res1)
})

app.get('/ex2', (req, res) => {

    let res2 = aritmeticos()
  res.send(res2)
})

app.get('/ex3', (req, res) => {

    let res3 = ifElse()
  res.send(res3)
})

app.get('/ex4', (req, res) => {

    let res4 = logicos()
  res.send(res4)
})

app.get('/ex5', (req, res) => {

    let res5 = relacionais()
  res.send(res5)
})

app.get('/ex6', (req, res) => {

    let res6 = repeticao()
  res.send(res6)
})

app.get('/ex7', (req, res) => {

    let res7 = switc()
  res.send(res7)
})

app.get('/ex8', (req, res) => {

    let res8 = vetor()
  res.send(res8)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
} )

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

