import { routes } from "@/pages/Routing/routes";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

export const Routing = () => {

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  )
}
