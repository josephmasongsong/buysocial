import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';
import {Link, RichText} from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { DeviceSize } from '../DeviceSize';
import styles from './footer.module.scss';
import { Link as RouterLink } from 'react-router-dom';


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
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

	fetchPage(props) {
    if (props.prismicCtx) {
			return props.prismicCtx.api.getSingle('footer', (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }
	render() {
    if (this.state.doc) {
      const document = this.state.doc.data

      const footerNavigation = document.body.map(function(slice, index){
        if (slice.slice_type === 'nav_item') {
          return(
            <li key={index} style={{ float: 'left', width: '50%' }}>
              <RouterLink style={{ padding: "0 0 1rem 0", display: "block" }} className="text-white" to={Link.url(slice.primary.link, PrismicConfig.linkResolver)} >{RichText.asText(slice.primary.label)}</RouterLink>
            </li>
          )
        } else {
          return null;
        }
      });
      return(
  			<FooterStyle className="footer">
  				<Arrows src={images.arrowLeft} alt="Buy Social Canada" />
  				<Container>
  					<Row>
              <Col sm="6" lg="3">
                <Header>Contact Information</Header>
                <Address className="fa-ul pl-0">
                  <li className="mb-2"><span className={"fa-li " + styles.listStyle}><i className="fas fa-map-marker-alt text-warning"></i></span>{RichText.render(document.address)}</li>
                  <li className="mb-2"><span className={"fa-li " + styles.listStyle}><i className="fas fa-envelope text-warning"></i></span><a href={"mailto:" + RichText.asText(document.email)} className="text-white">{RichText.asText(document.email)}</a></li>
                  <li className="mb-2"><span className={"fa-li " + styles.listStyle}><i className="fas fa-phone text-warning"></i></span><a href={"tel:" + RichText.asText(document.phone)} className="text-white">{RichText.asText(document.phone)}</a></li>
                  <li className="mb-2"><span className={"fa-li " + styles.listStyle}><i className="fab fa-linkedin text-warning"></i></span><a href="https://ca.linkedin.com/company/buy-social-canada-ccc" className="text-white">Like us on Facebook</a></li>
                  <li><span className={"fa-li " + styles.listStyle}><i className="fab fa-twitter text-warning"></i></span><a href="https://twitter.com/buysocialcanada" className="text-white">Follow us on Twitter</a></li>
                </Address>
              </Col>
              <Col sm="6" lg="4" className="mx-auto">
                <Header>Stay Up To Date</Header>
                <p>{RichText.asText(document.newsletter_blurb)}</p>
                <form name="newsletter_signup" method="post">
                  <input type="hidden" name="form-name" value="newsletter_signup" />
                  <label htmlFor="email"></label>
                  <div className="input-group mb-5">
                    <input name="email" type="email" placeholder="Email" className={"form-control rounded-0 " + styles.formStyle} />
                    <span className="input-group-append">
                      <button name="submit" type="submit" className="btn btn-secondary rounded-0">
                        Sign Up
                      </button>
                    </span>
                  </div>
                </form>
              </Col>
              <Col sm="6" lg="4">
                <Header>Navigation</Header>
                <ul className="list-unstyled">
                  {footerNavigation}
                </ul>
              </Col>


              {/* <Col sm="6" lg="2">
  							<Header>Social</Header>
                <ul className="social list-inline">
                  <li className="list-inline-item"><a aria-label="Facebook" className={styles.socialIcon} href={Link.url(document.facebook_url, PrismicConfig.linkResolver)} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a aria-label="Twitter" className={styles.socialIcon} href={Link.url(document.twitter_url, PrismicConfig.linkResolver)} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a aria-label="LinkedIn" className={styles.socialIcon} href={Link.url(document.linkedin_url, PrismicConfig.linkResolver)} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                </ul>
  						</Col> */}
  					</Row>
  				</Container>
  			</FooterStyle>
  		);

    }
    return null;
	}
}

export default Footer
