import PropTypes from 'prop-types';
import { Typography, Card, CardActions, CardContent, CardMedia, Button, useMediaQuery, Box, Tooltip } from "@mui/material";
import { useTranslation } from "../hooks/useTranslation";
import { GitHub, OpenInNew } from '@mui/icons-material';

export function ProjectCard({ title, image, description, bullets, linkPage, linkGit, comingSoon }) {
    const { text } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width: 770px)');

    const styles = {
        card: {
            width: isSmallScreen ? '90%' : { xs: '100%', sm: '340px' },
            height: isSmallScreen ? 'auto' : '70vh',
            minHeight: '45vh', display: 'flex', flexDirection: 'column', position: 'relative',
            '&:hover': { transform: comingSoon ? 'none' : 'translateY(-8px)' },
            boxShadow: 4,
        },
        cardMedia: {
            height: '100%', 
            filter: comingSoon ? 'grayscale(100%)' : 'none',
            opacity: comingSoon ? 0.5 : 1,
        },
        comingSoonOverlay: {
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            bgcolor: 'rgba(0,0,0,0.2)',
        },
        comingSoonText: {
            bgcolor: 'primary.main', color: 'white', px: 2, borderRadius: 1, transform: 'rotate(-5deg)',
        },
        bulletsList: { 
            mt: 1.5, pl: 2.5, color: 'text.secondary', justifyContent: 'flex-end'
        }
    };

    return (
        <Card sx={styles.card}>
            <Box sx={{ position: 'relative', height: 180 }}>
                <CardMedia
                    sx={styles.cardMedia}
                    image={image}
                    title={title}
                    component="img"
                />

                {comingSoon && (
                    <Box sx={styles.comingSoonOverlay}>
                        <Typography variant="h6" sx={styles.comingSoonText}>
                            {text("Projects.comingSoon")}
                        </Typography>
                    </Box>
                )}
            </Box>

            <CardContent sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <Typography className="title" variant="h6" gutterBottom>
                    {text(title)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary'}}>
                    {text(description)}
                </Typography>
                
                {bullets && bullets.length > 0 && (
                    <Box component="ul" sx={styles.bulletsList}>
                        {bullets.map((bullet, index) => (
                            <Typography component="li" variant="body2" key={index} sx={{ mb: 0.5 }} >
                                {text(bullet)}
                            </Typography>
                        ))}
                    </Box>
                )}
                
            </CardContent>

            <CardActions sx={{ justifyContent: 'space-between', mt:1 }}>
                <Tooltip title={text("ProjectsSection.GitHub")} arrow placement="top">
                    <span>
                        <Button 
                            size="small" 
                            href={linkGit} 
                            target="_blank" 
                            disabled={comingSoon}
                        >
                            <GitHub />
                        </Button>
                    </span>
                </Tooltip>
                <Tooltip title={text("ProjectsSection.LiveDemo")} arrow placement="top">
                    <span>
                        <Button 
                            size="small" 
                            href={linkPage} 
                            target="_blank" 
                            disabled={comingSoon}
                        >
                            <OpenInNew />
                        </Button>
                    </span>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    bullets: PropTypes.array,
    linkPage: PropTypes.string,
    linkGit: PropTypes.string,
    comingSoon: PropTypes.bool
};