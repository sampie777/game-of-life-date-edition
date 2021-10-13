import {Deck} from "../objects/Deck";

const localDataKey = "game";

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
    const dataToStore = JSON.stringify(file);
    window.localStorage.setItem(localDataKey, dataToStore);
}

export function loadGameFile(): GameFile | undefined {
    const storedData = window.localStorage.getItem(localDataKey);
    if (storedData === null || storedData === undefined || storedData === "") {
        console.log("No game to load")
        return undefined
    }

    let file: GameFile;
    try {
        file = JSON.parse(storedData);
    } catch (e) {
        console.error("Failed to parse local storage data", e);
        window.localStorage.removeItem(localDataKey);
        return undefined;
    }

    file.decks = file.decks.map(it => Deck.clone(it))
    return file
}
