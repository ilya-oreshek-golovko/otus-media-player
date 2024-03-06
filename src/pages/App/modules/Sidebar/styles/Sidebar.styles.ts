import styled from "styled-components";
import AvatarDefault from "@images/avatar-default.png";

const SidebarSection = styled.section`
    grid-column-start: 1;
    grid-column-end: 2;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;
const AvatarImg = styled.img.attrs<{srcImg? : any}>(props => ({
    src: props.srcImg || AvatarDefault
}))`
    width: 60px;
    height: 60px;
    object-fit: fill;
    border-radius: 50%;
`;

export{
    SidebarSection,
    AvatarImg
}