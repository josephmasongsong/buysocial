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
	DropdownMenu } from 'reactstrap';
import images from '../ThemeImages';
import NavLink from './NavLink';
import {Link, RichText} from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import Burger from 'react-css-burger';
import styles from './navigation.module.scss';
import { Link as RouterLink } from 'react-router-dom';
import { Logo, StyledNavbarBrand } from '../styles';


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
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

	fetchPage(props) {
    if (props.prismicCtx) {

			return props.prismicCtx.api.getSingle('main_navigation', (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }
	render() {
		if (this.state.doc) {

  		const document = this.state.doc.data;

  		const navContent = document.nav.map(function(slice, index){
  			if (slice.slice_type === 'nav_item') {
  				const navItems = slice.items.map(function(navItem, navItemIndex){
						if (typeof navItem.sub_nav_link_lable[0] !== "undefined") {
							return(
								<RouterLink key={navItemIndex} className={`${styles.dropdownItemStyle} dropdown-item`} to={Link.url(navItem.sub_nav_link, PrismicConfig.linkResolver)}>{RichText.asText(navItem.sub_nav_link_lable)}</RouterLink>
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
		      <Container className={styles.containerStyle} fluid>
		        <StyledNavbarBrand to={`/`} className={styles.navbarBrandStyle}><Logo src={images.logo} alt="Buy Social Canada" /></StyledNavbarBrand>
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
