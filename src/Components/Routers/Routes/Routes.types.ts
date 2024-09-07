import { IconName } from "@fortawesome/fontawesome-svg-core";


export interface MenuItem {
    url: string; // URL will be optional because some items might just toggle children
    pageTitle: string;
    text: string;
    icon: IconName; // Using FontAwesome icons as an example
    children?: MenuItem[];
  }