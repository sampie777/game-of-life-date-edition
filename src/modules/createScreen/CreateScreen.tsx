import React, {Component} from 'react';
import './style.sass';
import ActionButtons from "./ActionButtons";
import {Deck} from "../../scripts/objects/Deck";
import game from "../../scripts/games/game";
import DeckForm from "./DeckForm";
import {Card} from "../../scripts/objects/Card";
import {Icon} from "semantic-ui-react";
import {CustomGame} from "../../scripts/games/customGame";
import {App} from "../../App";
import {routes} from "../../routes";

interface ComponentProps {
}

interface ComponentState {
    decks: Array<Deck>
}

export default class CreateScreen extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            decks: game.decks().map(it => Deck.clone(it))
        };

        this.reset = this.reset.bind(this);
        this.deleteDeck = this.deleteDeck.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.addCard = this.addCard.bind(this);
        this.addDeck = this.addDeck.bind(this);
        this.cleanUpCards = this.cleanUpCards.bind(this);
        this.save = this.save.bind(this);
    }

    deleteDeck(deck: Deck) {
        this.setState({
            decks: this.state.decks.filter(it => it !== deck)
        })
    }

    deleteCard(card: Card) {
        card.deck?.remove(card);
        this.setState({
            decks: this.state.decks
        })
    }

    addCard(deck: Deck) {
        deck.add(new Card(""))
        this.setState({
            decks: this.state.decks
        })
    }

    addDeck() {
        this.setState({
            decks: this.state.decks.concat([new Deck("")])
        })
    }

    reset() {
        this.setState({
            decks: game.decks().map(it => Deck.clone(it))
        })
    }

    cleanUpCards(callback?: () => void) {
        const decks = this.state.decks;

        // Remove all empty cards from the decks
        decks.forEach(deck =>
            deck.allCards()
                .filter(card => card.text.trim() === "")
                .forEach(card => deck.remove(card)))

        // Remove all empty decks
        this.setState({
            decks: decks.filter(it => it.allCards().length > 0)
        }, callback);
    }

    save() {
        this.cleanUpCards(() => {
            const customGame = new CustomGame(this.state.decks);
            customGame.start();
            game.save();
            App.getInstance().setView(routes.PlayScreen);
        });
    }

    render() {
        return <div className={"CreateScreen"}>
            <ActionButtons reset={this.reset}
                           onSave={this.save}/>

            <div className={"container"}>
                {this.state.decks.map((it, i) =>
                    <DeckForm key={i + "_" + it.name}
                              deck={it}
                              deleteDeck={this.deleteDeck}
                              deleteCard={this.deleteCard}
                              addCard={this.addCard}/>)}

                <div className={"addDeck"}
                     onClick={this.addDeck}>
                    <Icon name={"add"}/>
                </div>
            </div>
        </div>;
    }
}
