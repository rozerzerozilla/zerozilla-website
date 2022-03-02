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
    image: "cardImage1.svg",
    name: "Competitor Research",
    description:
      "We fathom the level of competition that your business will face & other competition beating strategies",
  },
  {
    id: 2,
    image: "cardImage1.svg",
    name: "Innovative Ideas",
    description:
      "We come up with outof-the-box ideas & make them work in favor of your business goals",
  },
  {
    id: 3,
    image: "cardImage1.svg",
    name: "Skyrocketing Growth",
    description:
      "We enhance the growth potential of your business & find out new growth avenues for you",
  },
  {
    id: 4,
    image: "cardImage1.svg",
    name: "Strategy Draft",
    description:
      "We prepare a blueprint of business growth strategy for you & help you follow it meticulously",
  },
  {
    id: 5,
    image: "cardImage1.svg",
    name: "Web Engineering",
    description:
      "We understand well the technicalities associated with World Wide Web & other you the necessary support",
  },
  {
    id: 6,
    image: "cardImage1.svg",
    name: "Project Mapping",
    description:
      "We map out the journey of a project & prepare our arsenal accordingly to help you grow",
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
