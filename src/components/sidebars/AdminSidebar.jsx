import clsx from "clsx";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { adminSidebar } from "~/untils/constant";
import { FaCaretDown, FaCaretLeft, FaCaretRight } from "react-icons/fa";

const AdminSidebar = () => {
  const [activeTabs, setActiveTabs] = useState([]);

  const handleActiveTab = (tabId) => {
    if (activeTabs.some((item) => item === tabId))
      setActiveTabs((prev) => prev.filter((item) => item !== tabId));
    else {
      setActiveTabs((prev) => [...prev, tabId]);
    }
  };

  console.log({ activeTabs });

  return (
    <div className=" w-full h-screen">
      <div className="w-full p-4 flex flex-col items-center gap-4">
        <img src="/logo1.png" alt="logo" className="3/5 object-contain" />
        <span className="text-red-100 italic">Admin workspace</span>
      </div>
      <div className="mt-6">
        {adminSidebar.map((item) => (
          <Fragment key={item.id}>
            {item.type === "SINGLE" && (
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-2 px-4 py-3 hover:bg-primary-700 hover:border-r-4 border-orange-700",
                    isActive && "bg-primary-700 border-r-4"
                  )
                }
                to={item.path}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            )}

            {item.type === "PARENT" && (
              <>
                <div
                  onClick={() => handleActiveTab(item.id)}
                  className="flex px-4 py-3 items-center justify-between cursor-pointer hover:bg-primary-700"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  {activeTabs.length ? (
                    <FaCaretDown size={20} />
                  ) : (
                    <FaCaretRight size={20} />
                  )}
                </div>
                <div>
                  {activeTabs.some((tabId) => tabId === item.id) && (
                    <div className="transition-all duration-300">
                      {item?.subsMenu.map((sub) => (
                        <NavLink
                          key={sub?.id}
                          className={({ isActive }) =>
                            clsx(
                              "flex items-center gap-2 px-4 py-3 hover:bg-primary-700 hover:border-r-4 border-orange-700",
                              isActive && "bg-primary-700 border-r-4"
                            )
                          }
                          to={sub.path}
                        >
                          <span className="text-2xl">{sub.icon}</span>
                          <span>{sub.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
