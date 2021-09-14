import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
//
// import useMediaQuery from '@material-ui/core/useMediaQuery';
//
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';

// import { useTranslation } from 'next-i18next';

// import style from './HeaderStyles.module.css';
// import useStyles from './HeaderStyles';

// function Header() {
//   const { t } = useTranslation(['common']);
//   const style = useStyles();
//   const [anchorEl, setAnchorEl] = useState<null | any>(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | any>(null);
//   const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const menuId = 'primary-search-account-menu';
//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const isMatched = useMediaQuery('(min-width:960px)');
//
//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };
//
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );
//
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>{t('messages')}</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>{t('notifications')}</p>
//       </MenuItem>
//       <MenuItem
//         onClick={(event: React.MouseEvent<HTMLElement>): void => {
//           setAnchorEl(event.currentTarget);
//         }}
//       >
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );
//
//   return (
//     <div className={style.headerWrapper}>
//       <AppBar position="static">
//         <Toolbar>
//           {!isMatched && (
//             <>
//               <IconButton
//                 edge="start"
//                 className={style.menuButton}
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={() => setIsMenuOpened(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer anchor="left" open={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
//                 <div
//                   role="presentation"
//                   onClick={() => setIsMenuOpened(false)}
//                   onKeyDown={() => setIsMenuOpened(false)}
//                 >
//                   <List>
//                     {['News'].map((text) => (
//                       <ListItem button key={text}>
//                         <ListItemIcon>
//                           <MailIcon />
//                         </ListItemIcon>
//                         <ListItemText primary={text} />
//                       </ListItem>
//                     ))}
//                   </List>
//                   <Divider />
//                   <List>
//                     {['Support'].map((text) => (
//                       <ListItem button key={text}>
//                         <ListItemIcon>
//                           <InboxIcon />
//                         </ListItemIcon>
//                         <ListItemText primary={text} />
//                       </ListItem>
//                     ))}
//                   </List>
//                 </div>
//               </Drawer>
//             </>
//           )}
//           <Typography className={style.title} variant="h6" noWrap>
//             Gyratifel
//           </Typography>
//           {isMatched && (
//             <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
//               {['News', 'Some', 'Support', 'Games'].map((text) => (
//                 <ListItem button key={text}>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>
//           )}
//           <div className={style.grow} />
//           <div className={style.sectionDesktop}>
//             <IconButton aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="secondary">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton aria-label="show 17 new notifications" color="inherit">
//               <Badge badgeContent={17} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               color="inherit"
//               onClick={(event: React.MouseEvent<HTMLElement>): void => {
//                 setAnchorEl(event.currentTarget);
//               }}
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//           <div className={style.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={(event: React.MouseEvent<HTMLElement>): void => {
//                 setMobileMoreAnchorEl(event.currentTarget);
//               }}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }

const Header = () => <div>Header</div>;

export default Header;
