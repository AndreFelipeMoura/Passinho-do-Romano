// limpar.addEventListener("click", function () {
//     var textArea = document.getElementById("texto");
//     textArea.value = "";
//   }, false);




// var incremento = document.querySelector('#incremento')

var criptografar = document.getElementById("criptografar")
criptografar.addEventListener("click", start);

// var select = document.querySelector("#select")
// select.addEventListener("change" , start)

// var resposta = document.getElementById('resposta')
// resposta.addEventListener("click" , start)

var incremento = document.querySelector('#incremento')

function start(event) {
    event.preventDefault();
    var select = document.querySelector("#select")
select.addEventListener("change" , start)

    var decod = document.querySelector('#botaoDecod')
    var cod = document.querySelector('#botaoCod')
    var mensagem = document.getElementById('texto').value
    var resposta = document.getElementById('resposta').value
    var passo = document.querySelector('#passo')

    if (select.selectedIndex == 1 ) {
        passo.innerHTML = `<label for="incremento"> Digite o incremento para a Cifra de Cesar:</label>
        <input type="number" id="incremento">`;

        if ( cod.checked == true) {
            // Codificar(mensagem , chave)
        } else {
            // Decodificar(mensagem , chave)

        }
    } else if (select.selectedIndex == 2 ){
        if ( cod.checked == true) {

            var retornoB = btoa(mensagem)
            document.getElementById('resposta').value = retornoB
        } if ( decod.checked == true) {
            var retornoA = atob(resposta)
            document.getElementById('resposta2').value = retornoA
        }
        // } else {
        //     alert('defina')
        // }
        

    }
        
}

function cifraDeCesar() {

    var texto = document.querySelector('#texto').value
    var incremento = document.querySelector('#incremento').value

    if (incremento > 25 && incremento != 26){
        var novoIncremento = incremento % 26;
    } else if (incremento == 26){
        novoIncremento = 1;
    }
    else{
        novoIncremento = incremento;
    }


    var arrLetras = []
    for (var i = 0; i < texto.length ; i++){

        var codigoLetra = texto.charCodeAt(i)
        var somaIncremento = codigoLetra + parseInt(novoIncremento)

        if (codigoLetra >= 97 && codigoLetra <= 122){
            
                
                // desenvolver lógica aqui se não o push não vai funcionar
            
        }
        
        arrLetras.push(somaIncremento)
    }

}




    







  
  

