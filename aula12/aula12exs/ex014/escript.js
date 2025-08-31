function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora}`

    if (hora >= 0 && hora <12) {
        img.src = 'pexels-artur-roman-158558-1167355.jpg'
        document.body.style.background = '#dcd9b0'
    } else if (hora >=12 && hora < 18 ) {
        img.src = 'pexels-puttt-354418643-33174146.jpg'
        document.body.style.background = '#d8a87a'
    } else {
        img.src = 'pexels-pixabay-414144.jpg'
        document.body.style.background = '#0d2a30'
    }

}


