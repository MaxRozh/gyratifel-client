import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    flexGrow: 1,
    height: '4.06rem'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: '1rem'
  },
  title: {
    marginRight: '1rem'
  },
  inputRoot: {
    color: 'inherit'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
