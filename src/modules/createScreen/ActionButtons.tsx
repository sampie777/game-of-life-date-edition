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

    render() {
        return <div className={"ActionButtons"}>
            <button onClick={() => App.getInstance().setView(routes.PlayScreen)}
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
