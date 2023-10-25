import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Offline from "./Offline";
import useOnline from "../hooks/useOnline";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Video from "./Video";

const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:<MainContent/>
  },
  {
    path:"/video/:id",
    element:<Video/>
  }
])

function Home() {
  const isOnline = useOnline()
  return !isOnline?<Offline/>:(
    <div>
      <Header />
      <div className="flex">
        <Sidebar/>
        <RouterProvider router={appRoutes}/>
      </div>
    </div>
  );
}

export default Home;
