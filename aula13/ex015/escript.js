function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png.jpg' )
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src' , 'foto-jovem-m.png.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', foto-adulto-matchMedia.png.jpg)
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}