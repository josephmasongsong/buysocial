import React from 'react';
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu } from 'reactstrap';
import images from '../ThemeImages';
import styled from 'styled-components';


class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {

		return(
			<div>
				<Navbar color="white" light fixed="top" expand="lg" className="buysocial-navigation">
					<Container>
						<NavbarBrand href="/"><img src={images.logo} alt="Buy Social Canada" /></NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink className="px-3" href="/about-buy-social-canada">Who We Are</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav className="px-3">
										Certification
									</DropdownToggle>
									<DropdownMenu right>
										<a className="dropdown-item" href="/social-purchaser-certification">Purchasers</a>
										<a className="dropdown-item" href="/social-enterprise-certification">Suppliers</a>
									</DropdownMenu>
								</UncontrolledDropdown>
								<NavItem>
									<NavLink href="/library" className="px-3">Knowledge Base</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/" className="px-3">News</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/" className="px-3">Events</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/" className="px-3">Contact</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default Navigation
