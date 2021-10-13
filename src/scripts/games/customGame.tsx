import game, {GameInterface} from "./game";
import {Deck} from "../objects/Deck";

export class CustomGame implements GameInterface {
    private decks: Array<Deck> = [];
    private restart: boolean = true;

    constructor(decks: Array<Deck> = [], restart = true) {
        this.decks = decks
        this.restart = restart
    }

    start() {
        game.clear();
        game.setGame(this);
        if (this.restart) {
            this.decks.forEach(it => it.shuffle());
        }
        this.restart = true;

        this.decks.forEach(it => game.addDeck(it));
    }
}
