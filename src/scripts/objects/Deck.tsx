import {Card} from "./Card";
import {shuffleArray} from "../../utils";

export class Deck {
    private _cards: Array<Card> = [];
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    add(card: Card) {
        card.deck = this;
        this._cards.push(card);
    }

    remove(card: Card) {
        card.deck = undefined;
        this._cards.splice(this._cards.indexOf(card), 1);
    }

    shuffle() {
        this._cards.forEach(it => it.isPlayed = false);
        shuffleArray(this._cards);
    }

    allCards() {
        return this._cards;
    }

    cards() {
        return this._cards.filter(it => !it.isPlayed);
    }

    playedCards() {
        return this._cards.filter(it => it.isPlayed);
    }

    cardsLeft(): number {
        return this.cards().length;
    }

    haveCardsLeft(): boolean {
        return this.cardsLeft() > 0;
    }

    take(): Card | null {
        if (!this.haveCardsLeft()) {
            return null;
        }

        const card = this.cards()[0];
        card.isPlayed = true;
        return card;
    }

    putBackOnTop(card: Card) {
        card.isPlayed = false;
    }

    static clone(from: Deck): Deck {
        const deck = new Deck(from.name);
        from._cards.forEach(it => deck.add(Card.clone(it)))
        return deck;
    }
}
