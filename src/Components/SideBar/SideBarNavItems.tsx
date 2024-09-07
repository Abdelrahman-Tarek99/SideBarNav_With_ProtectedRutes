import { Outlet } from "react-router-dom";
import DrawerNav from "./Drawer";
import { Routes } from "../../Components/Routers/Routes/Routes";

export const SideBarNavItems = () => {
  return (
    <>
      <DrawerNav  routes={Routes}/>
      <Outlet />
    </>
  );
};
