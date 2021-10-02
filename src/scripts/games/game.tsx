import {Deck} from "../objects/Deck";

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
}

const game = new Game();
export default game;
