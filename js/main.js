/**
 * Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
 * In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non  può inserire più volte lo stesso numero.
 * Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
 * La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 * Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 * BONUS:
All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2=> tra 1 e 50
*/



var button1 = document.getElementById('facile');

var button2 = document.getElementById('medio');

var button3 = document.getElementById('difficile');


button1.addEventListener('click', 
    function() {
       play("facile");
    }//fine btn
) 

button2.addEventListener('click', 
    function() {
      play("medio");
    }
) 

button3.addEventListener('click', 
    function() {
      play("difficile");
    }
) 



function play (difficoltà){
 
 
console.log(difficoltà);
//console.log("2 chek superato");


switch (difficoltà){
  case "facile":
    var max = 100;
    console.log("Facile funziona");
  break;

   case "medio":
    var max = 80;
    console.log("m funziona");
  break;

  case "difficile":
    var max = 50;
    console.log("d funziona");
  break; 

}


var mine = randomNumbers(1, max);
//console.log(mine);

var gameOver = false;
var contatore = 0;
var numeriUtente = [];

var differenza = max - mine.length;


while(!gameOver){

  var sceltaUtente = parseInt(prompt("Modalita di gioco " + difficoltà + "\nInserisci un numero compreso tra 1 e " + max));
  
  while(isNaN(sceltaUtente) || (sceltaUtente == 0) || (sceltaUtente > max ) ||( numeriUtente.includes(sceltaUtente))){
    sceltaUtente = parseInt(prompt("Modalita di gioco " + difficoltà + "\nHai già inserito questo numero oppure il numero non è valido inserisci un numero compresa tra 1 e " + max)); 
  }
 

  if(mine.includes(sceltaUtente)){
    gameOver = true;
    alert("Mi dispiace hai perso");
    console.log("hai giocatore per " + contatore + " volte");
    console.log("il numero che hai inserito " + sceltaUtente + " è un numero bomba ");
    console.log("I numeri bomba sono : " + mine)
    console.log("copia questo link https://bit.ly/2Xf2wrC");
  } else {
    contatore += 1;
    numeriUtente.push(sceltaUtente);
  }

  if(numeriUtente.length == differenza){
    gameOver = true;
    alert("Complimenti hai vinto");
    console.log("Complimenti hai vinto");
    console.log("Hai inserito " + contatore + " numeri senza sbagliare");
  }

}

}


function randomNumbers(min , max) {
var output = [];
var appoggio = 0;
for (var i = 0; i < 16; i++) {

appoggio = Math.floor(Math.random() * (100 - min) )+ min ;

while(output.includes(appoggio)){
appoggio = Math.floor(Math.random() * (100 - min) )+ min ;
}

output.push(appoggio);
}

return output;
}



function nomeCompleto ( word){
if (word == "f"){
word = "facile";
} else if (word== "m"){
word = "media";
} else if (word == "d"){
word = "difficile";
} 

return word;

}












































/* var difficoltà = prompt("Scegli il livello di difficoltà \nFacile o F\nMedio o M\nDifficile o D").trim().toLowerCase();


while(!isNaN(difficoltà) || (difficoltà != "facile" && difficoltà != "f" ) && (difficoltà != "medio" && difficoltà != "m") && (difficoltà != "difficile" && difficoltà != "d")){

  difficoltà = prompt("Scegli il livello di difficoltà \nFacile\nMedio\nDifficile").trim().toLowerCase();
}  




//difficoltà = nomeCompleto(difficoltà);
//console.log(difficoltà);
//console.log("2 chek superato");



var difficoltà = gameplay(difficoltà);

switch (difficoltà){
  case "facile":
    var max = 100;
    //console.log("Facile funziona");
  break;

   case "medio":
    var max = 80;
    //console.log("m funziona");
  break;

  case "difficile":
    var max = 50;
    //console.log("d funziona");
  break; 

}


var mine = randomNumbers(1, max);
//console.log(mine);

var gameOver = false;
var contatore = 0;
var numeriUtente = [];

var differenza = max - mine.length;


while(!gameOver){

  var sceltaUtente = parseInt(prompt("Modalita di gioco " + difficoltà + "\nInserisci un numero compreso tra 1 e " + max));
  
  while(isNaN(sceltaUtente) || (sceltaUtente == 0) || (sceltaUtente > max ) ||( numeriUtente.includes(sceltaUtente))){
    sceltaUtente = parseInt(prompt("Modalita di gioco " + difficoltà + "\nHai già inserito questo numero oppure il numero non è valido inserisci un numero compresa tra 1 e " + max)); 
  }
 

  if(mine.includes(sceltaUtente)){
    gameOver = true;
    alert("Mi dispiace hai perso");
    console.log("hai giocatore per " + contatore + " volte");
    console.log("il numero che hai inserito " + sceltaUtente + " è un numero bomba ");
    console.log("I numeri bomba sono : " + mine)
    console.log("copia questo link https://bit.ly/2Xf2wrC");
  } else {
    contatore += 1;
    numeriUtente.push(sceltaUtente);
  }

  if(numeriUtente.length == differenza){
    gameOver = true;
    alert("Complimenti hai vinto");
    console.log("Complimenti hai vinto");
    console.log("Hai inserito " + contatore + " numeri senza sbagliare");
  }

}


function randomNumbers(min , max) {
  var output = [];
  var appoggio = 0;
  for (var i = 0; i < 16; i++) {

    appoggio = Math.floor(Math.random() * (max - min) )+ min ;

    while(output.includes(appoggio)){
      appoggio = Math.floor(Math.random() * (max - min) )+ min ;
    }
     
    output.push(appoggio);
  }

  return output;
}



function nomeCompleto ( word){
  if (word == "f"){
    word = "facile";
  } else if (word== "m"){
    word = "media";
  } else if (word == "d"){
    word = "difficile";
  } 

  return word;

}

function gameplay(choise){
  
}

var button1 = document.getElementById('facile');

var button2 = document.getElementById('medio');




button1.addEventListener('click', 
    function() {
        difficoltà = "Facile";
        
    }
    
) 

button2.addEventListener('click', 
    function() {
        gameplay("medio")
    }
)  */