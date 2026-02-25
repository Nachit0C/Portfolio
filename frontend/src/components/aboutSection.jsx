import { Typography, Box, useMediaQuery } from "@mui/material"
import { useTranslation } from "../hooks/useTranslation.js";
import { InfoCard } from "./infoCard.jsx";
import { cardData, techStack } from "../constants/constants.jsx";
import { TechIcon } from "./techIcon.jsx";

export function AboutSection () {
    const { text } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width: 770px)');
    
    return(
        <Box>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
                {text("AboutSection.title")}
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 4,
                mb: 4
            }}>
                {
                    cardData.map((item, index) => (
                        <InfoCard key={index} {...item} />
                    ))
                }
            </Box>
            
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                {text("AboutSection.stack")}
            </Typography>
            <Box
                sx={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    flexWrap: "wrap", 
                    gap: 2,
                    mt: 2,
                }}
            >
                {
                    techStack.map((item, index) => (
                        <TechIcon key={index} {...item} />
                    ))
                }
            </Box>
        </Box>
    )
}