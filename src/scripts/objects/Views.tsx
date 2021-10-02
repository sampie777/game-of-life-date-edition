import {ReactNode} from "react";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";
import * as React from "react";
import {RouteComponentProps} from "react-router";

export interface ViewList {
    [Key: string]: View
}

interface ViewProps {
    url: string
    title?: string
    icon?: SemanticICONS
    showInMenu?: boolean
    exactPath?: boolean
    render?: (props: RouteComponentProps<any>) => ReactNode
    component?: React.ComponentType<any>
    needsAuthentication?: boolean
    views?: any
}

export class View {
    url: string
    title?: string
    icon: SemanticICONS | string
    showInMenu: boolean
    exactPath: boolean
    render?: ((props: RouteComponentProps<any>) => ReactNode)
    component?: React.ComponentType<any>
    needsAuthentication: boolean
    views: any
    fullPath: string = ""

    constructor(props: ViewProps) {
        this.url = props.url
        this.title = props.title
        this.icon = props.icon || ""
        this.showInMenu = props.showInMenu !== undefined ? props.showInMenu : true
        this.exactPath = props.exactPath !== undefined ? props.exactPath : false
        this.render = props.render
        this.component = props.component
        this.needsAuthentication = props.needsAuthentication !== undefined ? props.needsAuthentication : false
        this.views = props.views || {}
    }
}
