export function logicos() {
    let idade = 18
    let temCarteira = true

    const po1 = "Pode dirigir: " + (idade >= 18 && temCarteira)
    const po2 = "Pode entrar na festa: " + (idade >= 18 || temCarteira)
    const po3 = "Não tem carteira? " + (!temCarteira)

    return [po1, po2, po3]
}
