import PropTypes from 'prop-types';
import { Box, Typography } from "@mui/material";

const styles = {
    container: {
        width: 80,
        height: 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative",
        "&:hover .icon": {
            transform: "translateY(15px)",
        },
        "&:hover .title": {
            opacity: 1,
            top: 8,
        },
    },
    title: {
        position: "absolute",
        top: -20,
        opacity: 0,
        fontSize: "12px",
        fontWeight: "bold",
        transition: "all 0.3s ease-in-out",
    },
    icon: {
        width: "50px",
        height: "50px",
        transition: "transform 0.3s ease-in-out",
    }
};

export function TechIcon({ title, icon }) {
    return (
        <Box sx={styles.container} >
            <Typography className="title" sx={styles.title}>
                {title}
            </Typography>
            <Box
                component="img"
                src={icon}
                alt={title}
                className="icon"
                sx={styles.icon}
            />
        </Box>
    );
}

TechIcon.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
};