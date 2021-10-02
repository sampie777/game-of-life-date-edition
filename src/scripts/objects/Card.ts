import {Deck} from "./Deck";

export class Card {
    text: string;
    isPlayed = false;
    deck?: Deck;

    constructor(text: string) {
        this.text = text;
    }

    static clone(from: Card): Card {
        const card = new Card(from.text)
        card.isPlayed = from.isPlayed
        card.deck = from.deck
        return card
    }
}
