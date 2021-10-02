import game, {GameInterface} from "./game";
import {Deck} from "../objects/Deck";
import {Card} from "../objects/Card";

export class GameOfLife implements GameInterface {
    start() {
        const kleineActies = new Deck("Kleine acties");
        kleineActies.add(new Card("Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1"))
        kleineActies.add(new Card("Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2"))
        for(let i = 0; i < 1; i++) {
            kleineActies.add(new Card("Kleine actie no. 3"));
        }

        kleineActies.shuffle();

        const groteActies = new Deck("Grote acties");
        groteActies.add(new Card("Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1Kleine actie no. 1"))
        groteActies.add(new Card("Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2Kleine actie no. 2"))
        for(let i = 0; i < 10; i++) {
            groteActies.add(new Card("Kleine actie no. 3"));
        }

        groteActies.shuffle();

        game.clear();
        game.setGame(this);
        game.addDeck(kleineActies);
        game.addDeck(groteActies);
    }
}
