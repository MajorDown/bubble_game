// CREATION DE LA CONSTANTE AFFICHANT LE COMPTEUR
const counterDisplay = document.querySelector('h3')
// CREATION DE LA VARIABLE STOCKANT LE COMPTEUR
let counter = 0;
// CREATION DE LA FONCTION CREANT LES BULLES
const bubbleMaker = () => {
    // CREATION DE L'ELEMENT <span> DANS LA CONSTANTE BUBBLE
    const bubble = document.createElement("span");
    // AJOUT DE LA CLASSE BUBBLE A LA CONSTANTE BUBBLE
    bubble.classList.add("bubble");
    // AJOUT DU CONTENU DE LA CONSTANTE BUBBLE DANS LE BODY (<span id ="bubble">)
    document.body.appendChild(bubble);
    // CREATION DE LA CONSTANTE SIZE RENVOYANT UN NOMBRE ALEATOIRE
    const size = Math.random()*200 + 100 + "px";
    // INTEGRATION DE LA CONSTANTE SIZE DANS LE STYLE DE BUBBLE 
    bubble.style.height = size;
    bubble.style.width = size;
    // UTILISATION DE NOMBRE ALEATOIRE DANS LE STYLE DE BUBBLE
    bubble.style.top = Math.random()*100 + 50 + "%";
    bubble.style.left = Math.random()*100 + "%";
    // GENERATION DE LA DIRECTION ALEATOIRE DES BULLES
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random()*100*plusMinus + "%");
    // SI ON CLICK SUR UN ELEMENT BUBBLE :
    bubble.addEventListener("click", () => {
        // LE COMPTEUR AUGMENTE DE 1
        counter++;
        // L'AFFICHE DU COMPTEUR SE MET A JOUR 
        counterDisplay.textContent = counter;
        // L'ELEMENT BUBBLE DISPARAIT
        bubble.remove();
    })
    // DEFINITION DE LA DUREE DE LA BULLE : DISPARAIT EN (X) MILLISECONDE
    setTimeout( () => {
        bubble.remove();
    }, 8000);
};
// APPEL A INTERVAL REGULIER LA FONCTION BUBBLEMAKER : EN MILLISECONDE
setInterval(bubbleMaker, 1000);
