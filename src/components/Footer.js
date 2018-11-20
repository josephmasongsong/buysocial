import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';

const FooterStyle = styled.div`
  padding: 6rem 0;
  position: relative;
  background-color: #005891;
  color: #fff;
`

const Address = styled.ul`
  padding-left: 2rem;
`

class Footer extends React.Component {
	render() {
		return(
			<FooterStyle className="footer">
				<img src={images.arrowLeft} className="icon-arrow-left" alt="" />
				<Container>
					<Row className="justify-content-center">
						<Col lg="4" className="mr-auto">
							<h5 className="mb-4">Newsletter</h5>
              <p>Enter your email to receive our newsletter. We will never distribute your email to third parties and you may opt-out at any time.</p>
              <div className="input-group mb-5">
                <input className="form-control py-2 rounded-0" type="search" placeholder="Email"></input>
                <span className="input-group-append">
                  <button className="btn btn-buysocial-yellow rounded-0" type="button">
                    Sign Up
                  </button>
                </span>
              </div>


						</Col>
						<Col lg="3" className="mx-auto">
							<h5 className="mb-4">Contact Information</h5>
              <Address className="fa-ul pl-0">
                <li className="mb-2"><span className="fa-li"><i className="fas fa-map-marker-alt"></i></span>Buy Social Canada<br />337 Gore Avenue<br />Vancouver BC, V6A 2Z3<br />CANADA</li>
                <li className="mb-2"><span className="fa-li"><i className="fas fa-envelope"></i></span>maija@buysocialcanada.ca</li>
                <li><span className="fa-li"><i className="fas fa-phone"></i></span>+1.604.416.0318</li>
              </Address>
						</Col>
						<Col lg="2">
							<h5 className="mb-4">Navigation</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#">
                    Certification
                  </a>
                </li>
                <li>
                  <a href="#">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#">
                    News
                  </a>
                </li>
                <li>
                  <a href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#">
                    Contact
                  </a>
                </li>
              </ul>
						</Col>
						<Col lg="2">
							<h5 className="mb-4">Social</h5>
              <ul class="social list-inline">
                <li class="list-inline-item"><i class="fab fa-facebook-f"></i></li>
                <li class="list-inline-item"><i class="fab fa-twitter"></i></li>
                <li class="list-inline-item"><i class="fab fa-linkedin"></i></li>
                <li class="list-inline-item"><i class="fab fa-instagram"></i></li>
              </ul>
						</Col>
					</Row>
				</Container>
			</FooterStyle>
		);
	}
}

export default Footer
