import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import path from "./untils/path";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Home,
  OurAgents,
  Properties,
  PublicLayout,
  Search,
} from "./pages/public";
import { Modal } from "./components";
import { useAppStore } from "./store/useAppStore";
import { useUserStore } from "./store/useUserStore";

function App() {
  const { isShowModal } = useAppStore();
  const { getProFileUser, token, user } = useUserStore();
  useEffect(() => {
    getProFileUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      {isShowModal && <Modal />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT_US} element={<About />} />
          <Route path={path.OUR_AGENTS} element={<OurAgents />} />
          <Route path={path.SEARCH} element={<Search />} />
          <Route path={path.PROPERTIES} element={<Properties />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={1250}
        theme="colored"
      />
    </>
  );
}

export default App;
