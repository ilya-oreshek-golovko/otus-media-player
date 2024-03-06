import {MainSection} from "./style/App.styles";
import {GlobalStyle} from "@/styles/global.styles";
import { Sidebar } from "./modules";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
        <GlobalStyle />
        <MainSection>
            <Sidebar />
            <Outlet  />
        </MainSection>
    </>
  )
}

export {
    App
}
