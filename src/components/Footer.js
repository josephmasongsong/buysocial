import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';
import Prismic from 'prismic-javascript';
import {Link, RichText} from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { DeviceSize } from '../DeviceSize';

const FooterStyle = styled.div`
  padding: 6rem 0;
  position: relative;
  background-color: #005891;
  color: #fff;
  @media ${DeviceSize.xs} {
    padding: 3rem 0;
  }
`
const Arrows = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  @media ${DeviceSize.xs} {
    width: 140px;
  }
`
const Address = styled.ul`
  padding-left: 2rem;
`
const Header = styled.h5`
  margin-bottom: 1.5rem;
  color: #fff !important;
  @media ${DeviceSize.xs} {
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 0.75rem;
  }
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
	    api.query(Prismic.Predicates.at('document.type', 'footer')).then(response => {
	      if (response) {
	        this.setState({ doc: response.results[0] });
	      }
	    });
	  });
	}
	render() {
    if (this.state.doc) {
      const document = this.state.doc.data

      const footerNavigation = document.body.map(function(slice, index){
        if (slice.slice_type === 'nav_item') {
          return(
            <li key={index}>
              <a href={Link.url(slice.primary.link, PrismicConfig.linkResolver)} >{RichText.asText(slice.primary.label)}</a>
            </li>
          )
        } else {
          return null;
        }
      });
      return(
  			<FooterStyle className="footer">
  				<Arrows src={images.arrowLeft} alt="" />
  				<Container>
  					<Row className="justify-content-center">
  						<Col lg="3" className="mx-auto">
  							<Header>Contact Information</Header>
                <Address className="fa-ul pl-0">
                  <li className="mb-2"><span className="fa-li"><i className="fas fa-map-marker-alt text-warning"></i></span>{RichText.render(document.address)}</li>
                  <li className="mb-2"><span className="fa-li"><i className="fas fa-envelope text-warning"></i></span><a href={"mailto:" + RichText.asText(document.email)} className="text-white">{RichText.asText(document.email)}</a></li>
                  <li><span className="fa-li"><i className="fas fa-phone text-warning"></i></span><a href={"tel:" + RichText.asText(document.phone)} className="text-white">{RichText.asText(document.phone)}</a></li>
                </Address>
  						</Col>
  						<Col lg="2">
  							<Header>Navigation</Header>
                <ul className="list-unstyled">
                  {footerNavigation}
                </ul>
  						</Col>
              <Col lg="4" className="mr-auto">
  							<Header>Newsletter</Header>
                <p>{RichText.asText(document.newsletter_blurb)}</p>
                <form name="newsletter_signup" method="post">
                  <input type="hidden" name="form-name" value="newsletter_signup" />
                  <div className="input-group mb-5">
                    <input name="email" type="email" placeholder="Email" className="form-control py-2 rounded-0" />
                    <span className="input-group-append">
                      <button name="submit" type="submit" className="btn btn-warning rounded-0">
                        Sign Up
                      </button>
                    </span>
                  </div>
                </form>
  						</Col>
              <Col lg="2">
  							<Header>Social</Header>
                <ul className="social list-inline">
                  <li className="list-inline-item"><a className="text-white" href={Link.url(document.facebook_url, PrismicConfig.linkResolver)} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a className="text-white" href={Link.url(document.twitter_url, PrismicConfig.linkResolver)} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a className="text-white" href={Link.url(document.linkedin_url, PrismicConfig.linkResolver)} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                  <li className="list-inline-item"><a className="text-white" href={Link.url(document.instagram_url, PrismicConfig.linkResolver)} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
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
