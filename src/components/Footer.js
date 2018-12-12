import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';
import Prismic from 'prismic-javascript';
import {Link, RichText} from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';

const FooterStyle = styled.div`
  padding: 6rem 0;
  position: relative;
  background-color: #005891;
  color: #fff;
`
const Arrows = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
`
const Address = styled.ul`
  padding-left: 2rem;
`

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: null,
    };
  }
  componentWillMount() {
	  const apiEndpoint = 'https://buy-social-canada.prismic.io/api/v2';
	  Prismic.api(apiEndpoint).then(api => {
	    api.query(Prismic.Predicates.at('document.type', 'footer_navigation')).then(response => {
	      if (response) {
	        this.setState({ doc: response.results[0] });
	      }
	    });
	  });
	}
	render() {
    if (this.state.doc) {
      const document = this.state.doc.data

      const footerNavigation = document.nav.map(function(slice, index){
        if (slice.slice_type === 'nav_item') {
          return(
            <li>
              <a href={Link.url(slice.primary.link, PrismicConfig.linkResolver)} >{RichText.asText(slice.primary.label)}</a>
            </li>
          )
        }
      });
      return(
  			<FooterStyle className="footer">
  				<Arrows src={images.arrowLeft} alt="" />
  				<Container>
  					<Row className="justify-content-center">
  						<Col lg="4" className="mr-auto">
  							<h5 className="mb-4 text-white">Newsletter</h5>
                <p>Enter your email to receive our newsletter. We will never distribute your email to third parties and you may opt-out at any time.</p>
                <div className="input-group mb-5">
                  <input className="form-control py-2 rounded-0" type="search" placeholder="Email"></input>
                  <span className="input-group-append">
                    <button className="btn btn-warning rounded-0" type="button">
                      Sign Up
                    </button>
                  </span>
                </div>


  						</Col>
  						<Col lg="3" className="mx-auto">
  							<h5 className="mb-4 text-white">Contact Information</h5>
                <Address className="fa-ul pl-0">
                  <li className="mb-2"><span className="fa-li"><i className="fas fa-map-marker-alt text-warning"></i></span>Buy Social Canada<br />337 Gore Avenue<br />Vancouver BC, V6A 2Z3<br />CANADA</li>
                  <li className="mb-2"><span className="fa-li"><i className="fas fa-envelope text-warning"></i></span>maija@buysocialcanada.ca</li>
                  <li><span className="fa-li"><i className="fas fa-phone text-warning"></i></span>+1.604.416.0318</li>
                </Address>
  						</Col>
  						<Col lg="2">
  							<h5 className="mb-4 text-white">Navigation</h5>
                <ul className="list-unstyled">
                  {footerNavigation}
                </ul>
  						</Col>
  						<Col lg="2">
  							<h5 className="mb-4 text-white">Social</h5>
                <ul className="social list-inline">
                  <li className="list-inline-item"><i className="fab fa-facebook-f"></i></li>
                  <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                  <li className="list-inline-item"><i className="fab fa-linkedin"></i></li>
                  <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                </ul>
  						</Col>
  					</Row>
  				</Container>
  			</FooterStyle>
  		);

    }
    return null;
	}
}

export default Footer
