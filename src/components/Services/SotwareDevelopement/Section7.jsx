import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const Text = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align:center;
    background: tranparent;
    transition:0.2s;
    font-weight:500;
    &:hover{
        background: ${props => props.primary ? "#4C2E88" : "white"};
        color:white;
    }
`;

const TechCard = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

const techStacks = [
    {
        icon: "tech-angular.svg",
        tech:"Angular",
    },
    {
        icon: "tech-react.svg",
        tech: "React",
    },
    {
        icon: "tech-vuejs.svg",
        tech: "Vue",
    },
    {
        icon: "tech-nodejs.svg",
        tech: "Node JS",
    },
    {
        icon: "tech-java.svg",
        tech: "Java",
    },
    {
        icon: "tech-php.svg",
        tech: "PHP",
    },
    {
        icon: "tech-laravel.svg",
        tech: "Lavravel",
    },
    {
        icon: "tech-drupal.svg",
        tech: "CakePHP",
    },
    {
        icon: "tech-wordpress.svg",
        tech: "Wordpress",
    },
    {
        icon: "tech-codeigniter.svg",
        tech: "Codeigniter",
    },
    
    
    
]

function Section7() {
  return (
      <Container>
          <div className="row mt-4">
              <div className="col-xs-12 col-md-8 mx-auto">
                  <p className="black-head-section extra-bold text-center">
                      Know our expertise a bit closer!
                  </p>
                  <p className="text-center">Wondering why you should choose us? Let our technical expertise speak for itself! </p>
              </div>
          </div>
          <TechCard>
              {techStacks.map((ele, idx) => <div className="w-100">
                  <div className="d-flex flex-column align-items-center justify-content-center w-100 tech-card">
                      <div className="pt-4">
                          <img src={require(`../../../assets/icons/${ele.icon}`)} width="60px"/>
                      </div>
                      <Text primary={true}>{ele.tech}</Text>
                </div>
              </div>)}
          </TechCard>
          
          
      </Container>
  )
}

export default Section7