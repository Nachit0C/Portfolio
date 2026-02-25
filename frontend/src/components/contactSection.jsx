import { Typography, Box, useMediaQuery, TextField, Stack, Paper, Button, IconButton, InputAdornment, CircularProgress, Alert, Snackbar } from "@mui/material";
import { GitHub, LinkedIn, Send as SendIcon, Delete as DeleteIcon, AccountCircle, Email as EmailIcon } from '@mui/icons-material';
import { useTranslation } from "../hooks/useTranslation";
import { useContactForm } from "../hooks/useContactForm";

export function ContactSection() {
    const isSmallScreen = useMediaQuery('(max-width: 770px)');
    const { text } = useTranslation();

    const { 
        formData, loading, formStatus, 
        handleChange, handleClear, sendEmail, closeStatus 
    } = useContactForm();

    const onSubmit = async (e) => {
        e.preventDefault();
        await sendEmail(
            text("ContactSection.successMsg"), 
            text("ContactSection.errorMsg")
        );
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>

            <Typography variant="h4" fontWeight='bold' sx={{ textAlign: 'center', mb: 1 }}>
                {text("ContactSection.title")}
            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 4, px: 2, maxWidth: '600px' }}>
                {text("ContactSection.subtitle")} 
            </Typography>

            <Paper 
                elevation={3} 
                sx={{ 
                    p: isSmallScreen ? 3 : 5, 
                    width: isSmallScreen ? '90%' : '60%', 
                    maxWidth: '800px',
                    borderRadius: 3
                }}
            >
                <Box component="form" onSubmit={onSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    
                    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 3 }}>
                        <TextField
                            fullWidth
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            label={text("ContactSection.nameLabel")}
                            variant="standard"
                            required
                            slotProps={{ input: { startAdornment: (
                                <InputAdornment position="start"><AccountCircle color="action" /></InputAdornment>
                            )}}}
                        />
                        <TextField
                            fullWidth
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            label={text("ContactSection.emailLabel")}
                            variant="standard"
                            required
                            slotProps={{ input: { startAdornment: (
                                <InputAdornment position="start"><EmailIcon color="action" /></InputAdornment>
                            )}}}
                        />
                    </Box>

                    <TextField
                        fullWidth
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        label={text("ContactSection.TextAreaLabel")}
                        multiline
                        rows={6}
                        placeholder={text("ContactSection.TextAreaPlaceholder")}
                        variant="filled"
                        required
                    />

                    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column-reverse' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>

                        <Stack direction="row" spacing={1}>
                            <IconButton href="https://github.com/Nachit0C" target="_blank"><GitHub /></IconButton>
                            <IconButton href="https://www.linkedin.com/in/ignacio-ciccone/" target="_blank" color="primary"><LinkedIn /></IconButton>
                        </Stack>

                        <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '40px' }}>
                            {loading ? (
                                <CircularProgress size={30} />
                            ) : (
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" onClick={handleClear} startIcon={<DeleteIcon />} sx={{ bgcolor: 'grey.500', '&:hover': { bgcolor: 'grey.600' }, minWidth: '120px' }}>
                                        {text("ContactSection.clearButton")}
                                    </Button>
                                    <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} sx={{ minWidth: '120px' }}>
                                        {text("ContactSection.sendButton")}
                                    </Button>
                                </Stack>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Paper>

            <Snackbar 
                open={formStatus.open} 
                autoHideDuration={6000} 
                onClose={closeStatus}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity={formStatus.type} variant="filled" sx={{ width: '100%' }}>
                    {formStatus.msg}
                </Alert>
            </Snackbar>
        </Box>
    )
}