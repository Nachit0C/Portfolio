import { AppBar, Box, Toolbar, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from "../hooks/useTranslation";
import { sections } from '../constants/constants';

export function NavBar ({ children }) {
    const { text } = useTranslation();
    const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <AppBar component="nav" position="fixed" elevation={0} sx={{ zIndex: 1000 }}>
            <Toolbar>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {sections.map((section) => (
                        <Button key={section} onClick={() => scrollToSection(section)} color="inherit">
                            {text(`navBar.${section}`)}
                        </Button>
                    ))}
                </Box>
                <div style={{position:'absolute', right: 15}}>
                    {children}
                </div>
            </Toolbar>
        </AppBar>
    )
};

NavBar.propTypes = {
    children: PropTypes.node,
};