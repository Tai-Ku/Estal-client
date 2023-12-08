import React from "react";
import { Navigation, TopHeader } from "~/components";
import { Outlet } from "react-router-dom";
import withRouter from "~/hocs/withRouter";
import clsx from "clsx";

const PublicLayout = ({ location }) => {
  console.log({ location });
  return (
    <main>
      <TopHeader />
      <Navigation />
      <div className={clsx(location.pathname === "/" ? "pt-0" : "pt-[232px]")}>
        <Outlet />
      </div>
    </main>
  );
};

export default withRouter(PublicLayout);
