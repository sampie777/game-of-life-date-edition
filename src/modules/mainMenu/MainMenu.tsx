import React, {Component} from 'react';
import MenuButton from "./MenuButton";
import {routes} from "../../routes";
import './style.sass';
import {Icon} from "semantic-ui-react";
import {GameOfLife} from "../../scripts/games/gameOfLife";

interface ComponentProps {
}

interface ComponentState {
}

export default class MainMenu extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        return <div className={"MainMenu"}>
            <div className={"header"}>
                <Icon name={"puzzle"}/>
                Pick a game
            </div>
            <div className={"buttons"}>
                <MenuButton text={"Game of Life"}
                            game={new GameOfLife()}
                            redirect={routes.PlayScreen}/>
            </div>
        </div>;
    }
}
