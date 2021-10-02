import React, {Component} from 'react';
import MenuButton from "./MenuButton";
import {routes} from "../../routes";
import './style.sass';
import {Icon} from "semantic-ui-react";
import {GameOfLife} from "../../scripts/games/gameOfLife";
import {loadGameFile} from "../../scripts/games/gameFile";
import {CustomGame} from "../../scripts/games/customGame";

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
        const loadedGameFile = loadGameFile();

        return <div className={"MainMenu"}>
            <div className={"header"}>
                <Icon name={"puzzle"}/>
                Pick a game
            </div>
            <div className={"buttons"}>
                {loadedGameFile === undefined ? undefined :
                    <MenuButton text={"Continue previous game"}
                                className={"loadGame"}
                                game={new CustomGame(loadedGameFile.decks)}
                                redirect={routes.PlayScreen}/>}

                <MenuButton text={"Game of Life"}
                            game={new GameOfLife()}
                            redirect={routes.PlayScreen}/>

                <MenuButton text={"Create a new game"}
                            className={"createGame"}
                            game={new CustomGame()}
                            redirect={routes.CreateScreen}/>
            </div>
        </div>;
    }
}
