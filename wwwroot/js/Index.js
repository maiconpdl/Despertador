var horas = "";
var minutos = "";
var horaAtual = "";
var minutosAtual = "";
var tocando = false;
var tempoTocando = 0;
var audio = null;
setInterval(function(){
    
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    hora = zero(hora);
    horaAtual = hora;
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    minuto = zero(minuto);
    minutosAtual = minuto;
    segundo = zero(segundo);
    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('horaAtual').textContent = hora+':'+minuto+':'+segundo;
    if((horas == hora)&&(minutos == minuto)){
        if(tocando == false){
            
            tocando = true;
            audio = new Audio('Som1.mp3');
            audio.addEventListener('canplaythrough', function() {
            audio.play();
            tempoTocando = 0;
            });
    }else{
            tempoTocando = tempoTocando + 1;
            
        }

    }else{
        tocando = false;
    }
    if(tempoTocando == 10){
        tocando = false;
        tempoTocando = 0;
    }
    console.log(tempoTocando);
},1000)

// A function zero concatena a string (número) 0 em frente aos números
// mantendo o zero na frente dos números menores que 10. Exemplo:
// 21:05:01
// 21:05:02
// e assim, sucessivamente
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}    

function ligaAlarme(){


}

function controle(){
    var lblHoras = document.getElementById("labelHoras");
    var lblMinutos = document.getElementById("labelMinutos");
    if((lblHoras.textContent == "HORAS")||(lblMinutos.textContent == "MINUTOS")){
        alert("Informe um horário para o alarme!");    
    }else{
        var btn = document.getElementById("btnLigar");
        if(document.getElementById("btnLigar").value == "LIGAR"){
            ligaAlarme();
            document.getElementById("btnLigar").value = "DESLIGAR";
            document.getElementById("btnLigar").classList.remove("btn-success");
            document.getElementById("btnLigar").classList.add("btn-danger");
        }
        else{
            tocando = false;
            horas = "";
            document.getElementById("btnLigar").value = "LIGAR";
            document.getElementById("btnLigar").classList.remove("btn-danger");
            document.getElementById("btnLigar").classList.add("btn-success");
            if(audio != null){
                audio.pause();
            }
        }
    }
    
}

function defineHoras(horaInformada){
    let horaInf = zero(horaInformada);
    document.getElementById("labelHoras").textContent = horaInf;
    horas = horaInf;
}

function defineMinutos(MinutosInformado){
    let minutosInf = zero(MinutosInformado);
    document.getElementById("labelMinutos").textContent = minutosInf;
    minutos = minutosInf;
}
$( document ).ready(function() {
    document.getElementById("btnLigar").classList.add("btn-success");
});

