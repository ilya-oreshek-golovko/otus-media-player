import { RouteObject } from "react-router-dom"
import { IPathConstants } from "@shared/interfaces"
import {Favoriets} from "@favoriets/index";
import {Feed} from "@feed/index";
import {Library} from "@library/index";
import {Player} from "@player/index";
import {Trending} from "@trending/index";
import { Home } from "@home/index";


const PathConstants : IPathConstants = {
    "FAVORIETS": "/favoriets",
    "FEED": "/feed",
    "LIBRARY": "/",
    "PLAYER": "/player",
    "TRENDING": "/trending",
    "HOME" : "/"
}

const routes : Array<RouteObject> = [
    {
        path: PathConstants["HOME"],
        element: <Home />,
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