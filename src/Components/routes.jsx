import Dashboard from "./Dashboard";

import About from "../Pages/About";
import Service from "../Pages/Service";
import Technology from "../Pages/Technology";
import Industry from "../Pages/Industry";
import Career from "../Pages/Careers";
import Contact from "../Pages/Contact";

import Development from "../SubPages/Development";
import Digital from "../SubPages/Digital";
import DesignCommunication from "../SubPages/DesignCm";
import CloudSolutions from "../SubPages/CloudSolutions";
import Devops from "../SubPagesOfSub/Devops";
import AI from "../SubPages/Ai";
import DataStrategy from "../SubPages/DataStrategy";

import WebDevelopment from "../SubPagesOfSub/WebDevelopment";
import Mobile from "../SubPagesOfSub/Mobile";
import Ecommerce from "../SubPagesOfSub/Ecommerce";
import ProductDevelopment from "../SubPagesOfSub/ProductDvp";
import Infrastructure from "../SubPagesOfSub/Infrastructure";
import ApplicationMaintance from "../SubPagesOfSub/ApplicationMaintance"
import Content from "../SubPagesOfSub/Content";
import SearchEngine from "../SubPagesOfSub/SearchEngine";
import SocialMedia from "../SubPagesOfSub/SocialMedia";
import SearchEngineOptimization from "../SubPagesOfSub/SearchEngineOptimization";
import DigitalPr from "../SubPagesOfSub/DigitalPr";
import LandingPage from "../SubPagesOfSub/LandingPage";
import Revunue from "../SubPagesOfSub/Revunue";
import Consultancy from "../SubPagesOfSub/Consultancy";
import WebDesign from "../SubPagesOfSub/WebDesign";
import GraphicDesign from "../SubPagesOfSub/GraphicDesign";
import Aws from "../SubPagesOfSub/Aws";
import Azure from "../SubPagesOfSub/Azure";
import BusinessEmail from "../SubPagesOfSub/BusinessEmail";
import Linux from "../SubPagesOfSub/Linux";
import WordPress from "../SubPagesOfSub/WordPress";
import ArtificialIntelligence from "../SubPagesOfSub/ArtificialIntelligence";
import Chatbot from "../SubPagesOfSub/Chatbot";
import MachineLearning from "../SubPagesOfSub/MachineLearning";
import Iot from "../SubPagesOfSub/Iot";
import Ar from "../SubPagesOfSub/Ar";
import Healthcare from "../SubPagesOfSub/Healthcare";
import RealEstate from "../SubPagesOfSub/RealEstate";
import LogisticsSection from "../SubPagesOfSub/Logistics";
import Retail from "../SubPagesOfSub/Retail";
import Finace from "../SubPagesOfSub/Finace";
import ResearchInsight from "../SubPagesOfSub/ResearchInsight";
import Strategy from "../SubPagesOfSub/Strategy";
import AuditAnalytics from "../SubPagesOfSub/AudiAnalytics";
import GoogleTag from "../SubPagesOfSub/GoogleTag";
import CentralisedMIS from "../SubPagesOfSub/CentralisedMIS";
import Political from "../SubPagesOfSub/Political";
import Education from "../SubPagesOfSub/Education"
import Insurence from "../SubPagesOfSub/Insurence";
import Media from "../SubPagesOfSub/Media";


const routes = [
    {path:"/",element:<Dashboard />},
    {path:"/about",element:<About />},
    {path:"/service",element:<Service />},
    {path:"/technology",element:<Technology/>},
    {path:"/industury",element:<Industry/>},
    {path:"/carrers",element:<Career/>},
    {path:"/contact",element:<Contact/>},
    {path:"/development",element:<Development/>},
        {path:"/applicationmaintance",element:<ApplicationMaintance/>},
    {path:"/digitaMarketing",element:<Digital/>},
    {path:"/webdevelopment",element:<WebDevelopment/>},
    {path:"/cloudSolutions",element:<CloudSolutions/>},
    {path:"/designCommunication",element:<DesignCommunication/>},
    {path:"/datastrategy",element:<DataStrategy/>},
    {path:"/mobile",element:<Mobile/>},
    {path:"/e-commerce",element:<Ecommerce/>},
    {path:"/product-development",element:<ProductDevelopment/>},
    {path:"/infrastrucure",element:<Infrastructure/>},
    {path:"/content",element:<Content/>},
    {path:'/sem',element:<SearchEngine/>},
    {path:"/socialmedia",element:<SocialMedia  />},
    {path:"/seo",element:<SearchEngineOptimization/>},
    {path:"/digitalpr",element:<DigitalPr />},
    {path:"/landingpage",element:<LandingPage/>},
    {path:"/revenue",element:<Revunue/>},
    {path:"/consultancy",element:<Consultancy/>},
    {path:"/webdesign",element:<WebDesign/>},
    {path:"/graphicdesign",element:<GraphicDesign/>},
    {path:"/aws",element:<Aws/>},
    {path:"/azure",element:<Azure/>},
    {path:"/businessemail",element:<BusinessEmail/>},
    {path:"/linux",element:<Linux/>},
    {path:"/wordpress",element:<WordPress/>},
    {path:"/devops",element:<Devops/>},
    {path:"/ai",element:<AI/>},
    {path:"/artificialintelligence",element:<ArtificialIntelligence/>},
    {path:"/chatbot",element:<Chatbot/>},
    {path:"/machinelearning",element:<MachineLearning/>},
    {path:"/iot",element:<Iot/>},
    {path:"/augmentedreality",element:<Ar/>},
    {path:"/healthcare",element:<Healthcare/>},
    {path:"/realestate",element:<RealEstate/>},
    {path:"/logistics",element:<LogisticsSection/>},
    {path:"/retail",element:<Retail/>},
    {path:"/finace",element:<Finace />},
    {path:"/researchinsight",element:<ResearchInsight/>},
    {path:"/strategy",element:<Strategy/>},
    {path:"/auditanalytics",element:<AuditAnalytics/>},
    {path:"/googletag",element:<GoogleTag />},
    {path:"/centralisedmis",element:<CentralisedMIS/>},
    {path:"/political",element:<Political/>},
    {path:"/education",element:<Education/>},
    {path:"/insurence",element:<Insurence/>},
    {path:"/media",element:<Media/>},

    
];
export default routes;