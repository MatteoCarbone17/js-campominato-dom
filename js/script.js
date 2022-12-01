/*Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/




const gridContainer = document.querySelector('section.grid');

const button = document.querySelector('a.btn-primary');

button.addEventListener('click', function () {
   
    for (let i = 1; i < 100; i++) {

        gridContainer.innerHTML='';

        const newSquare = getElementNewSquare(); 

        newSquare.innerHTML = '<span class="m-auto">'  + i + '</span>';
        
        gridContainer.appendChild(newSquare);  
    }
    


});




//funzione che crea il quadrato

function getElementNewSquare() {
    
    const newSquare = document.createElement('div');

    newSquare.classList.add('square');

    newSquare.addEventListener("click", function() {
        console.warn("hai cliccato");
        newSquare.classList.toggle('active');
    })

    return newSquare;

}