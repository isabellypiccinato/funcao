import { variaveis } from "./variaveis.js";
import { aritmeticos } from "./aritmeticos.js";
import { relacionais } from "./relacionais.js";
import { logicos } from "./logicos.js";
import { ifElse } from "./ifElse.js";
import { switc } from "./switch.js";
import { repeticao } from "./repeticao.js";
import { vetor } from "./vetor.js";

import express from 'express'

const app = express()

app.get('/ex1', (req, res) => {

    let res1 = variaveis()
  res.send(res1)
})

app.get('/ex2', (req, res) => {

    let res1 = aritmeticos()
  res.send(res1)
})

app.get('/ex3', (req, res) => {

    let res1 = ifElse()
  res.send(res1)
})

app.get('/ex4', (req, res) => {

    let res1 = variaveis()
  res.send(res1)
})

app.get('/ex5', (req, res) => {

    let res1 = variaveis()
  res.send(res1)
})

app.get('/ex6', (req, res) => {

    let res1 = variaveis()
  res.send(res1)
})

app.get('/ex7', (req, res) => {

    let res1 = variaveis()
  res.send(res1)
})

app.get('/ex8', (req, res) => {

    let res1 = variaveis()
  res.send(res1)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
} )






