import React, {Component} from 'react';
import {App} from "../../App";
import {routes} from "../../routes";
import {Icon} from "semantic-ui-react";
import game from "../../scripts/games/game";
import ConfirmationPopup, {ConfirmationPopupProps} from "../../components/ConfirmationPopup";

interface ComponentProps {
    restartGame: () => void
    undo?: () => void
}

interface ComponentState {
    popup?: ConfirmationPopupProps
}

export default class ActionButtons extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};

        this.onRestartClick = this.onRestartClick.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    onHomePress() {
        App.getInstance().setView(routes.HomePage, undefined, true)
    }

    onRestartClick() {
        this.setState({
            popup: {
                message: "Do you really want to restart the game?",
                title: "Restart game",
                onDeny: this.closePopup,
                denyText: "Nooo",
                onConfirm: () => {
                    this.closePopup();
                    this.props.restartGame();
                },
                confirmText: "Yes!",
                confirmInverted: false,
            }
        })
    }

    closePopup() {
        this.setState({
            popup: undefined
        });
    }

    render() {
        return <div className={"ActionButtons"}>
            {this.state.popup === undefined ? undefined :
                <ConfirmationPopup {...this.state.popup} />
            }

            <button onClick={this.onHomePress}
                    title={"Main menu"}>
                <Icon name={"home"} flipped={"horizontally"} size={"large"}/>
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
                <button onClick={this.onRestartClick}
                        title={"Restart game"}>
                    <Icon name={"sync alternate"} size={"large"}/>
                </button>}
        </div>;
    }
}
