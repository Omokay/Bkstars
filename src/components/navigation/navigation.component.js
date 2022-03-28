import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar';
import {makeStyles} from "@mui/styles";
import {NavLink} from "react-router-dom";
import {Images} from "../../constants/index.constant";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const drawerWidth = 270;

export default function Navigation(props, children) {
    const classes = useStyles();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {/*<Divider />*/}
            <List component="nav"
                  aria-labelledby="nested-list-subheader">
            <NavLink className={classes.navlink} style={{textDecoration: 'none',}}  to='/episodes' >
                <div className={classes.gradient}/>
                <ListItem button>
                    <ListItemIcon><div className={classes.nav_dash} /></ListItemIcon>
                    <ListItemText primary='Episodes' className={classes.navText} />
                </ListItem>
            </NavLink>

                <NavLink className={classes.navlink} style={{textDecoration: 'none',}}  to='/characters' >
                    <div className={classes.gradient}/>
                    <ListItem  button>
                        <ListItemIcon><div className={classes.nav_users}/></ListItemIcon>
                        <ListItemText primary='Characters' className={classes.navText} />
                    </ListItem>
                </NavLink>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}

            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        {/* Should hold the  nav brand */}
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            {/*     Insert Name and date filter here */}
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },

                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },

                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* MAIN BODY STARTS HERE*/}
            <main className={classes.content}>
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            </main>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        a: {
            textDecoration: 'none',
        },
    },
    gradient: {
        width: '40px',
        height: '50px',
        position: 'absolute',
        left: 0,
    },

    content: {
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        padding: '0',
        background: '#EFEFEF',

    },
    navlink: {
        width: '250px',
        height: 'auto',
        textDecoration: 'none',
        color: '#ccc',
        transition: '0.5s ease',

        '&:hover': {
            '& $navText': {
                color: '#FFC947',
                fontSize: '20px',
                fontWeight: 'bold',
            },
            '& $gradient': {
                backgroundImage: 'linear-gradient(to right, #FFC947 , #ffffff)',
                opacity: '0.4',
            },

            '& $nav_dash': {
                backgroundImage: `url(${Images.DashActive})`,
            },

            '& $nav_users': {
                backgroundImage: `url(${Images.Users_Active})`,
            },
        },
    },


    activeLink: {
        color: '#FFC947',
        fontSize: '50px',
    },

    listItem: {
        borderColor: '#000',
    },


    navText: {
        color: '#0A1931',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        transition: '0.5s ease',


    },
    nav_dash: {
        width: '18px',
        height: '18px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Images.Dash})`,
    },
    nav_users: {
        width: '18px',
        height: '18px',
        backgroundSize: 'contain',
        backgroundImage: `url(${Images.Users})`,
        backgroundRepeat: 'no-repeat',
    },
}));

