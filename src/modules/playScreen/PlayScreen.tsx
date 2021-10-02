import React, {Component} from 'react';
import game from "../../scripts/games/game";
import DeckComponent from "./DeckComponent";
import './style.sass';
import {Deck} from "../../scripts/objects/Deck";
import CardOpenedComponent from "./CardOpenedComponent";
import {Card} from "../../scripts/objects/Card";
import {App} from "../../App";
import {routes} from "../../routes";

interface ComponentProps {
}

interface ComponentState {
    decks: Array<Deck>
    openedCard?: Card
}

export default class PlayScreen extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        if (game.getGame() === undefined) {
            App.getInstance().setView(routes.HomePage);
        }

        this.state = {
            decks: game.decks()
        };

        this.restartGame = this.restartGame.bind(this);
        this.openCard = this.openCard.bind(this);
        this.closeCard = this.closeCard.bind(this);
    }

    restartGame() {
        game.restart();
        this.setState({
            decks: game.decks()
        })
    }

    openCard(card: Card) {
        this.setState({
            openedCard: card,
        }, () => game.save())
    }

    closeCard() {
        this.setState({
            openedCard: undefined,
        })
    }

    render() {
        return <div className={"PlayScreen"}>
            <div className={"header"}>
                {game.getGame() === undefined ? undefined :
                    <button onClick={this.restartGame}>Restart</button>}
                <button onClick={() => App.getInstance().setView(routes.HomePage)}>New game</button>
            </div>

            <div className={"cards"}>
                {game.decks().flatMap((it, i) =>
                    <DeckComponent key={i + "_" + it.cardsLeft()}
                                   deck={it}
                                   onOpenCard={this.openCard}/>)}
            </div>

            {this.state.openedCard === undefined ? undefined :
                <CardOpenedComponent card={this.state.openedCard}
                                     onCloseCard={this.closeCard}/>}
        </div>;
    }
}
