import React, {Component} from 'react';
import {Card} from "../../scripts/objects/Card";

interface ComponentProps {
    card: Card
    onCloseCard: () => void
}

interface ComponentState {
}

export default class CardOpenedComponent extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        return <div className={"CardOpenedComponent"}>
            <div className={"container"}>
                <div className={"title"}>
                    {this.props.card.deck?.name}
                </div>
                <div className={"textContainer"}>
                    <div className={"text"}>{this.props.card.text}</div>
                </div>

                <div className={"buttons"}>
                    <button className={"closeButton"}
                            onClick={this.props.onCloseCard}>
                        Close
                    </button>
                </div>
            </div>
        </div>;
    }
}
