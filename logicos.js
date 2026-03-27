export function logicos() {
    let idade = 18
    let temCarteira = true

    console.log ("pode dirigir", idade >= 18 && temCarteira)
    console.log ("pode entrar na festa", idade>= 18 || temCarteira)
    console.log ("não tem carteira?", !temCarteira)
}

