import {Card} from "./Card";

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

    shuffle(amount: number = 3) {
        this._cards.forEach(it => it.isPlayed = false);

        for (let i = 0; i < amount; i++) {
            this._cards = this._cards.sort(() => Math.random() - 0.5);
        }
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
}
