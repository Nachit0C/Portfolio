import { MenuBook, Engineering, Visibility, TrackChanges } from '@mui/icons-material';
import JSicon from '../assets/icons/JSicon.webp';
import TSicon from '../assets/icons/TSLogo.png';
import Nodejs_logo from '../assets/icons/Nodejs_logo.png';
import PythonLogo from '../assets/icons/PythonLogo.png';
import ReactLogo from '../assets/icons/ReactLogo.png';
import SQLLogo from '../assets/icons/SQLLogo.png';
import MongoDBLogo from '../assets/icons/MongoDBLogo.png';
import PostgreLogo from '../assets/icons/PostgreSQLLogo.png';
import DockerLogo from '../assets/icons/DockerLogo.png';
import PostmanLogo from '../assets/icons/PostmanLogo.svg';
import GITLogo from '../assets/icons/GITLogo.png';
import CppLogo from '../assets/icons/CppLogo.png';
import HTMLLogo from '../assets/icons/HTMLLogo.png';
import CSSLogo from '../assets/icons/CSSLogo.png';
import MYSQLLogo from '../assets/icons/MYSQLLogo.png';
import URioPlata from '../assets/URioPlata.png';
import ChatBotSushiIA from '../assets/ChatBotSushiIA.png';
import peopleFlowImg from '../assets/peopleFlowImg.png';
import portfolioImg from '../assets/portfolioImg.png';
import mealPrepImg from '../assets/mealPrep.png';

const cardData = [
    { 
        title: 'AboutSection.studiesTitle', 
        content: 'AboutSection.studiesContent', 
        icon: <MenuBook sx={{ fontSize: '65px' }} /> 
    },
    { 
        title: 'AboutSection.careerTitle', 
        content: 'AboutSection.careerContent', 
        icon: <Engineering sx={{ fontSize: '65px' }} /> 
    },
    { 
        title: 'AboutSection.objectivesTitle', 
        content: 'AboutSection.objectivesContent', 
        icon: <TrackChanges sx={{ fontSize: '65px' }} /> 
    },
    { 
        title: 'AboutSection.visionTitle', 
        content: 'AboutSection.visionContent', 
        icon: <Visibility sx={{ fontSize: '65px' }} /> 
    }
];

const techStack = [
    { 
        title: 'JavaScript',
        icon: JSicon
    },
    { 
        title: 'TypeScript',
        icon: TSicon
    },
    { 
        title: 'Node.js', 
        icon: Nodejs_logo
    },
    { 
        title: 'Python',
        icon: PythonLogo
    },
    {
        title: 'React.js',
        icon: ReactLogo
    },
    {
        title: 'SQL',
        icon: SQLLogo
    },
    {
        title: 'MongoDB',
        icon: MongoDBLogo
    },
    {
        title: 'PostgreSQL',
        icon: PostgreLogo
    },
    {
        title: 'MySQL',
        icon: MYSQLLogo
    },
    {
        title: 'Docker',
        icon: DockerLogo
    },
    {
        title: 'Postman',
        icon: PostmanLogo
    },
    {
        title: 'Git/GitHub',
        icon: GITLogo
    },
    {
        title: 'C++',
        icon: CppLogo
    },
    {
        title: 'HTML',
        icon: HTMLLogo
    },
    {
        title: 'CSS',
        icon: CSSLogo
    }
];

const projects = [{
    "title": "Projects.URioPlataTitle",
    "description": "Projects.URioPlataDescription",
    "bullets": [
        "Projects.URioPlataBullet1",
        "Projects.URioPlataBullet2",
        "Projects.URioPlataBullet3",
        "Projects.URioPlataBullet4"
    ],
    "image": URioPlata,
    "linkPage": "https://urioplata.alwaysdata.net/",
    "linkGit": "https://github.com/Nachit0C/ProyectoFullStack-Universidad",
    "comingSoon": false
    },{
    "title": "Projects.chatBotTitle",
    "description": "Projects.chatBotDescription",
    "bullets": [
        "Projects.chatBotBullet1",
        "Projects.chatBotBullet2",
        "Projects.chatBotBullet3",
        "Projects.chatBotBullet4"
    ],
    "image": ChatBotSushiIA,
    "linkPage": "https://chat-bot-ia-sushi-frontend.vercel.app/",
    "linkGit": "https://github.com/Nachit0C/chat_bot_IA_sushi",
    "comingSoon": false
    },{
    "title": "Projects.peopleFlowTitle",
    "description": "Projects.peopleFlowDescription",
    "bullets": [
        "Projects.peopleFlowBullet1",
        "Projects.peopleFlowBullet2",
        "Projects.peopleFlowBullet3"
    ],
    "image": peopleFlowImg,
    "linkPage": "",
    "linkGit": "https://github.com/NachoCiccone2/PeopleFlow-Backend",
    "comingSoon": false
    },{
    "title": "Projects.portfolioTitle",
    "description": "Projects.portfolioDescription",
    "bullets": [
        "Projects.portfolioBullet1",
        "Projects.portfolioBullet2",
        "Projects.portfolioBullet3"
    ],
    "image": portfolioImg,
    "linkPage": "https://urioplata.alwaysdata.net/",
    "linkGit": "https://github.com/Nachit0C/ProyectoFullStack-Universidad",
    "comingSoon": false
    },{
    "title": "Projects.mealPrepTitle",
    "description": "Projects.mealPrepDescription",
    "image": mealPrepImg,
    "linkPage": "",
    "linkGit": "",
    "comingSoon": true
    }
];

const sections = [
    'home', 'about', 'projects', 'contact'
];

export { cardData, techStack, projects, sections };