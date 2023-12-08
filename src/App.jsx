import React from "react";
import { Route, Routes } from "react-router-dom";
import path from "./untils/path";
import {
  About,
  Home,
  OurAgents,
  Properties,
  PublicLayout,
  Search,
} from "./pages/public";

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT_US} element={<About />} />
          <Route path={path.OUR_AGENTS} element={<OurAgents />} />
          <Route path={path.SEARCH} element={<Search />} />
          <Route path={path.PROPERTIES} element={<Properties />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
