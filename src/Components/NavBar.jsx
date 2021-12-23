import React from 'react';
import '../assets/css/navBar.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useLayoutEffect, useState, useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);
function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function ButtonAppBar() {
    const classes = useStyles();
    const width = useWindowSize();
    const [Open, setOpen] = useState(false);
    // console.log(width)
    return (
        <>
            <div className={classes.root}>
                <AppBar className="top-header">
                    <Toolbar className='container-lg'>
                        <Typography variant="h6" className={classes.title}>
                            DevFolio
                        </Typography>
                        {
                            width >= 768 ?
                                <ul className='desktop_nav'>
                                    <li className='nav-link'>
                                        <a href="#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a href="#work">Work</a>
                                    </li>
                                    <li>
                                        <a href="#blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                                :
                                null
                        }
                        <IconButton edge="start" color="inherit" className="mx-2" aria-label="menu">
                            <AccountCircleIcon />
                        </IconButton>
                        {
                            width < 768 ?
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                                    <MenuIcon />
                                </IconButton>
                                :
                                null
                        }
                    </Toolbar>
                </AppBar>
            </div>
            <Backdrop className={classes.backdrop} open={Open} >
                <div className="mobile_menu">
                    <ul>
                        <li onClick={() => setOpen(false)}>
                            <a href="#home">Home</a>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <a href="#about">About</a>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <a href="#services">Services</a>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <a href="#work">Work</a>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <a href="#blog">Blog</a>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="bar_close">
                    <CloseIcon role="button" style={{ fontSize: 28 }} onClick={() => setOpen(false)} />
                </div>
            </Backdrop>
        </>
    );
}
