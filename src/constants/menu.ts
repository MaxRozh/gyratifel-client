export type MenuItemType = {
  name: string;
  href: string;
};

export const MENU_LIST: Array<MenuItemType> = [
  { name: 'news', href: '/news' },
  { name: 'support', href: '/support' }
];
