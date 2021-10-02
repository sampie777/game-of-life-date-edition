import React, {Component} from 'react';
import {Deck} from "../../scripts/objects/Deck";

interface ComponentProps {
    deck: Deck
    onClick: () => void
    offset: number
    totalCards: number
}

interface ComponentState {
}

export default class CardComponent extends Component<ComponentProps, ComponentState> {
    cardOffsetMultiplier = 10;

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        let cardOffsetMultiplier = Math.min(this.cardOffsetMultiplier, 30 / this.props.totalCards);
        return <div className={"CardComponent"}
                    style={{
                        top: this.props.offset * cardOffsetMultiplier + (Math.random() - 0.5) * 5 + "px",
                        left: (Math.random() - 0.5) * 4 +"%"
                    }}
                    onClick={this.props.onClick}>
            <div className={"inner1"}>
                <div className={"text"}>
                    {this.props.deck.name}
                </div>
            </div>
        </div>;
    }
}
