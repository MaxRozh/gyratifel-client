import React from 'react';
// import Favorite from '@material-ui/icons/Favorite';

// import classNames from 'classnames';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Link from 'next/link';

// import classes from './FooterStyles.module.css';

// import { useTranslation } from 'next-i18next';

// const footerMenuList = [
//   { title: 'About us', link: '/about-us' },
//   { title: 'Term Of Use', link: '/term-of-use' },
//   { title: 'Contacts', link: '/contacts' }
// ];

// function Footer() {
//   // const { t } = useTranslation(['common']);
//
//   return (
//     <footer className={classes.root}>
//       <Grid container spacing={0} className={classNames(classes.footerText, classes.footerSections)}>
//         <Grid item xs={12} sm={4}>
//           <div>
//             <div property="address" typeof="PostalAddress">
//               <span property="addressLocality" style={{ display: 'block' }}>
//                 Ukraine, Kiev{' '}
//               </span>
//               <span property="postalCode">43952</span>
//             </div>
//             <span property="telephone">(000) 000-0000</span>
//           </div>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <ul style={{ listStyle: 'none', margin: 0 }}>
//             {footerMenuList.map((item) => (
//               <li key={item.title}>
//                 <Link href={item.link}>
//                   <a className={classes.white} style={{ fontWeight: 400 }}>
//                     {item.title}
//                   </a>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Grid>
//       </Grid>
//       <Grid className={classes.subFooter} item xs={12}>
//         <Typography className={classes.white} variant="subtitle2" component="span">
//           &copy; {new Date().getFullYear()} , made with <Favorite /> by{' '}
//           <a href="https://github.com/MaxRozh" target="_blank" rel="noreferrer">
//             Maxim Rozhaev
//           </a>
//         </Typography>
//       </Grid>
//     </footer>
//   );
// }

const Footer = () => <div>Footer</div>;

export default Footer;
