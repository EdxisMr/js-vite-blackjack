
/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>} deck 
 * @returns {String} retorna una carta 
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error( 'No hay cartas en el deck' )
    }

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

