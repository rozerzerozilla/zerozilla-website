import React from "react"
import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    min-height: ${props => props.isMobile ? "unset" : "252px"};
    position: relative;
`;

const IconBox = styled.div`
    position: ${props => props.isMobile ? "relative" : "absolute"};
    left: ${props => props.isMobile ? "50%" : "0px"};
    top: ${props => props.isMobile ? "0px" : "50.5px"};
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -30px 10px 40px #A4A4A424;
    border: 0.5px solid #C31F5D;
    border-radius: 20px;
    background-color: white;
    transform: ${props => props.isMobile ? "translate(-50%, 0)" : "translate(0, 0, 0)"};
`;

const TextBox = styled.div`
    margin-left: ${props => props.isMobile ? "0" : "20%"};
    margin-top: ${props => props.isMobile ? "-75px" : "0"};
    width: ${props => props.isMobile ? "100%" : "80%"};
    min-height: ${props => props.isMobile ? "inherit" : "252px"};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isMobile ? "center" : "start"};
    justify-content: center;
    background: #FFEFF5;
    border-radius: 20px;
    padding-left: ${props => props.isMobile ? "10%" : "20%"};
    padding-right: ${props => props.isMobile ? "10%" : "10%"};
`;

const NumberText = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #C31F5D;
    box-shadow: -10px 10px 30px #00000052;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bolder;
    transform: rotate(-20deg);
`

const Title = styled.div`
    color: #C31F5D;
    font-size: 22px;
`

function StrategyCard({icon, title, description, number, isMobile}) {
  return (
      <Card primary>
          <IconBox isMobile={isMobile}>
              <img width={isMobile ? "80px":"80px"}
                  src={require(`../../../../assets/icons/${icon}`)}
                  alt={`icon-no-${number}`}
              />
          </IconBox>
          <TextBox isMobile={isMobile}>
              <div className="w-100 d-flex flex-row-reverse mt-2">
                  <NumberText>{number}</NumberText>
                </div>
              <Title >{title}</Title>
              <div>{description}</div>
          </TextBox>
    </Card>
  )
}

export default StrategyCard