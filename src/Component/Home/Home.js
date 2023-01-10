import React from "react";
import "./Home.css";
import { Button, Container, Card } from "react-bootstrap";
import img from "../Images/DMLogo.png";
import img2 from "../Images/DesignLogo.png";
import img3 from "../Images/ChartBar.png";
import img4 from "../Images/home3.png";
import img5 from "../Images/topICon.png";
import img6 from "../Images/home4.jpg";
import img7 from "../Images/home5.jpg";
import img8 from "../Images/home6.png";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="main">
      <div className="homeSection">
        <div className="introX-3">
          <Container>
            <div className="introX">X</div>
            <div className="introX">X</div>
            <div className="introX">X</div>
            <div className="v-line"></div>
          </Container>
        </div>
        <div className="intro">
          <h4>
            Welcome to the <span> Biz Solution</span>
          </h4>
          <h1>Your Business Goals Meet Our Expertise</h1>
          <p>
            Biz Solution is BD's leading digital marketing agency. Our team
            manages millions of dollars in marketing spend for companies across
            our province, and the globe.
          </p>
          <Button variant="primary">Book Demo</Button>
        </div>
      </div>
      <div className="serviceSection mt-4">
        <div>
          <h1 className="text-center">What We Do</h1>
        </div>
      </div>
      <div className="cardSection d-flex justify-content-around m-5">
        <div>
          <Card className="cardsec" style={{ width: "18rem" }}>
            <Card.Img
              className="CardIcon"
              style={{ width: "62px", height: "62px", margin: "10px" }}
              src={img}
            />
            <Card.Body>
              <Card.Title>Digital Marketing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cardsec" style={{ width: "18rem" }}>
            <Card.Img
              className="CardIcon"
              style={{ width: "62px", height: "62px", margin: "10px" }}
              src={img2}
            />
            <Card.Body>
              <Card.Title>Web Design & Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cardsec" style={{ width: "18rem" }}>
            <Card.Img
              className="CardIcon"
              style={{ width: "62px", height: "62px", margin: "10px" }}
              src={img3}
            />
            <Card.Body>
              <Card.Title>Lead Generation</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="aboutSection1 d-flex align-items-center">
        <div>
          <img
            className="HomeImage ml-3"
            style={{ width: "600px", height: "500px", marginLeft: "50px" }}
            src={img4}
            alt=""
          />
        </div>
        <div className="m-5">
          <h1>Build Your Online Presence</h1>
          <p>
            When people are looking for you, what do they find? Your web
            presence is foundational to all your other digital marketing
            efforts. OpenSail helps manage and maintain your social identity so
            you always look your best.
          </p>
          <Button variant="primary">Learn More</Button>
        </div>
      </div>
      <div className="aboutSection2 d-flex align-items-center">
        <div className="m-5">
          <h1>Build Your Online Presence</h1>
          <p>
            When people are looking for you, what do they find? Your web
            presence is foundational to all your other digital marketing
            efforts. OpenSail helps manage and maintain your social identity so
            you always look your best.
          </p>
          <Button variant="primary">Learn More</Button>
        </div>
        <div>
          <img
            className="HomeImage ml-3"
            style={{ width: "600px", height: "500px", marginLeft: "50px" }}
            src={img4}
            alt=""
          />
        </div>
      </div>
      <div className="iconTop ">
        <div>
          <img style={{ width: "120px", height: "120px" }} src={img5} alt="" />
        </div>
        <div className="text-center">
          <h1>Meet Our Digital Advertising Specialists</h1>
          <p>
            We have a growing team who are experts in digital advertising. From
            Facebook to Google, to Instagram to LinkedIn, we have the knowledge
            to run a campaign that will impress.
          </p>
          <Button className="mb-5" variant="light">
            Learn More
          </Button>
        </div>
      </div>
      <div className="aboutSection3 d-flex ">
        <div className="AS3 services">
          <Card>
            <Card.Img variant="top" src={img6} />
            <Card.Body className="AS3Content">
              <Card.Title className="BodyText">About Us</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="AS3 services">
          <Card>
            <Card.Img variant="top" src={img8} />
            <Card.Body className="AS3Content">
              <Card.Title className="BodyText">Services</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="AS3 services">
          <Card>
            <Card.Img variant="top" src={img7} />
            <Card.Body className="AS3Content">
              <Card.Title className="BodyText">Contact</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="lastSection text-center  h-100 bg-primary ">
        <div>
          <h1>Launch Your Next Project</h1>
          <p>
            Take your business to the next level and get Canada's leading
            advertising agency on your next campaign.
          </p>
          <Button className="mb-5" variant="primary">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
