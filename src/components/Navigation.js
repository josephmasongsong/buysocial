import React, { Component, Fragment } from 'react';
import {
	Container,
	Collapse,
	Navbar,
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

const NavItems = props => {
	return props.slice.items.map((item, i) => {
		if (typeof item.sub_nav_link_lable[0] !== "undefined") {
			return <RouterLink key={i} className={`${styles.dropdownItemStyle} dropdown-item`} to={Link.url(item.sub_nav_link, PrismicConfig.linkResolver)}>{RichText.asText(item.sub_nav_link_lable)}</RouterLink>
		} else {
			return null
		}
	})
}

const NavContent = props => {
	return props.items.map((slice, i) => {
		if (slice.slice_type === 'nav_item') {
			return(
				<Fragment key={i}>
				{
					(slice.items.length > 1)
					?
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav className={"px-3 " + styles.navLinkStyle}>
							{RichText.asText(slice.primary.label)}
						</DropdownToggle>
						<DropdownMenu right className={styles.dropdownStyle}>
							<NavItems slice={slice} />
						</DropdownMenu>
					</UncontrolledDropdown>
					:
					<NavItem>
						<NavLink name={RichText.asText(slice.primary.label)} path={Link.url(slice.primary.link, PrismicConfig.linkResolver)}  />
					</NavItem>
				}
				</Fragment>
			)
		} else {
			return null
		}
	})
}

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
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

	renderNav() {
		if (this.state.doc) {
			const document = this.state.doc.data
			return <NavContent items={document.nav} />
		}
	}

	render() {
    return (
			<Navbar color="white" light expand="lg" className={styles.buysocialNavbar}>
	      <Container className={styles.containerStyle}>
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
							{this.renderNav()}
	          </Nav>
	        </Collapse>
	      </Container>
	    </Navbar>
    );
	}
}

export default Navigation
