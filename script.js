

function pega_numero(numero){
    
    const somatoria = document.getElementById('resultado')
    somatoria.innerHTML += `${numero}`
    somatoria.style.overflow ='scroll'
    somatoria.scrollLeft = '400'
    if(somatoria.scrollLeft =='400'){

        alert('numero maximo atingido')
        apaga_numero()
    }
    

}
function limpa_numeros(){
    document.getElementById('resultado').value = 0
    document.getElementById('resultado').innerHTML = ``
    
}

function apaga_numero(){

    const apagador = document.getElementById("resultado")
    document.getElementById("resultado").innerHTML = apagador.innerHTML.substring(0, apagador.innerHTML.length - 1)
    
}

function calculo(){

    const calcula_numeros = document.getElementById('resultado')
    if(calcula_numeros.innerText.length>0){

        document.getElementById('resultado').innerHTML = eval(calcula_numeros.innerText)
    }
    else{
        
        alert("Valores Incorretos!")
    }
}