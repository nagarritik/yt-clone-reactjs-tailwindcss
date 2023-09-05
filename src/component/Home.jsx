import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Offline from "./Offline";
import useOnline from "../hooks/useOnline";

function Home() {
  const isOnline = useOnline()
  return !isOnline?<Offline/>:(
    <div>
      <Header />
      <div className="flex">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  );
}

export default Home;
