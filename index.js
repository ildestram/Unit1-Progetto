function changeBg(){
    let orange = document.getElementById('navbar');
    let scrollValue = window.scrollY;
    if(scrollValue < 420){
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
    
}

window.addEventListener('scroll', changeBg);

// CI SONO RIUSCITA!!!!!!!!
// spiegazione:
// ho utilizzato una funzione che ho chiamato changeBg
// dentro la funzione ho dichiarato una variabile locale let chiamata orange
// ho richiamato con getElementById il tag html header a cui aveva assegnato un id navbar
// ho dichiarato poi un'altra variabile locale a cui ho assegnato il movimento dello scroll sull'asse verticale
// ho usato un if else
// se il valore dello scroll è minore di 420 allora mi elimini (remove) bgColor
// bgColor è una classe che ho usato solo nel css a cui ho assegnato un background-color bianco
// altrimenti mi aggiungi il background-color bianco

// prima di fare questo però ho controllato con console.log quando valeva lo scrollValue
// ho notato che in pratica in questo modo ad ogni scroll che facevo con il mouse in console venivano generati dei numeri sempre maggiori
// CLASSLIST = vado a cambiare degli elementi del css. A seguito di un determinato evento con classList io posso modificare una proprietà css
