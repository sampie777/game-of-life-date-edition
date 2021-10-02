import React, {Component} from 'react';
import game from "../../scripts/games/game";
import DeckComponent from "./DeckComponent";
import './style.sass';
import {Deck} from "../../scripts/objects/Deck";
import CardOpenedComponent from "./CardOpenedComponent";
import {Card} from "../../scripts/objects/Card";
import {App} from "../../App";
import {routes} from "../../routes";
import ActionButtons from "./ActionButtons";

interface ComponentProps {
}

interface ComponentState {
    decks: Array<Deck>
    openedCard?: Card
    lastOpenedCard?: Card
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
        this.undo = this.undo.bind(this);
    }

    restartGame() {
        game.restart();
        this.setState({
            decks: game.decks()
        })
    }

    openCard(deck: Deck) {
        const card = deck.take();
        if (card == null) return;

        this.setState({
            openedCard: card,
            lastOpenedCard: card,
        }, () => game.save())
    }

    closeCard() {
        this.setState({
            openedCard: undefined,
        })
    }

    undo() {
        if (this.state.lastOpenedCard === undefined) return;

        this.state.lastOpenedCard.deck?.putBackOnTop(this.state.lastOpenedCard);
        this.setState({
            lastOpenedCard: undefined,
        })
    }

    render() {
        return <div className={"PlayScreen"}>
            <ActionButtons restartGame={this.restartGame}
                           undo={this.state.lastOpenedCard === undefined ? undefined : this.undo}/>

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
