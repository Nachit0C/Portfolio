import './styles/App.css';
import { HeroSection } from './components/heroSection'
import { AboutSection } from './components/aboutSection'
import { ProjectsSection } from './components/projectsSection'
import { ContactSection } from './components/contactSection'
import { NavBar } from './components/navbar'
import { Footer } from './components/footer'
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from './hooks/useTheme'
import { CssBaseline, Box, ToggleButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useLanguageStore } from './store/languageStore'

function App() {
  const {theme, setDarkMode, darkMode} = useTheme()
  const { toggleLanguage } = useLanguageStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" >
        <NavBar>
          <ToggleButton
            size='small'
            onClick={() => setDarkMode(!darkMode)}
            sx={{ height: 40, width: 40, mr: 1, color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            {darkMode ? <DarkMode /> : <LightMode />}
          </ToggleButton>

          <ToggleButton
            size='small'
            onClick={() => toggleLanguage()}
            sx={{ height: 40, color: 'white', borderColor: 'rgba(255,255,255,0.3)', fontWeight: 'bold' }}
          >
            {'ES/EN'}
          </ToggleButton>
        </NavBar>
        
        <Box className='mainContent' >
          <Box id="home" className='mainContentSection'> <HeroSection /> </Box>
          <Box id="about" className='mainContentSection'> <AboutSection /> </Box>
          <Box id="projects" className='mainContentSection'> <ProjectsSection /> </Box>
          <Box id="contact" className='mainContentSection'> <ContactSection /> </Box>
        </Box>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App