import React, {Component} from 'react';
import {Card} from "../../scripts/objects/Card";
import {Icon} from "semantic-ui-react";

interface ComponentProps {
    card: Card
    deleteCard?: (card: Card) => void
}

interface ComponentState {
    text: string
}

export default class CardForm extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            text: this.props.card.text
        };

        this.onHandleChange = this.onHandleChange.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<ComponentProps>, prevState: Readonly<ComponentState>, snapshot?: any) {
        if (prevProps.card !== this.props.card) {
            this.setState({
                text: this.props.card.text
            })
        }
    }

    onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        this.props.card.text = value;
        this.setState({
            text: value
        })
    }

    render() {
        return <div className={"CardForm"}>
            <div className={"delete"}
                 onClick={() => this.props.deleteCard?.(this.props.card)}>
                <Icon name={"close"}/>
            </div>
            <input type={"text"}
                   onChange={this.onHandleChange}
                   value={this.state.text}/>
        </div>;
    }
}
