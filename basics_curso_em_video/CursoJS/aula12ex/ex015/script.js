function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let fano = document.querySelector('input#txtano')

    if(fano.value.length === 0 || fano.value > anoAtual){
        alert('Ano inválido')
    }else{
        atualizar(anoAtual,fano)
    }

}

function atualizar(anoAtual, fano){
    let res = document.querySelector('div#res')
    let fsex = document.getElementsByName('radsex')
    let idade = anoAtual - fano.value
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade < 20){
            img.setAttribute('src','boy-circle.png')
        }else if(idade <= 21){
            img.setAttribute('src','young-man-circle.png')
        }else if(idade <= 50){
            img.setAttribute('src','adult-man-circle.jpg')
        }else{
            img.setAttribute('src','elder-man-circle.png')
        }
    } else {
        genero = 'Mulher'
        if(idade >= 0 && idade < 20){
            img.setAttribute('src','girl-circle.png')
        }else if(idade <= 21){
            img.setAttribute('src','young-girl-circle.png')
        }else if(idade <= 50){
            img.setAttribute('src','adult woman-circle.jpg')
        }else{
            img.setAttribute('src','elder-woman-circle.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML =
    (`Detectamos ${genero} com
     aproximadamente ${idade} anos`)
    res.appendChild(img)
}