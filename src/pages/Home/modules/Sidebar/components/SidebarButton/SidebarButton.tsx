import { Link, useLocation } from "react-router-dom"
import { ISidebarButtonProps } from "@/types/interfaces"
import { ButtonContainer, ButtonTitle } from "./SidebarButton.styles";

function SidebarButton({title, icon, route} : ISidebarButtonProps) {

  const location = useLocation();
  console.log(title);
  console.log(location.pathname == route);

  return (
    <Link to={route}>
      <ButtonContainer isActive={location.pathname == route}>
        {icon}
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonContainer>
    </Link>
  )
}

export{
    SidebarButton
}
