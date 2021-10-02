import React, {Component} from 'react';

interface ComponentProps {
    onSubmit?: (e:React.FormEvent) => void
    className?: string
}

interface ComponentState {
}

export default class PassiveForm extends Component<ComponentProps, ComponentState> {
    static defaultProps = {
        className: ""
    }

    constructor(props: ComponentProps) {
        super(props);

        this.state = {};

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (this.props.onSubmit !== undefined && this.props.onSubmit !== null) {
            this.props.onSubmit(e);
        }
    }

    render() {
        return <form className={"PassiveForm "  + this.props.className} onSubmit={this.onSubmit}>
            {this.props.children}
        </form>;
    }
}