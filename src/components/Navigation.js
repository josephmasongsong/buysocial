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
									<NavLink href="/who-we-are">Who We Are</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav>
										Certification
									</DropdownToggle>
									<DropdownMenu right>
										<a className="dropdown-item" href="/purchasers">Purchasers</a>
										<a className="dropdown-item" href="/suppliers">Suppliers</a>
									</DropdownMenu>
								</UncontrolledDropdown>
								<NavItem>
									<NavLink href="/library">Knowledge Base</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/">News</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/">Events</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/">Contact</NavLink>
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