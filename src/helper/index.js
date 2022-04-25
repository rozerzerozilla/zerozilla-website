export const sliderAreaStyle = (isMobile, style) => {
  return {
    paddingLeft: !isMobile && "70px",
    paddingRight: !isMobile && "70px",
    paddingTop: "100px",
    paddingBottom: "150px",
    color: '#fff',
    ...style
  };
};

export const commonColPadding = (isMobile, padding) => {
  return {
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: !isMobile ? "70px" : `${padding ? padding : "15px"}`,
    paddingRight: !isMobile ? "70px" : `${padding ? padding : 0}`,
    textAlign: "center",
  };
};

export const  capSentence = (text) => {
  let wordsArray = text.replace(/-/g, " ");
  wordsArray = wordsArray.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word=>{
      return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(' ')
}


export const staticHomeSlider = [
  {
    id: 1,
    type: "content-1",
    title: 'Experience digital like never before!',
    description: 'The most valued addition your business will ever experience!',
  },
  {
    id: 2,
    type: "content-2",
    title: 'Adding true value at EVERY step!',
    description: 'Join the DIGITAL REVOLUTION with US!',
  },
  {
    id: 3,
    type: "content-3",
    title: 'Explore NEW POSSIBILITIES at Zerozilla!',
    description: 'Your growth story begins HERE!',
  },
];

export const bizIdeas = [
  {
    id: 2,
    image: "creativity-bulb.svg",
    name: "Innovation",
    description: "Get creative services and solutions that help your business experience scalability and progress faster. "
  },
  {
    id: 3,
    image: "skyrocketing.svg",
    name: "Modernization",
    description:"We instill modernization into our services by chartering new growth avenues for your business. "
  },
  {
    id: 4,
    image: "search-servers.svg",
    name: "Strategy preparation",
    description:"We prepare a blueprint of the business growth strategy and guide you meticulously. "
  },
  {
    id: 5,
    image: "web-engg.svg",
    name: "Digitalization",
    description:"Intelligent digital solutions are implemented to enhance user experience.",
  },
  {
    id: 6,
    image: "data-report.svg",
    name: "Project Mapping",
    description:"A thorough mapping of your project milestones is done to help your business overcome obstacles. "
  },
  {
    id: 1,
    image: "organic-search.svg",
    name: "Enhanced performance",
    description:"Our out-of-box ideas align with your objectives, and help you place a firm foot in the business world. "
  },
];


export const webIdeas = [
  {
    id: 1,
    image: "webdev-icon-1.svg",
    name: "Custom Web App Development",
    description:"Get high-performing and secure web applications that support your business and serve your customers equally."
  },
  {
    id: 2,
    image: "webdev-icon-2.svg",
    name: "Enterprise Web Development",
    description:"We deliver functional and visually compelling web solutions to help your business achieve a competitive edge."
  },
  {
    id: 3,
    image: "webdev-icon-3.svg",
    name: "Backend & API Development",
    description: "By ensuring perfect harmony at the backend, we support the binding force of your website- the backend."
  },
  {
    id: 4,
    image: "webdev-icon-4.svg",
    name: "Full Stack Development",
    description:"We devise scalable solutions for your business with our expertise to build feature-rich solutions."
  },
  {
    id: 5,
    image: "webdev-icon-5.svg",
    name: "Progressive Web Development",
    description: "Progressive enhancement strategies help us to develop cross-platform web apps."
  },
  {
    id: 6,
    image: "webdev-icon-6.svg",
    name: "Prototyping & UI/UX Designing",
    description:"Our highly skilled engineers create interactive prototyping and usability testing to enhance user experience."
  },
  {
    id: 7,
    image: "webdev-icon-7.svg",
    name: "Migration & Upgradation",
    description:"We ensure a smooth transition whether the requirement is up-gradation of web technology or migration."
  },
  {
    id: 8,
    image: "webdev-icon-8.svg",
    name: "Maintenance & Support",
    description:"You can avail our maintenance and support throughout all the phases of web design and development service.",
  },
];

export const clientSlider = [
  {
    id: 1,
    image: "clientSliderImage1.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Skillmine Inc",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 2,
    image: "clientSliderImage2.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Artyss Studio",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 3,
    image: "clientSliderImage1.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Social.hr",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 1,
    image: "clientSliderImage1.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Skillmine Inc",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 2,
    image: "clientSliderImage2.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Artyss Studio",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 3,
    image: "clientSliderImage1.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Social.hr",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 1,
    image: "clientSliderImage1.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Skillmine Inc",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 2,
    image: "clientSliderImage2.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Artyss Studio",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 3,
    image: "clientSliderImage1.webp",
    name: "John Doe",
    designation: "CEO",
    company: "Social.hr",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
];

export const responsiveSlider = {
  0: {
    items: 1,
  },
  450: {
    items: 1,
  },
  700: {
    items: 2,
  },
  1000: {
    items: 3,
  },
  1200: {
    items: 3,
  },
};



export const devopsServices = [
  {
    id: 1,
    image: "tachometer.svg",
    name: "Speed",
    description:
      "Move at an accelerated pace and adapt to market trends efficiently with DevOps.",
  },
  {
    id: 2,
    image: "lighting.svg",
    name: "Fast delivery",
    description:
      "Innovate products and respond faster to with CI/CD practices from software building to deployment.",
  },
  {
    id: 3,
    image: "heart-outline.svg",
    name: "Reliability",
    description:
      "Maintain a positive experience for end-users by reliably delivering at a rapid pace.",
  },
  {
    id: 4,
    image: "upgraph.svg",
    name: "Scalability",
    description:
      "Manage complex systems efficiently with automation and consistency and scale when the need arises.",
  },
  {
    id: 5,
    image: "dashboard-view.svg",
    name: "Increased collaboration",
    description:
      "Collaborate, manage workflows, and share responsibilities effectively under a DevOps cultural model.",
  },
  {
    id: 6,
    image: "safe-lock.svg",
    name: "Security",
    description:
      "Use a DevOps model to maintain control and compliance through automated compliance policies and controls.",
  },
];



export const prodAPI = 'http://192.81.213.186:9000';
export const deveAPI = 'http://localhost:9000';