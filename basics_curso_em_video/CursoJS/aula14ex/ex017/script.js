let gerar = document.querySelector('input#gerar')
gerar.addEventListener('click',gerarTabuada)

function gerarTabuada() {
    let numero = Number.parseInt(document.querySelector('input#numero').value)
    if(!isNaN(numero)){
        let tabuada = document.querySelector('select#tabuada')
        let options = document.querySelectorAll('#tabuada option');
        options.forEach(o => o.remove());
        for(let i = 0; i<=10;i++){
            let linha = document.createElement('option')
            linha.innerText = `${numero} X ${i} = ${numero*i}`
            linha.value = `tab ${i}` // Necessário para outras línguas como PHP
            tabuada.append(linha)
        }
    }else{
        alert('Por favor, digite um número.')
    }
}
