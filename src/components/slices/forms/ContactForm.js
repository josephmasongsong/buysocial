import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button, FormGroup, Label } from 'reactstrap'
import { RichText } from 'prismic-reactjs'
import SimpleReactValidator from 'simple-react-validator'
import GoogleMapContainer from '../GoogleMapContainer'
import Recaptcha from 'react-recaptcha'
import { ContentBlock, MapContainer, Address } from '../../../styles'

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
								<li className="mb-1"><span className="fa-li"><i className="fas fa-phone text-warning"></i></span><a href="tel:+16044160318">+1.604.416.0318</a></li>
                <li className="mb-1"><span className="fa-li"><i className="fab fa-linkedin text-warning"></i></span><a href="https://ca.linkedin.com/company/buy-social-canada-ccc">Check us out on LinkedIn</a></li>
                <li><span className="fa-li"><i className="fab fa-twitter text-warning"></i></span><a href="https://twitter.com/buysocialcanada">Follow us on Twitter</a></li>
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
