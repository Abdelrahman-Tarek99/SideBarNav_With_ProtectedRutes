import { MenuItem } from "./Routes.types";

export const Routes: MenuItem[] = [
  {
    url: "/",
    pageTitle: "Home",
    text: "Home",
    icon: "FaHome",
  },
  {
    url: "/about",
    pageTitle: "About",
    text: "About",
    icon: "FaInfoCircle",
  },
  {
    url: "/contact",
    pageTitle: "Contact",
    text: "Contact",
    icon: "FaEnvelope",
  },
  {
    url: "/blog",
    pageTitle: "Blog",
    text: "Blog",
    icon: "FaNewspaper",
    children: [
      {
        pageTitle: "Blog Reels",
        text: "Reels",
        icon: "FaFilm",
        url: "/blog/reels",
      },
      {
        pageTitle: "Blog Posts",
        text: "Posts",
        icon: "FaFileAlt",
        url: "/blog/posts",
      },
    ],
  },
];
