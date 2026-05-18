let numeroSecreto = Math.floor(Math.random() * 100);

function verificar(){

    let valor = document.getElementById("numero").value

    if(valor == numeroSecreto){

    document.getElementById("mensagem").İnnerText = "Você acertou!"; 
    document.body.style.setProperty("background-color", "green");
    
    }

    else if(valor < numeroSecreto){
    
        document.getElementById("mensagem").innerText = "O número é maior";
        document.body.style.setProperty("background-color", "red") ;
    }

    else{

    document.getElementById ("mensagem").innerText = "O número é menor"; 
    document.body.style.setProperty("background-color", "red");






    }
}