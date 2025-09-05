let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement ('option')
      item.text = `O valor ${num.value} foi adicionado`
      lista.appendChild(item)

    } else{
        alert('Valor invalido ou ja aplicado')
    }
    num.value = ''
    num.focus()
}


function finalizar(){
    if ( valores.length == 0 ) {
        alert('coloque os dados')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
           if(valores[pos] > maior)
            maior = valores[pos]

           if(valores[menor] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML= ''
        res.innerHTML += `<p> Ao todo teremos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p> O maior valor encontrado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor encrontado foi ${menor}</p>`
        res.innerHTML += `<p> A soma de todos oss valores é ${soma} </P>`
        res.innerHTML += `<p> A media dos valores é ${media}`
    }
}