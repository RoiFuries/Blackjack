// 2c = two f clubs (Tréboles)
// 2D = two f Diamonds (diamantes)
// 2H = two f hearts (corazones)
// 2H = two f spades (espadas)

let deck = [];
const tipos = ['C', 'D', 'H','S']
const especiales = ['A','J','Q','K']


const crearDeck = () => {

    for( let i = 2; i <=10; i ++){
        for(let tipo of tipos){
        deck.push(i + tipo)

        }
    }

    for( let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo)

        }
    }

    // console.warn('deck  ordenado:' + deck)
    deck = _.shuffle(deck)
    console.log(deck)

}
crearDeck()

// esta funcion me permite tomar una carta


const pedirCarta = () => {

    if(deck.length === 0){
        throw 'no hay cartas en  el deck'
    }
    const carta = deck.pop()

    console.log(deck)
    console.log(carta)

    return carta
}

// pedirCarta()

const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length -1)
    // console.log(valor)
    // let puntos = 0;

    return ( isNaN (valor)) ? 
            (valor === 'A') ? 11 : 10
            : parseInt(valor)
}
//     if(isNaN(valor)){

//         puntos = ( valor === 'A') ? 11 : 10;
//     }else{
//         console.log('es un numero')
//         puntos = parseInt(valor)

//     }
//     console.log(puntos)

// }

const valor = valorCarta(pedirCarta())
console.log({valor})

