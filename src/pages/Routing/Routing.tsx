import { routes } from "@/pages/Routing/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const Routing = () => {

  const router = createBrowserRouter(routes,{
    basename: "/",
  });

  return (
    <RouterProvider router={router}/>
  )
}
