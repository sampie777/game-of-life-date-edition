import {Deck} from "../objects/Deck";
import {GameFile, saveGameFile} from "./gameFile";

export interface GameInterface {
    start: () => void
}

class Game {
    private _decks: Array<Deck> = [];
    private _game?: GameInterface;

    addDeck(deck: Deck) {
        this._decks.push(deck);
    }

    decks() {
        return this._decks;
    }

    clear() {
        this._decks = [];
        this._game = undefined;
    }

    setGame(game: GameInterface) {
        this._game = game;
    }

    getGame() {
        return this._game;
    }

    restart() {
        if (this._game === undefined) {
            return;
        }

        this._game.start();
    }

    save() {
        const file: GameFile = {
            decks: this.decks(),
        };

        try {
            saveGameFile(file);
        } catch (e) {
            console.error("Failed to save game file", e);
        }
    }

    load(file: GameFile) {
        this.clear()
        file.decks.forEach(it => this.addDeck(it))
    }
}

const game = new Game();
export default game;
