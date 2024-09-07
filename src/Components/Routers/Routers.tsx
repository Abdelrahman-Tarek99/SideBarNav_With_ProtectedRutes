import { Home } from "../../Screens/Home/Home";
import { About } from "../../Screens/About/About";
import { Contact } from "../../Screens/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { SideBarNavItems } from "../SideBar/SideBarNavItems";
import { BlogReels } from "../../Screens/Blogs/BlogReels/BlogReels";
import { BlogPosts } from "../../Screens/Blogs/BlogPosts/BlogPosts";
import { Blog } from "../../Screens/Blogs/Blog";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <SideBarNavItems />,
    children: [
      {
        path: AppRouter.home,
        element: <Home />,
        index: true,
      },
      {
        path: AppRouter.about,
        element: <About />,
        errorElement: <div>404</div>,
      },
      {
        path: AppRouter.contact,
        element: <Contact />,
        errorElement: <div>404</div>,
      },
      {
        path: AppRouter.blog,
        element: <Blog />,
        errorElement: <div>404</div>,
        children: [
          {
              index: true,
              element: <BlogReels />,
              errorElement: <div>404</div>,
          },
          {
            index: true,
            path: AppRouter.reels,
            element: <BlogReels />,
            errorElement: <div>404</div>,
          },
          {
            path: AppRouter.blogPosts,
            element: <BlogPosts />,
            errorElement: <div>404</div>,
          },
        ],
      },
    ],
  },
]);
