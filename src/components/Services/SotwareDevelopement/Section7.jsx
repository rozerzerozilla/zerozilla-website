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
                      Web Technologies, We’ve Expertise In
                  </p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
              </div>
          </div>
          <div className="row mt-3">
              {techStacks.map((ele, idx) => <div className="col-xs-6 col-md-2 mb-5 py-2">
                  <div className="d-flex flex-column align-items-center justify-content-center w-100 tech-card">
                      <div className="pt-4">
                          <img src={require(`../../../assets/icons/${ele.icon}`)} width="60px"/>
                      </div>
                      <Text primary={true}>{ele.tech}</Text>
                </div>
              </div>)}
          </div>
          
          
      </Container>
  )
}

export default Section7