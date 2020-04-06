/**
 * Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
 * In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non  può inserire più volte lo stesso numero.
 * Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
 * La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 * Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/




var mine = randomNumbers(1, 100);
console.log(mine);



var gameOver = false;
var contatore = 0;
var numeriUtente = [];




while(!gameOver){

  var sceltaUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
  
  while(isNaN(sceltaUtente) || sceltaUtente == 0 || sceltaUtente > 100 || numeriUtente.includes(sceltaUtente)){
    sceltaUtente = parseInt(prompt("Hai già inserito questo numero oppure il numero non è valido inserisci un numero compresa tra 1 e 100"));
  }
 

  if(mine.includes(sceltaUtente)){
    gameOver = true;
    alert("Mi dispiace hai perso")
    console.log("hai giocatore per " + contatore + " volte")
    console.log("il numero che hai inserito " + sceltaUtente + " è un numero bomba ")
  } else {
    contatore += 1;
    numeriUtente.push(sceltaUtente);
  }

  if(numeriUtente.length == 84){//qui dovrà andare la differenza cooming soon
    gameOver = true;
    alert("Complimenti hai vinto")
    console.log("Hai inserito " + contatore + " numeri senza sbagliare")
  }

}


function randomNumbers(max, min) {
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
