import { Fragment, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io"; // Importing a menu icon from react-icons
import { DrawerNavProps } from "./SideBar.types";
import { getIconComponent } from "../shared/utils";

function DrawerNav({ routes }: DrawerNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(new Set()); // Tracks expanded menu items
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleNavigate = (url: string) => {
    navigate(url);
    setIsOpen(false);
  };

  const toggleExpand = (url: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(url)) {
      newExpanded.delete(url);
    } else {
      newExpanded.add(url);
    }
    setExpanded(newExpanded);
  };

  return (
    <div className="relative">
      <button onClick={toggleDrawer} className="p-2 text-2xl">
        <IoMdMenu />
      </button>

      <div
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex flex-col">
          {routes.map((route, index) => (
            <Fragment key={index}>
              <button
                className={`flex items-center p-4 text-left text-lg ${
                  route.url === location.pathname
                    ? "border-l-4 border-blue-500"
                    : ""
                }`}
                onClick={() => {
                  handleNavigate(route.url);
                  toggleExpand(route.url);
                }}
              >
                {getIconComponent(route.icon)}{" "}
                <span className="ml-2">{route.text}</span>
              </button>
              {route.children && (
                <div
                  className={`pl-8 ${
                    expanded.has(route.url) ? "block" : "hidden"
                  }`}
                >
                  {route.children.map((child, childIndex) => (
                    <button
                      key={childIndex}
                      className={`flex items-center p-4 text-left text-lg ${
                        child.url === location.pathname
                          ? "border-l-4 border-blue-500"
                          : ""
                      }`}
                      onClick={() => handleNavigate(child.url)}
                    >
                      {getIconComponent(child.icon)}{" "}
                      <span className="ml-2">{child.text}</span>
                    </button>
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default DrawerNav;
