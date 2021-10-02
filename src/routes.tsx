import {View, ViewList} from "./scripts/objects/Views";
import React from "react";

export const MainMenu = React.lazy(() => import("./modules/mainMenu/MainMenu"));
export const PlayScreen = React.lazy(() => import("./modules/playScreen/PlayScreen"));
export const CreateScreen = React.lazy(() => import("./modules/createScreen/CreateScreen"));

export const routes = {
    HomePage: new View({
        url: "/",
        icon: "home",
        exactPath: true,
        showInMenu: false,
        needsAuthentication: false,
        component: MainMenu,
    }),
    PlayScreen: new View({
        url: "/play",
        icon: "puzzle",
        exactPath: true,
        showInMenu: false,
        needsAuthentication: false,
        component: PlayScreen,
    }),
    CreateScreen: new View({
        url: "/create",
        icon: "setting",
        exactPath: true,
        showInMenu: false,
        needsAuthentication: false,
        component: CreateScreen,
    }),
};

function generateFullPaths(routes: ViewList, basePath: string) {
    Object.values(routes).forEach(view => {
        view.fullPath = basePath + view.url;
        generateFullPaths(view.views, view.fullPath);
    })
}

generateFullPaths(routes, "");

export function createUrl(view: View, params?: Object): string | undefined {
    if (params === undefined) {
        return view.fullPath;
    }

    let parsedUrl = view.fullPath;
    Object.entries(params).forEach(([key, value]) => {
        const regex = new RegExp(":" + key + "(\\W|$)", "g");
        parsedUrl = parsedUrl.replaceAll(regex, value + "$1")
    })
    return parsedUrl;
}
