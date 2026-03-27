export function logicos() {
    let idade = 18
    let temCarteira = true

    po1 = ("pode dirigir", idade >= 18 && temCarteira)
    po2 = ("pode entrar na festa", idade>= 18 || temCarteira)
    po3 = ("não tem carteira?", !temCarteira)

    return [po1, po2, po3, po4]
}

