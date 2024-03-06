import { ReactElement } from "react";
import { IconType } from "react-icons";

interface ISidebarButtonProps{
    title : string, 
    icon : ReactElement,//IconType, 
    route: string
}

export type {
    ISidebarButtonProps
}