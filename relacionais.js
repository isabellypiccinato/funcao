export function relacionais(){
    let x = 18
    let y = 12
 
    let v1 = ("X é maior que Y?", x>y)
    let v2 = ("X é menor que Y?", x<y)
    let v3 = ("X é igual a Y?", x==y)

    return [v1, v2, v3]
}