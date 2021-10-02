import React, {Component} from 'react';
import {Deck} from "../../scripts/objects/Deck";
import CardComponent from "./CardComponent";

interface ComponentProps {
    deck: Deck
    onOpenCard: (deck: Deck) => void
}

interface ComponentState {
}

export default class DeckComponent extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};

        this.openCard = this.openCard.bind(this);
    }

    openCard() {
        this.props.onOpenCard(this.props.deck);
    }

    render() {
        return <div className={"DeckComponent"}>
            {this.props.deck.haveCardsLeft() ? undefined :
                <div className={"emptyPlaceholder"}/>}

            {this.props.deck.cards().map((card, i) =>
                <CardComponent key={i}
                               onClick={this.openCard}
                               deck={this.props.deck}
                               offset={i}
                               totalCards={this.props.deck.cardsLeft()}/>)}
        </div>;
    }
}
