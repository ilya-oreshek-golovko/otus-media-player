import { ReactElement } from "react";
import { IconType } from "react-icons";

interface ISidebarButtonProps{
    title : string, 
    icon : ReactElement,//IconType, 
    route: string
}
interface ISidebarButtons{
    [key : string] : ISidebarButtonProps
}

export type {
    ISidebarButtonProps, ISidebarButtons
}