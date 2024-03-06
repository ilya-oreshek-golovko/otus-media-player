import {MainSection} from "./style/App.styles";
import { Sidebar } from "./modules";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
        <MainSection>
            <Sidebar />
            <Outlet  />
        </MainSection>
    </>
  )
}

export {
  Home
}
