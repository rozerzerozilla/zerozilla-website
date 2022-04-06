import React from 'react'
import styled from "styled-components";


const CardBox = styled.div`
    display:  flex;
    flex-direction: column;
    border-radius: 15px;
    border: 0.5px solid #C31F5D;
    box-shadow: 0px 10px 30px #0600BF29;
`;

const Image = styled.img`
    object-fit: cover;
    height: 182px;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600 ;
    letter-spacing: 0px;
    color: #C31F5D;
    margin-bottom: 15px;
`

const Card = ({imgsrc, title, address, href}) => {
    return <CardBox>
        <div><Image src={require(`../../assets/images/${imgsrc}`)} alt="images"/></div>
        <div className="d-flex flex-column p-4">
            <Title >{title}</Title>
            <p>{address}</p>
        </div>
        <div className="w-100 d-flex flex-row-reverse p-4">
            <a href={href} target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.webp"
                    alt="loaction" width="30px" />
            </a>
        </div>
    </CardBox>
}

const address = [
    {
        name: "Bengaluru, India",
        adres: "Sheshadripuram, Bengaluru, Karnataka 560020",
        imgsrc: "zerozilla_add.webp",
        href:'https://g.page/zerozilla?share'
    },
    {
        name: "Mysuru, India",
        adres: "Hebbal, Ilavala Hobli, Karnataka 570016",
        imgsrc: "zerozilla_add.webp",
        href: 'https://goo.gl/maps/eN3Hk472ZLpV11SL8',
    },
    {
        name: "New Jersey, USA",
        imgsrc: "zerozilla_add.webp",
        adres: "Matawan NJ 07747,USA",
        href:'https://goo.gl/maps/LgGiEMA1jNA5rAzt5',
    },
]



export default function Adresses() {
  return (
      <div className="container my-5">
          <div className="row">
              {address.map((ele, i) => <div className="col-xs-12 col-md-4 p-2">
                  <Card imgsrc={ele.imgsrc} title={ele.name} address={ele.adres} href={ ele.href}/>
                </div>)}
          </div>
    </div>
  )
}
