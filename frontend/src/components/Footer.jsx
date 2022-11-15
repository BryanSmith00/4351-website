import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
<footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>UH Cougar Foods</h5>
              <p>
                We pride ourselves in creating the best foods for UH students and staff.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Hours of operation</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Thursday</span>
                <p>10:00am - 11:00pm</p>
                <span>Friday - Saturday</span>
                <p>11:00am - 1:00am</p>
                <span>Sunday</span>
                <p>11:00am - 9:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: 4800 Calhoun Rd, Houston, TX 77004</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: (832)-444-COOG </span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: UHCougarFoods@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer