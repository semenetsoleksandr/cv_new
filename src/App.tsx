import {AppBar, Toolbar, Typography, Container, IconButton, Button, CssBaseline, ThemeProvider} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useState, useEffect, useMemo, type FC} from 'react';
import {NavLink, Outlet, Link as RouterLink} from 'react-router';
import './App.css';
import {lightTheme, darkTheme} from './theme';
import Avatar from '@mui/material/Avatar';

export const App: FC = () => {
    const localTheme = (localStorage.getItem('Theme') as 'light' | 'dark') ?? 'light';
    if (!localTheme) {
        localStorage.setItem('Theme', 'light');
    }
    const [theme, setTheme] = useState<'light' | 'dark'>(localTheme);
    const themeObj = useMemo(() => (theme === 'dark' ? darkTheme : lightTheme), [theme]);
    useEffect(() => {
        localStorage.setItem('Theme', theme);
    }, [theme]);
    const toggleTheme = () =>
        setTheme(theme === 'dark' ? 'light' : 'dark');
    const menuItems = [
        {label: 'Home', path: '/'},
        {label: 'Experience', path: '/experience'},
        {label: 'Contact', path: '/contact'},
    ];
    const navSx = {
        textDecoration: 'none',
        color: 'inherit',
        // NavLink sets aria-current="page" when active — target it:
        '&[aria-current="page"]': {
            color: 'secondary.main',
            fontWeight: 600,
        },
    } as const;
    return (
        <ThemeProvider theme={themeObj}>
            <CssBaseline/>
            <AppBar position="sticky">
                <Toolbar sx={{gap: 2}}>
                    <Avatar alt="Remy Sharp"
                        src="public/photo_cv.png"
                        sx={{width: 48, height: 48}}>
                    </Avatar>
                    <Typography
                        component={RouterLink}
                        to="/"
                        variant="h6"
                        color="inherit"
                        sx={{flexGrow: 1, textDecoration: 'none'}}>
                        Oleksandr Semenets
                    </Typography>
                    {menuItems.map((item) => (
                        <Button key={item.path} component={NavLink} to={item.path} sx={navSx}>
                            {item.label}
                        </Button>
                    ))}
                    <IconButton aria-label="toggle theme" onClick={toggleTheme} color="inherit">
                        {theme === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{py: 4}}>
                <Outlet/>
            </Container>
        </ThemeProvider>
    );
};