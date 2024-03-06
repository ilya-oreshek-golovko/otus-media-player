import { RouteObject } from "react-router-dom"
import { IPathConstants } from "@shared/interfaces"
import {Favoriets} from "@favoriets/index";
import {Feed} from "@feed/index";
import {Library} from "@library/index";
import {Player} from "@player/index";
import {Trending} from "@trending/index";
import { App } from "../App";


const PathConstants : IPathConstants = {
    "FAVORIETS": "favoriets",
    "FEED": "feed",
    "LIBRARY": "library",
    "PLAYER": "player",
    "TRENDING": "trending",
    "APP" : "/"
}

const routes : Array<RouteObject> = [
    {
        path: PathConstants["APP"],
        element: <App />,
        children: [
            {element: <Library />, index: true},
            {path: PathConstants["FAVORIETS"], element: <Favoriets />},
            {path: PathConstants["FEED"], element: <Feed />},
            {path: PathConstants["PLAYER"], element: <Player />},
            {path: PathConstants["TRENDING"], element: <Trending />},
        ]
    }
];


export {
    routes,
    PathConstants
}