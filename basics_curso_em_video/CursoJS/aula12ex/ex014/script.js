function carregar(){
    let msg = document.querySelector('div#msg')
    let foto = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    // hora = 17
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 5 && hora < 12){
        foto.src = 'fotomanha.png'
        document.body.style.background = '#efc9a0'
    }else if(hora >= 12 && hora <= 18){
        foto.src = 'fototarde.png'
        document.body.style.background = '#86535c'
    }else{
        foto.src = 'fotonoite.png'
        document.body.style.background = '#163436'
    }
}