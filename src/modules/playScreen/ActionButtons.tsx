import React, {Component} from 'react';
import {App} from "../../App";
import {routes} from "../../routes";
import {Icon} from "semantic-ui-react";
import game from "../../scripts/games/game";

interface ComponentProps {
    restartGame: () => void
    undo?: () => void
}

interface ComponentState {
}

export default class ActionButtons extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        return <div className={"ActionButtons"}>
            <button onClick={() => App.getInstance().setView(routes.HomePage)}
                    title={"Main menu"}>
                <Icon name={"sign-out"} flipped={"horizontally"} size={"large"}/>
            </button>

            <button onClick={this.props.undo}
                    disabled={this.props.undo === undefined}
                    title={"Undo last action"}>
                <Icon name={"undo alternate"} size={"large"}/>
            </button>

            <button onClick={() => App.getInstance().setView(routes.CreateScreen)}
                    title={"Edit cards"}>
                <Icon name={"pencil"} size={"large"}/>
            </button>

            {game.getGame() === undefined ? undefined :
                <button onClick={this.props.restartGame}
                        title={"Restart game"}>
                    <Icon name={"sync alternate"} size={"large"}/>
                </button>}
        </div>;
    }
}
