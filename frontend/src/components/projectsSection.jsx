import { Typography, Box, useMediaQuery } from "@mui/material"
import { useTranslation } from "../hooks/useTranslation.js";
import { ProjectCard } from "./projectCard.jsx";
import { projects } from "../constants/constants.jsx";

export function ProjectsSection () {
    const { text } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width: 770px)');

    return(
        <Box sx={{ mt:'50px'}}>
            <Typography variant="h5" fontWeight='bold' sx={{ textAlign: 'center', mb:'30px'}}>
                {text("ProjectsSection.title")}
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 4,
                width: '100%'
            }}>
                {
                    projects.map((item, index) => (
                        <ProjectCard key={index} {...item} />
                    ))
                }
            </Box>
        </Box>
    )
}