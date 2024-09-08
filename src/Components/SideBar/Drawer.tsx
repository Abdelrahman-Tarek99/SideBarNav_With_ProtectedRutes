import { Fragment, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io"; // Importing a menu icon from react-icons
import { DrawerNavProps } from "./SideBar.types";
import { getIconComponent } from "../shared/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../UI/Accordion/accordion";

function DrawerNav({ routes }: DrawerNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleNavigate = (url: string, hasChildren = false) => {
    if (!hasChildren) {
      // Prevent navigation if there are children to show in the accordion
      navigate(url);
    }
    // Optionally toggle drawer or expand logic here if needed
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
              {route.children ? (
                <Accordion
                  type="single"
                  collapsible
                  className="
                flex items-center justify-start pl-6 text-left text-lg
                "
                >
                  <AccordionItem value={route.url}>
                    <AccordionTrigger>
                      {getIconComponent(route.icon)}{" "}
                      <span className="ml-2">{route.text}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {route.children.map((child, childIndex) => (
                        <button
                          key={childIndex}
                          className={`flex items-center justify-start p-4 pl-6 text-left text-lg ${
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <button
                  className={`flex items-center p-4 text-left text-lg ${
                    route.url === location.pathname
                      ? "border-l-4 border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleNavigate(route.url)}
                >
                  {getIconComponent(route.icon)}{" "}
                  <span className="ml-2">{route.text}</span>
                </button>
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
