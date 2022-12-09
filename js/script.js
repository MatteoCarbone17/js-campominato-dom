/*Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

Attenzione: Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/




const gridContainer = document.querySelector('section.grid');

const button = document.querySelector('a.start-game');


const container = [];

const bombsList=[];


let points = 0; 

function getRandomNumber(numMin,numMax) {

  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin );

}

function getRandomUniqueNumber(blackList ,min , max ) {
    let numberValid = false ; 
    let randomNum ;

    while (numberValid === false) {
        randomNum = getRandomNumber(min , max);

        if ( !blackList.includes(randomNum)) {
            numberValid = true;
            
        }
        return randomNum
    }
}

function writeScore( elementId , content ){
    document.getElementById(elementId).innerText= content ; 
}




button.addEventListener('click', function () {



    gridContainer.innerHTML='';

    let isGameValid = true

    for (let i = 0; i < 16; i++) {
        
        bombsList.push( getRandomUniqueNumber( bombsList , 0 , 100 ));
        
    }

    for (let i = 0; i <= 100 ; i++){
    
        randomIndex = getRandomNumber( 0 , 100);
    
        container.push(randomIndex);
    }
    

   
    for (let i = 1; i <= 100; i++) {
        

        const newSquare = document.createElement('div');

        newSquare.classList.add('square' , 'd-flex');

        newSquare.addEventListener("click", function() {
        
        if (isGameValid){
            if (bombsList.includes(i)) {
            isGameValid = false;
            newSquare.classList.add('bg-red');
            writeScore( 'user-points' , 'Partita terminata , punteggio ragiunto: ' + points )
            alert ('BOOOMM');
            console.warn("Game over. Riavvia!");
            points = 0 ; 
        } else {
            points++;
            writeScore( 'user-points' , 'Punteggio : ' + points )
            console.log(points);
            newSquare.classList.toggle('active');
        }
        } else {
           alert('Partita terminata , avvia una nuova sessione')
        }
            
        
        
    })

        newSquare.innerHTML = '<span class="fs-3 m-auto">'  + container[i] + '</span>';
        
        gridContainer.appendChild(newSquare);  
    }

    

console.log(container)
console.log(bombsList)

});






