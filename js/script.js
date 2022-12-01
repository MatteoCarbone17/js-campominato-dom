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

const button = document.querySelector('a.btn-primary');


const container = [];

let bombs = 0;



function getElementNewSquare() {
    
    const newSquare = document.createElement('div');

    newSquare.classList.add('square');

    newSquare.addEventListener("click", function() {


        console.warn("hai cliccato");
        newSquare.classList.toggle('active');
    })

    return newSquare;

}

function getRandomNumber(numMin,numMax) {

  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin );

}
 

button.addEventListener('click', function () {


    gridContainer.innerHTML='';

    for (let i = 1; i <= 86 ; i++){
    
        randomIndex = getRandomNumber( 1 , 100);
    
        container.push(randomIndex);
    
    }

    while (container.length < 100) {
       
        bombs = getRandomNumber( 1 , 100);
    
    if (!container.includes(bombs)) {
       container.push(bombs); 
        
    }};

   
    for (let i = 1; i <= 100; i++) {

        const newSquare = getElementNewSquare(); 

        newSquare.innerHTML = '<span class="m-auto">'  + container[i] + '</span>';
        
        gridContainer.appendChild(newSquare);  
    }

    

console.log(container)

});






