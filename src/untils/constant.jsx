import path from "./path";
import { RiDashboardFill } from "react-icons/ri";
import { IoCreate } from "react-icons/io5";
export const navigations = [
  {
    id: 1,
    text: "HOME",
    path: "/",
  },
  {
    id: 2,
    text: "ABOUT US",
    path: `${path.ABOUT_US}`,
  },
  {
    id: 3,
    text: "OUR AGENTS",
    path: `${path.OUR_AGENTS}`,
  },
  {
    id: 4,
    text: "PROPERTIES",
    path: `${path.PROPERTIES}`,
  },
  {
    id: 5,
    text: "SEARCH",
    path: `${path.SEARCH}`,
  },
];

export const adminSidebar = [
  {
    id: 12,
    name: "Dashboard",
    path: `/${path.ADMIN_LAYOUT}/${path.DASHBOARD}`,
    icon: <RiDashboardFill />,
    type: "SINGLE",
  },
  {
    id: 13,
    name: "Property",
    path: `${path.ADMIN_LAYOUT}/${path.PROPERTIES}`,
    icon: <IoCreate />,
    type: "PARENT",
    subsMenu: [
      {
        id: 14,
        path: `/${path.ADMIN_LAYOUT}/${path.CREATE_PROPERTY_TYPE}`,
        name: "Create new",
      },
      {
        id: 15,
        path: `/${path.ADMIN_LAYOUT}/${path.MANAGE_PROPERTY_TYPE}`,
        name: "Manage",
      },
    ],
  },
];
