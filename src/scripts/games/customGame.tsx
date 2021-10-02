import game, {GameInterface} from "./game";
import {Deck} from "../objects/Deck";

export class CustomGame implements GameInterface {
    private decks: Array<Deck> = [];

    constructor(decks: Array<Deck> = []) {
        this.decks = decks
    }

    start() {
        game.clear();
        game.setGame(this);
        this.decks.forEach(it => it.shuffle());
        this.decks.forEach(it => game.addDeck(it));
    }
}
