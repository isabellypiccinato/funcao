import express from 'express';

import { variaveis } from "./variaveis.js";
import { aritmeticos } from "./aritmeticos.js";
import { relacionais } from "./relacionais.js";
import { logicos } from "./logicos.js";
import { ifElse } from "./ifElse.js";
import { switc } from "./switch.js";
import { repeticao } from "./repeticao.js";
import { vetor } from "./vetor.js";

const app = express()


// EX1 (sem entrada)
app.get('/ex1', (req, res) => {
    res.send(variaveis())
})

// EX2 (QUERY)
// http://localhost:3000/ex2?a=10&b=5
app.get('/ex2', (req, res) => {
    let { a, b } = req.query
    res.send(aritmeticos(Number(a), Number(b)))
})

// EX3 (QUERY)
// http://localhost:3000/ex3?nota=8
app.get('/ex3', (req, res) => {
    let { nota } = req.query
    res.send(ifElse(Number(nota)))
})

// EX4 (QUERY)
// http://localhost:3000/ex4?a=true&b=false
app.get('/ex4', (req, res) => {
    let { a, b } = req.query
    res.send(logicos(a === "true", b === "true"))
})

// EX5 (PARAMS)
// http://localhost:3000/ex5/10/5
app.get('/ex5/:a/:b', (req, res) => {
    let { a, b } = req.params
    res.send(relacionais(Number(a), Number(b)))
})

// EX6 (QUERY)
// http://localhost:3000/ex6?num=5
app.get('/ex6', (req, res) => {
    let { num } = req.query
    res.send(repeticao(Number(num)))
})

// EX7 (PARAMS)
// http://localhost:3000/ex7/2
app.get('/ex7/:op', (req, res) => {
    let { op } = req.params
    res.send(switc(Number(op)))
})

// EX8 (QUERY)
// http://localhost:3000/ex8?valor=10
app.get('/ex8', (req, res) => {
    let { valor } = req.query
    res.send(vetor(Number(valor)))
})

app.listen(3000, () => {

  console.log('Server is running on http://localhost:3000')
} )


