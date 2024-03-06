import { SidebarButton } from './components';
import { AvatarImg, SidebarSection } from './styles/Sidebar.styles';
import Avatar from "@images/avatar.jpg";
import { SiFacebookgaming } from "react-icons/si";
import { FaFire, FaHeart  } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoLibrary } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import {PathConstants} from "@routing/routes";
import { ISidebarButtons } from './types/types';

function Sidebar() {
    const buttonsProps : ISidebarButtons = {
        "favoriets": {
            title: "Favoriets",
            icon: <FaHeart />,
            route: PathConstants["FAVORIETS"]
        },
        feed: {
            title: "Feed",
            icon: <SiFacebookgaming/>,
            route: PathConstants["FEED"]
        },
        library: {
            title: "Library",
            icon: <IoLibrary/>,
            route: PathConstants["LIBRARY"]
        },
        player: {
            title: "Player",
            icon: <TbPlayerPlayFilled/>,
            route: PathConstants["PLAYER"]
        },
        trending: {
            title: "Trending",
            icon: <FaFire/>,
            route: PathConstants["TRENDING"]
        },
        "sign-out": {
            title: "Sign Out",
            icon: <FaSignOutAlt/>,
            route: ""
        },
    };
    

    return (
        <SidebarSection>
            <AvatarImg srcImg={Avatar}/>
            <div>
                <SidebarButton {...buttonsProps.favoriets}/>
                <SidebarButton {...buttonsProps.feed}/>
                <SidebarButton {...buttonsProps.library}/>
                <SidebarButton {...buttonsProps.player}/>
                <SidebarButton {...buttonsProps.trending}/>
            </div>
            <SidebarButton {...buttonsProps["sign-out"]}/>
        </SidebarSection>
    )
}

export{
    Sidebar
}
