import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar/>
        <MainContent/>
      </div>
    </>
  );
}

export default Home;
