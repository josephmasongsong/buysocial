import React, { Component, Fragment } from 'react';
import {
	Container,
	Collapse,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu } from 'reactstrap';
import images from '../ThemeImages';
import styled from 'styled-components';
import NavLink from './NavLink';
import Prismic from 'prismic-javascript';
import {Link, RichText} from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import Burger from 'react-css-burger';
import styles from './navigation.module.scss';

const Logo = styled.img`
	width: 84px;
`
class Navigation extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			doc: null
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	componentWillMount() {
	  const apiEndpoint = 'https://buy-social-canada.prismic.io/api/v2';
	  Prismic.api(apiEndpoint).then(api => {
	    api.query(Prismic.Predicates.at('document.type', 'main_navigation')).then(response => {
	      if (response) {
	        this.setState({ doc: response.results[0] });
	      }
	    });
	  });
	}
	render() {
		if (this.state.doc) {

  		const document = this.state.doc.data;

  		const navContent = document.nav.map(function(slice, index){
  			if (slice.slice_type === 'nav_item') {
  				const navItems = slice.items.map(function(navItem, navItemIndex){
						if (typeof navItem.sub_nav_link_lable[0] !== "undefined") {
							return(
								<DropdownItem key={navItemIndex} className={styles.dropdownItemStyle} tag="a" href={Link.url(navItem.sub_nav_link, PrismicConfig.linkResolver)}>{navItem.sub_nav_link_lable[0].text}</DropdownItem>
	  					);
						} else {
							return null;
						}
  				});

  				return(
						<Fragment key={index}>
						{
							(slice.items.length > 1)
							?
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav className={"px-4 " + styles.navLinkStyle}>
									{RichText.asText(slice.primary.label)}
								</DropdownToggle>
								<DropdownMenu right className={styles.dropdownStyle}>
									{navItems}
								</DropdownMenu>
							</UncontrolledDropdown>
							:
							<NavItem>
	              <NavLink name={RichText.asText(slice.primary.label)} path={Link.url(slice.primary.link, PrismicConfig.linkResolver)}  />
	            </NavItem>
						}
						</Fragment>
  				);
  			} else {
  				return null;
  			}
  		});

	    return (
				<Navbar color="white" light expand="lg" className={styles.buysocialNavbar}>
		      <Container className={styles.containerStyle}>
		        <NavbarBrand href="/" className={styles.navbarBrandStyle}><Logo src={images.logo} alt="Buy Social Canada" /></NavbarBrand>
						<div className={"navbar-toggler " + styles.togglerStyle}>
							<Burger
				        onClick={this.toggle}
				        active={this.state.isOpen}
								burger="squeeze"
								color="#005891"
								hoverOpacity={0.8}
								scale={1}
								marginTop='0.625rem'
				      />
						</div>
		        <Collapse isOpen={this.state.isOpen} navbar>
		          <Nav className="ml-auto" navbar>
								{navContent}
		          </Nav>
		        </Collapse>
		      </Container>
		    </Navbar>
	    );
  	}
		return(
			<Navbar color="white" light expand="lg" className="buysocial-navigation">
	      <Container>
	        <NavbarBrand href="/"><Logo src={images.logo} alt="Buy Social Canada" /></NavbarBrand>
	      </Container>
	    </Navbar>
		)
	}
}

export default Navigation
