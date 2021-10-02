import React, {Component, Suspense} from 'react';
import ErrorBoundary from "./components/ErrorBoundary";
import {View} from "./scripts/objects/Views";
import {createUrl, routes} from "./routes";
import {Route, RouteProps, Switch, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import LoadingSplash from "./components/LoadingSplash";
import './App.sass';

interface ComponentProps extends RouteComponentProps {
}

interface ComponentState extends RouteProps {
}

export class App extends Component<ComponentProps, ComponentState> {
    private readonly errorBoundary: React.RefObject<ErrorBoundary>;
    private _isMounted: boolean;
    private static _instance: App;

    static getInstance() {
        return App._instance;
    }

    constructor(props: ComponentProps) {
        super(props);
        this._isMounted = false;
        App._instance = this;

        this.errorBoundary = React.createRef();

        this.state = {};

        this.getViewFromUrl = this.getViewFromUrl.bind(this);
        this.setView = this.setView.bind(this);
        this.SetupForCurrentView = this.SetupForCurrentView.bind(this);

    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    private getViewFromUrl() {
        const path = this.props.location.pathname;
        return Object.values(routes).find(it => it.url === path)
    }

    setView(view: View, params?: Object) {
        this.setUrl(createUrl(view, params));
    }

    setUrl(url?: string) {
        if (url === undefined) {
            console.error("Cannot set App url to undefined");
            return;
        }

        this.props.history.push(url)
        this.errorBoundary.current?.reset()
    }

    private setDocumentTitle(view: View) {
        document.title = "Game of Life - Date edition";
        if (view.title) {
            document.title = `${view.title} - ${document.title}`;
        }
    }

    private SetupForCurrentView() {
        return <Switch>
            {Object.values(routes)
                .map(view =>
                    <Route path={view.url}
                           key={view.url}
                           exact={view.exactPath}
                           render={() => {
                               this.setDocumentTitle(view);
                               return null
                           }}/>)}
        </Switch>
    }

    render() {
        return <div className={"App"}>
            <this.SetupForCurrentView/>

            <div className={"wrapper"}>
                <ErrorBoundary ref={this.errorBoundary}>
                    <Suspense fallback={<LoadingSplash isLoading={true}
                                                       text={"Loading page..."}
                                                       title={"Loading content..."}/>}>
                        <div className={'content'}>
                            <Switch>
                                {Object.values(routes)
                                    .map(view =>
                                        <Route exact={view.exactPath}
                                               key={view.url}
                                               path={view.url}
                                               component={view.component}
                                               render={view.render}/>
                                    )}
                            </Switch>
                        </div>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>;
    }
}

export default withRouter(App);
