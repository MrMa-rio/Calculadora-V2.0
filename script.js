function  zerar(){
    calculadora_main.somatorio.numeros[calculadora_main.somatorio.numeros.length-1] = 0
    resultado.style.textAlign = "end"
    resultado.innerHTML = `0`
    entrada.value = 0
}
function calculadora(){
    
    const guarda_numeros = {

    numeros: [0,1,2,3,4]
}
const somatorio = {

    numeros: [0]
}
return {
    guarda_numeros,
    somatorio,
}
}


const entrada = document.getElementById("numero_input")
const resultado = document.getElementById("resultado")

const calculadora_main = calculadora()


function efeitos(evento){

    function colorIn(evento){

        const cor = document.getElementById(`opcao${evento}`)
        if(evento == 0){
            cor.style.boxShadow = "2px 2px 4px black"
        }
        else{
            cor.style.boxShadow = "3px 5px 5px black"
        }
        
    }
    
    function colorOut(evento){
    
        const cor = document.getElementById(`opcao${evento}`)
        cor.style.boxShadow = "0px 0px 0px black"
    }
    
    return
    {
    colorIn,
    colorOut
    }
}


function somar(numero){
    numero = numero.value
    calculadora_main.somatorio.numeros.push(calculadora_main.somatorio.numeros[calculadora_main.somatorio.numeros.length-1]+ Number(numero))
    entrada.value = ``
    
    


    
}



function resultado_(){

    somar(entrada)

   console.log(calculadora_main.somatorio.numeros[calculadora_main.somatorio.numeros.length-1])
   resultado.style.textAlign = "end"
   resultado.innerHTML = `${calculadora_main.somatorio.numeros[calculadora_main.somatorio.numeros.length-1]}`
   calculadora_main.somatorio.numeros[calculadora_main.somatorio.numeros.length-1] = 0
   
}


