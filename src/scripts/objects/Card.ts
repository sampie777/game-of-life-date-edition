import {Deck} from "./Deck";

export class Card {
    text: string;
    isPlayed = false;
    deck?: Deck;

    constructor(text: string) {
        this.text = text;
    }
}
