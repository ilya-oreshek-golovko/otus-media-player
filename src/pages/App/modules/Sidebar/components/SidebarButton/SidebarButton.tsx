import { Link } from "react-router-dom"
import { ISidebarButtonProps } from "../types/types"
import { ButtonContainer, ButtonTitle } from "./SidebarButton.styles";

function SidebarButton({title, icon, route} : ISidebarButtonProps) {
  return (
    <Link to={route}>
      <ButtonContainer>
        {icon}
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonContainer>
    </Link>
  )
}

export{
    SidebarButton
}
