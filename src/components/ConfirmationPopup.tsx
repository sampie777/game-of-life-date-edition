import React, {Component} from 'react';
import './ConfirmationPopup.sass';

export interface ConfirmationPopupProps {
    message: string
    title?: string
    onDeny?: () => void
    denyText?: string
    onConfirm?: () => void
    confirmText?: string
    confirmInverted?: boolean
}

interface ComponentState {
}

export default class ConfirmationPopup extends Component<ConfirmationPopupProps, ComponentState> {
    render() {
        return <div className={"ConfirmationPopup"}>
            <div className={"Popup"}>
                <div className={"content"}>
                    <div className={"title"}>
                        {this.props.title}
                    </div>
                    <div className={"message"}>
                        {this.props.message}
                    </div>
                </div>

                <div className={"buttons"}>
                    {this.props.onDeny === undefined ? undefined :
                        <button className={"deny"}
                                onClick={this.props.onDeny}>
                            {this.props.denyText || "Close"}
                        </button>
                    }
                    {this.props.onConfirm === undefined ? undefined :
                        <button className={"confirm " + (this.props.confirmInverted ? "inverted" : "")}
                                onClick={this.props.onConfirm}>
                            {this.props.confirmText || "Okay"}
                        </button>
                    }
                </div>
            </div>
        </div>;
    }
}
