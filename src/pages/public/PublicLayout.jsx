import React from "react";
import { Navigation, TopHeader } from "~/components";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <main>
      <TopHeader />
      <Navigation />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default PublicLayout;
