import { Card, CardContent, Typography, Stack, useMediaQuery } from "@mui/material"
import { useTranslation } from "../hooks/useTranslation";
import PropTypes from 'prop-types';

export function InfoCard ({ title, content, icon }) {
    const { text } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width: 770px)');

    return(
        <Card sx={{
            width: isSmallScreen ? '80%' : '35%',
            height: isSmallScreen ? '26vh' : '30vh',
            display: 'flex', flexDirection: 'column'
            }}>

            <CardContent sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Stack>
                        <Typography variant="h6" sx={{ alignSelf: 'flex-start' }}>
                            {text(title)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            {text(content)}
                        </Typography>
                    </Stack>
                    <Stack justifyContent="flex-start" pl={1} pt={2}>
                        {icon}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
)};

InfoCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.node,
};