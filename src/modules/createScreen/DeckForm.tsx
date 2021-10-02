import React, {Component} from 'react';
import {Deck} from "../../scripts/objects/Deck";
import CardForm from "./CardForm";
import {Icon} from "semantic-ui-react";
import {Card} from "../../scripts/objects/Card";

interface ComponentProps {
    deck: Deck
    deleteDeck?: (deck: Deck) => void
    deleteCard?: (card: Card) => void
    addCard?: (deck: Deck) => void
}

interface ComponentState {
    isOpened: boolean
    name: string
}

export default class DeckForm extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            isOpened: true,
            name: this.props.deck.name
        };

        this.onHandleChange = this.onHandleChange.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<ComponentProps>, prevState: Readonly<ComponentState>, snapshot?: any) {
        if (prevProps.deck !== this.props.deck) {
            this.setState({
                name: this.props.deck.name
            })
        }
    }

    onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        this.props.deck.name = value
        this.setState({
            name: value
        })
    }

    toggleOpen() {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        return <div className={"DeckForm"}>
            <div className={"actions"}>
                <div className={"minimize"}
                     onClick={this.toggleOpen}>
                    <Icon name={this.state.isOpened ? "angle down" : "angle right"}/>
                </div>

                <div className={"spacer"}
                     onClick={this.toggleOpen}>
                    {this.state.isOpened ? undefined : <>{this.props.deck.name}</>}
                </div>

                <div className={"delete"}
                     onClick={() => this.props.deleteDeck?.(this.props.deck)}>
                    <Icon name={"close"}/>
                </div>
            </div>

            {!this.state.isOpened ? undefined : <>
                <div className={"deckInfo"}>
                    <input type={"text"}
                           onChange={this.onHandleChange}
                           value={this.state.name}/>
                </div>

                <div className={"cards"}>
                    {this.props.deck.allCards().map((it, i) =>
                        <CardForm key={i + "_" + it.text}
                                  card={it}
                                  deleteCard={this.props.deleteCard}/>
                    )}

                    <div className={"addCard"}
                         onClick={() => this.props.addCard?.(this.props.deck)}>
                        <Icon name={"add"}/>
                    </div>
                </div>
            </>}
        </div>;
    }
}
