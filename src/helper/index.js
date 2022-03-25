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
  },
  {
    id: 2,
    type: "content-2",
  },
  {
    id: 3,
    type: "content-3",
  },
];

export const bizIdeas = [
  {
    id: 1,
    image: "organic-search.svg",
    name: "Enhanced performance",
    description:
      "Our out-of-box ideas align with your objectives, enhance your performance, and help you place a firm foot in the business world.",
  },
  {
    id: 2,
    image: "creativity-bulb.svg",
    name: "Innovation",
    description:
      "As an IT services company, we devise creative products, services, and solutions that help your business experience scalability and progress at a faster pace.",
  },
  {
    id: 3,
    image: "skyrocketing.svg",
    name: "Modernization",
    description:
      "We instill modernization into our services by chartering new growth avenues for your business by unleashing the power of existing technologies.",
  },
  {
    id: 4,
    image: "search-servers.svg",
    name: "Strategy preparation",
    description:
      "We prepare a blueprint of the business growth strategy and guide you to follow and execute it meticulously.",
  },
  {
    id: 5,
    image: "web-engg.svg",
    name: "Digitalization",
    description:
      "Intelligent digital solutions are implemented to automate manual business processes and to enhance user experience.",
  },
  {
    id: 6,
    image: "data-report.svg",
    name: "Project Mapping",
    description:
      "A thorough mapping of your project milestones is done to help your business confront challenges and overcome obstacles. ",
  },
];


export const webIdeas = [
  {
    id: 1,
    image: "organic-search.svg",
    name: "Enhanced performance",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 2,
    image: "creativity-bulb.svg",
    name: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 3,
    image: "skyrocketing.svg",
    name: "Modernization",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 4,
    image: "search-servers.svg",
    name: "Strategy preparation",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 5,
    image: "web-engg.svg",
    name: "Digitalization",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 6,
    image: "data-report.svg",
    name: "Project Mapping",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
];

export const clientSlider = [
  {
    id: 1,
    image: "clientSliderImage1.png",
    name: "John Doe",
    designation: "CEO",
    company: "Skillmine Inc",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 2,
    image: "clientSliderImage2.png",
    name: "John Doe",
    designation: "CEO",
    company: "Artyss Studio",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 3,
    image: "clientSliderImage1.png",
    name: "John Doe",
    designation: "CEO",
    company: "Social.hr",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 1,
    image: "clientSliderImage1.png",
    name: "John Doe",
    designation: "CEO",
    company: "Skillmine Inc",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 2,
    image: "clientSliderImage2.png",
    name: "John Doe",
    designation: "CEO",
    company: "Artyss Studio",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 3,
    image: "clientSliderImage1.png",
    name: "John Doe",
    designation: "CEO",
    company: "Social.hr",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 1,
    image: "clientSliderImage1.png",
    name: "John Doe",
    designation: "CEO",
    company: "Skillmine Inc",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 2,
    image: "clientSliderImage2.png",
    name: "John Doe",
    designation: "CEO",
    company: "Artyss Studio",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
  },
  {
    id: 3,
    image: "clientSliderImage1.png",
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