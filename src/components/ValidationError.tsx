import React, {Component} from 'react';
import "./validation.sass";
import {Validation} from "../scripts/validation";

interface ComponentProps {
    validation?: Validation
    fieldName: string
}

interface ComponentState {
}

export default class ValidationError extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        if (this.props.validation === undefined) {
            return null;
        }

        let results = this.props.validation.results[this.props.fieldName];
        if (results === undefined || results.length === 0) {
            return null;
        }

        return <div className={"ValidationError"}>
            {results.map(it => <p key={it}>{it}</p>)}
        </div>;
    }
}
