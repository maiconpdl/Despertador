"use strict";

let linha = 1;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

document.form_main.start.onclick = () => start();
document.form_main.volta.onclick = () => volta();


function start() {
    let tipo = document.getElementById('btnParar').textContent;
    if(tipo == "Zerar"){
        document.getElementById('btnParar').textContent = "Parar";
    }
  clearInterval(cron);
  cron = setInterval(() => { timer(); }, 10);
}

function volta() {
    if(linha == 1){
        criaTabela();
    }

    table.className = "table tableVolta";
    table.id = "tableVolta";
    thead.id = "theadVolta";
    tbody.id = "tbodyVolta";

    
    
    let volta = document.createElement('tr');
    volta.id = "volta";
    let linhaVolta = document.createElement('td');
    linhaVolta.innerHTML = linha;
    let linhaTempo = document.createElement('td');
    linhaTempo.innerHTML = returnData(hour) + ':' + returnData(minute) + ':' + returnData(second) + ':' + returnData(millisecond);
    

    volta.appendChild(linhaVolta);
    volta.appendChild(linhaTempo);
    
    tbody.appendChild(volta);

    linha = linha + 1;    
}

function criaTabela(){
    
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('divTable').appendChild(table);

    let linha1 = document.createElement('tr');
    let titulo1 = document.createElement('th');
    titulo1.innerHTML = "Volta";
    titulo1.scope = "col";
    let titulo2 = document.createElement('th');
    titulo2.innerHTML = "Tempo";
    titulo2.scope = "col";

    linha1.appendChild(titulo1);
    linha1.appendChild(titulo2);
    thead.appendChild(linha1);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
  var tabela = document.getElementById('tableVolta');
  var tHeadVolta = document.getElementById('theadVolta');
  var tBodyVolta = document.getElementById('tbodyVolta');
  var linhas = document.getElementById('volta');
  linhas.parentNode.removeChild(tr);
  tBodyVolta.parentNode.removeChild(tbody);
  tHeadVolta.parentNode.removeChild(thead);
  tabela.parentNode.removeChild(table);

  linha = 1;
}

function timer() {
  if ((millisecond += 16) >= 1010) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

function pararZerar(){
    clearInterval(cron);
    let tipo = document.getElementById('btnParar').textContent;
    if((tipo == "Parar") && (millisecond != 0)){
        document.getElementById('btnParar').textContent = "Zerar";
    }else{
        reset();
    }
}