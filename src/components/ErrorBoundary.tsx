import React, {Component} from 'react';
import './ErrorBoundary.sass';

interface ComponentProps {
}

interface ComponentState {
    error: Error | null,
    errorInfo: React.ErrorInfo | null,
}

export default class ErrorBoundary extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null,
        };

        this.reset = this.reset.bind(this);
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Caught ErrorBoundary error", error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    reset() {
        this.setState({
            error: null,
            errorInfo: null,
        })
    }

    render() {
        if (!this.state.errorInfo) {
            return this.props.children;
        }

        return <div className={"ErrorBoundary"}>
            <h1>Whoops, something went wrong</h1>
            <div className={"deathFace"}>X_x</div>

            <details style={{whiteSpace: 'pre-wrap'}}>
                <div className={"errorName"}>{this.state.error && this.state.error.toString()}</div>

                <div className={"code"}>
                    {this.state.errorInfo.componentStack
                        .trim()
                        .split('\n')
                        .map((it, i) =>
                            <div key={i} className={"line"}>
                                <span className={"lineIndex"}>{i + 1}</span>
                                {it}
                            </div>)}
                </div>
            </details>
        </div>;
    }
}
