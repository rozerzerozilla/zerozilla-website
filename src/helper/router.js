import { lazy } from "react";

import { IoBusinessOutline, IoPricetagsOutline } from "react-icons/io5";
import {
    SiIos, SiIbeacon, SiIota,
    SiReact,
    SiContactlesspayment,
    SiTableau,
    SiAmazonaws,
    SiJava,
    SiJavascript,
    SiWordpress,
    SiLaravel,
    SiPhp,
    SiCakephp,
    SiAngular,
    SiVuedotjs,
    SiCodeigniter
} from "react-icons/si";
import { GrAndroid, GrRobot, GrReactjs, GrFingerPrint } from "react-icons/gr";
import { FiSquare, FiShoppingCart, FiMail, FiFileText, FiSmartphone } from "react-icons/fi";
import { ImInfinite } from 'react-icons/im'

// import CustomApplication from "../pages/Services/CustomApplication";
// import AndroidApps from "../pages/Services/AndroidApp";
// import AndroidUXDesign from "../pages/Services/AndroidUX";
// import IOSApps from "../pages/Services/iOS";
// import EcommerceApps from "../pages/Services/Ecommerce";
// import IBeaconApps from "../pages/Services/iBeacon";
// import IoTApps from "../pages/Services/IoT";
// import ReactJsApps from "../pages/Services/ReactJS";
// import ReactNativeApps from "../pages/Services/ReactNative";
// import IpadApps from "../pages/Services/IPadApps";
// import BotsApps from "../pages/Services/BotsApp";
// import HybridApps from "../pages/Services/HybridApps";
// import DigtalMarketing from "../pages/Services/DigtalMarketing";
// import SearchEngineOptimization from "../pages/Services/SearchEngineOptimization";
// import LeadGeneration from "../pages/Services/LeadGeneration";
// import PayPerClick from "../pages/Services/PayPerClick";
// import SocialMediaMarketing from "../pages/Services/SocialMediaMarketing";
// import Branding from "../pages/Services/Branding";
// import ContentServices from "../pages/Services/ContentServices";
// import AppMarketing from "../pages/Services/AppMarketing";

// import WebDevlopemnet from "../pages/Services/WebDevlopemnet";
// import WebDesign from "../pages/Services/WebDesign";
// import PHP from "../pages/Services/PHP";
// import Laravel from "../pages/Services/Laravel";
// import Wordpress from "../pages/Services/Wordpress";

const CustomApplication = lazy(() => import('../pages/Services/CustomApplication'));
const AndroidApps = lazy(() => import('../pages/Services/AndroidApp'));
const AndroidUXDesign = lazy(() => import("../pages/Services/AndroidUX"));
const IOSApps = lazy(() => import("../pages/Services/iOS"));
const IBeaconApps = lazy(() => import("../pages/Services/iBeacon"));
const IoTApps = lazy(() => import("../pages/Services/IoT"));
const IpadApps = lazy(() => import("../pages/Services/IPadApps"));
const ReactNativeApps = lazy(() => import("../pages/Services/ReactNative"));
const BotsApps = lazy(() => import("../pages/Services/BotsApp"));
const HybridApps = lazy(() => import("../pages/Services/HybridApps"));
const Ecommerce = lazy(() => import("../pages/Services/EcommerceWeb"));
const SoftwareDevelopment = lazy(() => import("../pages/Services/SoftwareDevelopment"));

const DigtalMarketing = lazy(() => import("../pages/Services/DigtalMarketing"));
const SearchEngineOptimization = lazy(() => import("../pages/Services/SearchEngineOptimization"));
const LeadGeneration = lazy(() => import("../pages/Services/LeadGeneration"));
const PayPerClick = lazy(() => import("../pages/Services/PayPerClick"));
const SocialMediaMarketing = lazy(() => import("../pages/Services/SocialMediaMarketing"));
const Branding = lazy(() => import("../pages/Services/Branding"));
const ContentServices = lazy(() => import("../pages/Services/ContentServices"));
const AppMarketing = lazy(() => import("../pages/Services/AppMarketing"));
const WebDevlopemnet = lazy(() => import("../pages/Services/WebDevlopemnet"));
const WebDesign = lazy(() => import("../pages/Services/WebDesign"));
const NodeJS = lazy(() => import("../pages/Services/NodeJS"));
const ReactJS = lazy(() => import("../pages/Services/ReactJS"));
const Java = lazy(() => import("../pages/Services/Java"));
const Angular = lazy(() => import("../pages/Services/Angular"));
const Codeigniter = lazy(() => import("../pages/Services/Codeigniter"));
const CakePHPApps = lazy(() => import("../pages/Services/CakePHP"));
const VueJS = lazy(() => import("../pages/Services/VueJS"));
const PHP = lazy(() => import("../pages/Services/PHP"));
const Laravel = lazy(() => import("../pages/Services/Laravel"));
const Wordpress = lazy(() => import("../pages/Services/Wordpress"));
const MobileApplication = lazy(() => import('../pages/Services/CustomApplication'));
const AWS = lazy(() => import("../pages/Services/AWS"));
const Devops = lazy(() => import("../pages/Services/Devops"));


export const cloudServices = [
    {
        catetogy: 'Cloud Services',
        subtitle: 'AWS',
        href: '/aws',
        id: Math.random() * 10 + 1,
        icon: SiAmazonaws,
        component: AWS,
    },
    {
        catetogy: 'Cloud Services',
        subtitle: 'DevOps',
        href: '/devops',
        id: Math.random() * 10 + 1,
        icon: ImInfinite,
        component: Devops,
    },
]


export const mobileComponents = [
    {
        catetogy: 'Mobile Applications',
        subtitle: 'IOS Apps',
        href: '/ios-app-development',
        id: Math.random() * 10 + 1,
        icon: GrAndroid,
        component: IOSApps,
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'Android Apps',
        href: '/android-app-development',
        id: Math.random() * 10 + 1,
        icon: GrAndroid,
        component: AndroidApps,
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'Android Game UX Design',
        href: '/android-game-ux-design-services',
        id: Math.random() * 10 + 1,
        icon: GrAndroid,
        component: AndroidUXDesign,
    },
    // {
    //     catetogy: 'Mobile Applications',
    //     subtitle: 'Custom Apps',
    //     href: '/custom-mobile-app-development-services',
    //     id: Math.random() * 10 + 1,
    //     icon: GrRobot,
    //     component: CustomApplication,
    // },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'E-commerce Apps',
        href: '/e-commerce-mobile-app-development',
        id: Math.random() * 10 + 1,
        icon: FiShoppingCart,
        component: Ecommerce,
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'Bots Apps',
        href: '/bots-app-development',
        id: Math.random() * 10 + 1,
        icon: GrRobot,
        component: BotsApps,
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'iPad Apps',
        href: '/ipad-app-development',
        id: Math.random() * 10 + 1,
        icon: SiIos,
        component: IpadApps,
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'iBeacon Apps',
        href: '/ibeacon-app-development',
        id: Math.random() * 10 + 1,
        icon: SiIbeacon,
        component: IBeaconApps,
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'Hybrid Apps',
        href: '/hybrid-app-development',
        id: Math.random() * 10 + 1,
        icon: SiTableau,
        component: HybridApps,
        
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'IoT Apps',
        href: '/iot-app-development',
        id: Math.random() * 10 + 1,
        icon: SiIota,
        component: IoTApps,
    },
    // {
    //     catetogy: 'Mobile Applications',
    //     subtitle: 'React JS Apps',
    //     href: '/react-js-app-devlopment',
    //     id: Math.random() * 10 + 1,
    //     icon: SiReact,
    //     component: ReactJsApps,
    // },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'React Native Apps',
        href: '/react-native-app-development',
        id: Math.random() * 10 + 1,
        icon: GrReactjs,
        component: ReactNativeApps,
    }
]

export const businessServices = [
    {
        catetogy: 'Web Application',
        subtitle: 'Website Development',
        href: '/web-design',
        id: Math.random() * 10 + 1,
        icon: IoBusinessOutline,
        component: WebDesign
    },
    {
        catetogy: 'Web Application',
        subtitle: 'Software Devlopement',
        href: '/software-development',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
        component: SoftwareDevelopment
    },
    {
        catetogy: 'Services',
        subtitle: 'Mobile Application Development',
        href: '/mobile-app-development',
        id: Math.random() * 10 + 1,
        icon: FiSmartphone,
        component: MobileApplication
    },
    {
        catetogy: 'Web Application',
        subtitle: 'E-commerce Website',
        href: '/ecommerce-website',
        id: Math.random() * 10 + 1,
        icon: IoPricetagsOutline,
        component: Ecommerce,
    },
    {
        catetogy: 'Web Application',
        subtitle: 'AWS',
        href: '/aws',
        id: Math.random() * 10 + 1,
        icon: SiAmazonaws,
        component: AWS,
    },
    {
        catetogy: 'Web Application',
        subtitle: 'DevOps',
        href: '/devops',
        id: Math.random() * 10 + 1,
        icon: ImInfinite,
        component: Devops,
    },
]

export const marketingServices = [
    // {
    //     catetogy: 'Digital Marketing',
    //     subtitle: 'Digital Marketing',
    //     href: '/digital-marketing',
    //     id: Math.random() * 10 + 1,
    //     icon: GrFingerPrint,
    //     component: DigtalMarketing
    // },
    {
        catetogy: 'Marketing Services',
        subtitle: 'Enterprise SEO',
        href: '/search-engine-optimization',
        id: Math.random() * 10 + 1,
        icon: SiTableau,
        component: SearchEngineOptimization,
    },
    {
        catetogy: 'Marketing Services',
        subtitle: 'Social Media Marketing',
        href: '/social-media-marketing',
        id: Math.random() * 10 + 1,
        icon: SiTableau,
        component: SocialMediaMarketing,
    },
    {
        catetogy: 'Marketing Services',
        subtitle: 'Pay-Per-Click',
        href: '/pay-per-click',
        id: Math.random() * 10 + 1,
        icon: SiContactlesspayment,
        component: PayPerClick ,
    },
    {
        catetogy: 'Marketing Services',
        subtitle: 'Lead Generation',
        href: '/lead-generation',
        id: Math.random() * 10 + 1,
        icon: SiTableau,
        component: LeadGeneration,
    },
    {
        catetogy: 'Marketing Services',
        subtitle: 'Digital Branding',
        href: '/branding-service',
        id: Math.random() * 10 + 1,
        icon: FiMail,
        component: Branding,
    },
    // {
    //     catetogy: 'Marketing Services',
    //     subtitle: 'Content Service',
    //     href: '/content-service',
    //     id: Math.random() * 10 + 1,
    //     icon: FiFileText,
    //     component: ContentServices,
    // },
    // {
    //     catetogy: 'Marketing Services',
    //     subtitle: 'App Marketing',
    //     href: '/app-marketing',
    //     id: Math.random() * 10 + 1,
    //     icon: FiSquare,
    //     component: AppMarketing,
    // },
]

export const customServices = [
    {
        catetogy: 'Technologies',
        subtitle: 'React JS',
        href: '/reactjs-development',
        id: Math.random() * 10 + 1,
        icon: SiReact,
        component: ReactJS
    },
    {
        catetogy: 'Technologies',
        subtitle: 'Angular JS',
        href: '/angular-development',
        id: Math.random() * 10 + 1,
        icon: SiAngular,
        component: Angular
    },
    {
        catetogy: 'Technologies',
        subtitle: 'Vue JS',
        href: '/vuejs-development',
        id: Math.random() * 10 + 1,
        icon: SiVuedotjs,
        component: VueJS
    },
    {
        catetogy: 'Technologies',
        subtitle: 'NodeJS',
        href: '/nodejs-development',
        id: Math.random() * 10 + 1,
        icon: SiJavascript,
        component: NodeJS
    },
    {
        catetogy: 'Technologies',
        subtitle: 'Java',
        href: '/java-development',
        id: Math.random() * 10 + 1,
        icon: SiJava,
        component: Java
    },
    {
        catetogy: 'Technologies',
        subtitle: 'PHP',
        href: '/hire-php-developers',
        id: Math.random() * 10 + 1,
        icon: SiPhp,
        component: PHP
    },
    {
        catetogy: 'Technologies',
        subtitle: 'Laravel',
        href: '/laravel-development',
        id: Math.random() * 10 + 1,
        icon: SiLaravel,
        component: Laravel
    },
    {
        catetogy: 'Technologies',
        subtitle: 'CakePHP',
        href: '/cakephp-development',
        id: Math.random() * 10 + 1,
        icon: SiCakephp,
        component: CakePHPApps
    },
    {
        catetogy: 'Technologies',
        subtitle: 'Wordpress',
        href: '/wordpress-e-commerce-development-services',
        id: Math.random() * 10 + 1,
        icon: SiWordpress,
        component: Wordpress
    },
    {
        catetogy: 'Mobile Applications',
        subtitle: 'Codeigniter',
        href: '/codeigniter-development',
        id: Math.random() * 10 + 1,
        icon: SiCodeigniter,
        component: Codeigniter,
    },
]

export const portfolioInsights = [
    {
        catetogy: 'Portfoilio',
        subtitle: 'SkillMine',
        href: '/portfolio/skill-mine',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
    {
        catetogy: 'Portfolio',
        subtitle: 'lorem ipsum',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
    {
        catetogy: 'Portfolio',
        subtitle: 'Lorem ipssum',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
]

export const blogInsights = [
    {
        catetogy: 'Blogs',
        subtitle: 'Blogs 1',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
    {
        catetogy: 'Blogs',
        subtitle: 'Blogs 2',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
    {
        catetogy: 'Blogs',
        subtitle: 'Blogs 3',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
]

export const videosInsights = [
    {
        catetogy: 'videos',
        subtitle: 'Lorem Ipsum',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
    {
        catetogy: 'videos',
        subtitle: 'Lorem Ipsum',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
    {
        catetogy: 'videos',
        subtitle: 'Lorem Ipsum',
        href: '#',
        id: Math.random() * 10 + 1,
        icon: FiSquare,
    },
]

export const routes = [
    {
        id:1,
        title:'Home',
        href:'/home',
    },
    {
        id:2,
        title:'About Us',
        href:'/about-us',
    },
    {
        id:3,
        title:'Company',
        href:'#',
    },
    {
        id:4,
        title:'Services',
        href:'#',
        subNavs:[
            [
                {
                    catetogy:'Web Application',
                    subtitle:'Business Website',
                    href:'#',
                    id:Math.random() * 10 + 1,
                },
                {
                    catetogy:'Web Application',
                    subtitle: 'E-commerce Website',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy:'Web Application',
                    subtitle: 'Personal Website',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy:'Web Application',
                    subtitle: 'Blog Website',
                    href: '#',
                    id: Math.random() * 10 + 1,
                    }
            ],
            [
                {
                    catetogy: 'Mobile Applications',
                    subtitle: 'Business Website',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Mobile Applications',
                    subtitle: 'E-commerce Website',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Mobile Applications',
                    subtitle: 'Personal Website',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Mobile Applications',
                    subtitle: 'Blog Website',
                    href: '#',
                    id: Math.random() * 10 + 1,
                }
            ],
            [
                {
                    catetogy: 'Marketing Services',
                    subtitle: 'Digital Marketing',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Marketing Services',
                    subtitle: 'SEO',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Marketing Services',
                    subtitle: 'Pay-Per-Click',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Marketing Services',
                    subtitle: 'Lead Generation',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Marketing Services',
                    subtitle: 'Email Marketing',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Marketing Services',
                    subtitle: 'Social Media Marketing',
                    href: '#',
                    id: Math.random() * 10 + 1,
                }
            ],
            
        ]
    },
    {
        id:5,
        title:'Insights',
        href:'#',
        subNavs:[
            [
                {
                    catetogy: 'Insights',
                    subtitle: 'Portfolio',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Insights',
                    subtitle: 'Blogs',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
                {
                    catetogy: 'Insights',
                    subtitle: 'Videos',
                    href: '#',
                    id: Math.random() * 10 + 1,
                },
            ],
        ]
    },
    {
        id: 6,
        title: 'Contact',
        href: '#',
    },
    {
        id: 7,
        title: 'Career',
        href: '#',
    },

]