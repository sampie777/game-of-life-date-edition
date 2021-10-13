import React, {Component} from 'react';
import {App} from "../../App";
import {routes} from "../../routes";
import {Icon} from "semantic-ui-react";

interface ComponentProps {
    reset: () => void
    onSave: () => void
}

interface ComponentState {
}

export default class ActionButtons extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    onBackPress() {
        App.getInstance().setView(routes.PlayScreen, undefined, true)
    }

    render() {
        return <div className={"ActionButtons"}>
            <button onClick={this.onBackPress}
                    title={"Go back"}>
                <Icon name={"sign-out"} flipped={"horizontally"} size={"large"}/>
            </button>

            <button onClick={this.props.reset}
                    title={"Reset all"}>
                <Icon name={"sync alternate"} size={"large"}/>
            </button>

            <button onClick={this.props.onSave}
                    title={"Save"}>
                <Icon name={"save"} size={"large"}/>
            </button>
        </div>;
    }
}
