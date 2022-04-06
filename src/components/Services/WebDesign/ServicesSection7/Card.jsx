import React from "react"
import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    min-height: 252px;
    position: relative;
`;

const IconBox = styled.div`
    position: absolute;
    left: 0;
    top: 50.5px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -30px 10px 40px #A4A4A424;
    border: 0.5px solid #C31F5D;
    border-radius: 20px;
    background-color: white;
`;

const TextBox = styled.div`
    margin-left: 20%;
    width: 80%;
    min-height: 252px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background: #FFEFF5;
    border-radius: 20px;
    padding-left: 20%;
    padding-right: 10%;
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

function StrategyCard({icon, title, description, number}) {
  return (
      <Card>
          <IconBox>
              <img width={"80px"}
                  src={require(`../../../../assets/icons/${icon}`)}
                  alt={`icon-no-${number}`}
              />
          </IconBox>
          <TextBox>
              <div className="w-100 d-flex flex-row-reverse mt-2">
                  <NumberText>{number}</NumberText>
                </div>
              <Title >{title}</Title>
              <p>{description}</p>
          </TextBox>
    </Card>
  )
}

export default StrategyCard