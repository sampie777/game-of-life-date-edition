import React, {Component} from 'react';
import {View} from "../../scripts/objects/Views";
import {App} from "../../App";
import {GameInterface} from "../../scripts/games/game";

interface ComponentProps {
    text: string
    game: GameInterface
    className?: string
    redirect?: View
    params?: any
}

interface ComponentState {
}

export default class MenuButton extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.game.start();

        if (this.props.redirect === undefined) return
        App.getInstance().setView(this.props.redirect, this.props.params)
    }

    render() {
        return <div className={"MenuButton " + (this.props.className || "")}
                    onClick={this.onClick}>
            {this.props.text}
        </div>;
    }
}
