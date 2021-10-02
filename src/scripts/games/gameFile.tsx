import {Deck} from "../objects/Deck";
import {getCookie, setCookie} from "../cookies";

export interface GameFile {
    decks: Array<Deck>
}

export function saveGameFile(file: GameFile) {
    // Clone decks and cards because we're going to modify them
    const decks = file.decks.map(it => Deck.clone(it))

    // Remove deck assignment from cards to prevent loops when JSON stringifying
    decks.forEach(deck =>
        deck.allCards().forEach(card => card.deck = undefined))

    file.decks = decks;
    setCookie("game", JSON.stringify(file), 30);
}

export function loadGameFile(): GameFile | undefined {
    const cookie = getCookie("game");
    if (cookie === null || cookie === undefined || cookie === "") {
        console.log("No game to load")
        return undefined
    }
    const file: GameFile = JSON.parse(cookie);

    file.decks = file.decks.map(it => Deck.clone(it))
    return file
}
