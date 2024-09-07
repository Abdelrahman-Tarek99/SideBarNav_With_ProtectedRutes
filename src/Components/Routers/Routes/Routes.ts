import { MenuItem } from "./Routes.types";

export const Routes: MenuItem[] = [
  {
    url: "/",
    pageTitle: "Home",
    text: "Home",
    icon: "home",
  },
  {
    url: "/about",
    pageTitle: "About",
    text: "About",
    icon: "info-circle",
  },
  {
    url: "/contact",
    pageTitle: "Contact",
    text: "Contact",
    icon: "envelope",
  },
  {
    url: "/blog",
    pageTitle: "Blog",
    text: "Blog",
    icon: "newspaper",
    children: [
      {
        pageTitle: "Blog Reels",
        text: "Reels",
        icon: "film",
        url: "/blog/reels",
      },
      {
        pageTitle: "Blog Posts",
        text: "Posts",
        icon: "file-alt",
        url: "/blog/posts",
      },
    ],
  },
];
