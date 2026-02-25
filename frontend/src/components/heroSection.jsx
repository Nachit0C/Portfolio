import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, Typography, Avatar, CardActions, IconButton, Stack, Snackbar, Alert } from "@mui/material"
import { GitHub, LinkedIn, Favorite } from '@mui/icons-material';
import { useTranslation } from "../hooks/useTranslation";
import { useVisited } from "../hooks/useVisited";
import pfp from "../assets/FotoCV.jpg";

export function HeroSection () {
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { liked, saveVisit, error } = useVisited();
  const { text } = useTranslation();

  useEffect(() => {
    if (error) {
      setOpenSnackbar(true);
    }
  }, [error]);
  
  const handleLike = async () => {
    const success = await saveVisit();

    if (success) {
      setShowPlusOne(true);
      setTimeout(() => setShowPlusOne(false), 800);
    }
  };

  return (
    <Card sx={{ 
      width: { xs: '95%', sm: '80%', md: '70%', maxWidth: '50%' }, 
      margin: 'auto',
      mt: 22,
      overflow: 'visible'
    }}>
      <CardContent >
        <Stack 
          direction={{ xs: 'column-reverse', sm: 'row' }} 
          spacing={2} 
          alignItems="center" 
          justifyContent="space-between"
        >
          <Stack>
            <Typography variant="h4">
              {text("heroSection.title")}
            </Typography>

            <Typography variant="h5" gutterBottom>
              {text("heroSection.subtitle")}
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
              {text("heroSection.content")}
            </Typography>
          </Stack>

          <Avatar
            alt="profile picture"
            src={pfp}
            sx={{ 
              width: { xs: 160, md: 190 }, 
              height: { xs: 160, md: 190 },
              border: '1px solid',
              borderColor: 'primary.main'
            }}
          />
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 1, pb: 1 }} >
        <Stack direction="row" alignItems="center" sx={{ position: 'relative' }}>
          <IconButton disabled={liked} onClick={handleLike} aria-label="like button">
            <Favorite sx={{ color: liked ? "error.main" : "action.disabled" }} />
          </IconButton>

          <AnimatePresence>
            {showPlusOne && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -40 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  left: 15,
                  color: "#d32f2f",
                  fontWeight: "bold",
                }}
              >
                +1
              </motion.div>
            )}
          </AnimatePresence>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {text("heroSection.likeButton")}
          </Typography>
        </Stack>

        <Stack direction="row" >
          <IconButton aria-label="github link" href="https://github.com/Nachit0C" target="_blank"><GitHub /></IconButton>
          <IconButton href="https://www.linkedin.com/in/ignacio-ciccone/" target="_blank" color="primary"><LinkedIn /></IconButton>
        </Stack>
      </CardActions>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" variant="filled" sx={{ width: '100%' }}>
          {error || "Hubo un error al procesar tu solicitud"}
        </Alert>
      </Snackbar>
    </Card>
  )
};