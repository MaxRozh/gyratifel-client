type ProfileMenuItemType = {
  name: string;
  href: string;
};

export const profileMenu: Array<ProfileMenuItemType> = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/profile/settings' },
  { name: 'Sign out', href: '/sign-out' }
];
