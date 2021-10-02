import React, {Component} from 'react';

interface ComponentProps {
}

interface ComponentState {
}

export default class NotFoundPage extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        return <div className={"NotFoundPage"}>
            <h2>What you requested was not found</h2>
        </div>;
    }
}
