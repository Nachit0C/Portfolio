export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'dark' ? {
            background: { default: '#1e1e1e', paper: '#2d2d2d' },
            text: { primary: '#ffffff', secondary: '#afafaf', error: {main: '#d32f2f'} },
        } : {
            background: { default: '#f4f6f8', paper: '#ffffff' },
            text: { primary: '#1a1a1a', secondary: '#666666', error: {main: '#d32f2f'} },
        }),
    },
    typography: {
        h4: { fontWeight: 700 },
        h5: { fontWeight: 700 },
        h6: { fontWeight: 600 },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: { 
                    backgroundColor: mode === 'dark' ? '#121212' : '#333', 
                    color: '#ffffff' 
                }
            }
        },
        
        MuiButton: {
            styleOverrides: {
                root: { textTransform: 'none', borderRadius: '8px' }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: { borderRadius: 16, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', transition: 'all 0.3s ease-in-out', }
            }
        },
        MuiTextField: {
            defaultProps: { variant: 'standard', fullWidth: true },
            styleOverrides: { root: { marginBottom: '16px' } }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: { 
                    borderRadius: 8,
                    textTransform: 'none',
                    color: 'rgba(255, 255, 255, 0.7)', 
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    '&.Mui-selected': {
                        color: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        borderColor: '#ffffff',
                    },
                }
            }
        }
    }
});