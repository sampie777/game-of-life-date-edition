import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import './LoadingSplash.sass';

interface ComponentProps {
    isLoading: boolean
    absolutePositioning?: boolean
    text?: string
    title?: string
}

interface ComponentState {
}

export default class LoadingSplash extends Component<ComponentProps, ComponentState> {
    static defaultProps = {
        absolutePositioning: true,
    }

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        if (!this.props.isLoading) {
            return null
        }

        return <div className={"LoadingSplash " + (this.props.absolutePositioning ? "absolute" : "")}>
            <div className={"content"}>
                <Icon loading name="circle notched" title={this.props.title}/>
                <div className={"text"}>
                    {this.props.text}
                </div>
            </div>
        </div>;
    }
}