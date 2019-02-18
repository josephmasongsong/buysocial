import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button, FormGroup, Label } from 'reactstrap';
import { RichText } from 'prismic-reactjs'
import SimpleReactValidator from 'simple-react-validator'
import GoogleMapContainer from './GoogleMapContainer'
import Recaptcha from 'react-recaptcha'

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`
const MapContainer = styled.div`
	width: 100%;
	height: 242px;
  margin-bottom: 1.5rem;
`
const Address = styled.ul`
  padding-left: 0rem;
	margin-left: 1.25rem;
	a {
		color: #005891;
		text-decoration: underline;
	}
`

const encode = (data) => {
   return Object.keys(data)
       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
       .join("&");
 }

class ContactForm extends React.Component {
	constructor(props){
    super(props)
    this.validator = new SimpleReactValidator();
		this.state = {
			name: '',
			email: '',
			message: '',
		}
  }

	handleSubmit = e => {
		e.preventDefault();
		if (this.validator.allValid()) {

			const redirect = this.props.slice.primary.redirect_link.uid

			fetch("/", {
	      method: "POST",
	      headers: { "Content-Type": "application/x-www-form-urlencoded" },
	      body: encode({ "form-name": "contact", ...this.state })
	    })
	      .catch(error => alert(error));
			e.preventDefault();
	    this.props.history.push('/' + redirect);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render () {

		const {
			name,
			email,
			message
		} = this.state;
		const values = {
			name,
			email,
			message
		}
		return(
			<ContentBlock>
				<Container>
					<Row className="justify-content-center">
						<Col lg="4">
							<MapContainer className="mb-4">
								<GoogleMapContainer location={this.props.slice.primary}/>
							</MapContainer>
							<Address className="fa-ul pl-0">
								<li className="mb-1"><span className="fa-li"><i className="fas fa-map-marker-alt text-warning"></i></span>{RichText.render(this.props.slice.primary.readable_address)}</li>
								<li className="mb-1"><span className="fa-li"><i className="fas fa-envelope text-warning"></i></span><a href={"mailto:" + RichText.asText(this.props.slice.primary.email)}>{RichText.asText(this.props.slice.primary.email)}</a></li>
								<li><span className="fa-li"><i className="fas fa-phone text-warning"></i></span><a href={"tel:" + RichText.asText(this.props.slice.primary.phone)}>{RichText.render(this.props.slice.primary.phone)}</a></li>
							</Address>


						</Col>
						<Col lg="7" className="ml-auto">
					    <form className="w-100" onSubmit={this.handleSubmit}>

					      <FormGroup>
					        <Label>Name</Label>
					        <input id="name" name="name" type="text" value={name} onChange={this.handleChange} className="form-control rounded-0 here"/>
									{this.validator.message('name', values.name, 'required')}

					      </FormGroup>
					      <FormGroup>
					        <Label>Email</Label>
					        <input id="email" name="email" type="text" value={email} onChange={this.handleChange} className="form-control rounded-0 here"/>
									{this.validator.message('email', values.email, 'required|email')}

					      </FormGroup>
					      <FormGroup>
					        <Label>Message</Label>
					        <textarea id="message" name="message" value={message} onChange={this.handleChange} cols="40" rows="5" className="form-control rounded-0"></textarea>
									{this.validator.message('message', values.message, 'required')}
					      </FormGroup>
								<Recaptcha
									sitekey="6LfvVZIUAAAAAGDDlgzoR6NGGqA5WKgZHcXoe1vZ"
								/>
					      <FormGroup>
					        <Button color="primary" name="submit" type="submit" className="btn-lg rounded-0 mt-4">Send Message</Button>
					      </FormGroup>

					    </form>
						</Col>
					</Row>
				</Container>
			</ContentBlock>
	  )
	}
}

export default withRouter(ContactForm)
