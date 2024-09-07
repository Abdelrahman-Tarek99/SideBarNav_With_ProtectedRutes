export interface MenuItem {
  url: string;
  pageTitle: string;
  text: string;
  icon: string;
  children?: MenuItem[];
}
