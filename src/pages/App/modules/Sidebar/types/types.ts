import { ISidebarButtonProps } from "../components/types/types"
//type TSidebarButtons = "favoriets" | "feed" | "library" | "player" |  "trending";

interface ISidebarButtons{
    [key : string] : ISidebarButtonProps
}

export type{
    ISidebarButtons
}