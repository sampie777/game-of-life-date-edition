import game, {GameInterface} from "./game";
import {Deck} from "../objects/Deck";
import {Card} from "../objects/Card";
import data from "../../assets/games/gameOfLifeDateEdition.json";

export class GameOfLife implements GameInterface {
    start() {
        game.clear();
        game.setGame(this);

        Object.entries(data).forEach(([name, cards]) => {
            const deck = new Deck(name);
            cards.forEach((card) => deck.add(new Card(card)));
            deck.shuffle();
            game.addDeck(deck);
        });
    }
}
