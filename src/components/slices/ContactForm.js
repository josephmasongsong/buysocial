import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Container, Row, Button } from 'reactstrap';

import SimpleReactValidator from 'simple-react-validator'

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

// const CalloutButton = styled.button`
// 	border: ${props => props.outline ? '2px solid #005891' : '1px solid #005891' };
// 	background-color: ${props => props.outline ? 'transparent' : '#005891' };
// 	color: ${props => props.outline ? '#005891' : '#fff' } !important;
// 	text-decoration: none;
// 	font-family: 'Roboto Slab', sans-serif;
// 	font-size: 1.25rem;
// 	line-height: 1.5;
// 	padding: 0.75rem 1.25rem;
// 	cursor: pointer;
// `
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
	      // .then(() => alert("Success!"))
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
				    <form className="w-100" onSubmit={this.handleSubmit}>

				      <div className="form-group">
				        <label>Name</label>
				        <input id="name" name="name" type="text" value={name} onChange={this.handleChange} className="form-control rounded-0 here"/>
								{this.validator.message('name', values.name, 'required')}

				      </div>
				      <div className="form-group">
				        <label>Email</label>
				        <input id="email" name="email" type="text" value={email} onChange={this.handleChange} className="form-control rounded-0 here"/>
								{this.validator.message('email', values.email, 'required|email')}

				      </div>
				      <div className="form-group">
				        <label>Message</label>
				        <textarea id="message" name="message" value={message} onChange={this.handleChange} cols="40" rows="5" className="form-control rounded-0"></textarea>
								{this.validator.message('message', values.message, 'required')}
				      </div>
				      <div className="form-group">
				        <Button name="submit" type="submit" className="btn btn-primary btn-lg rounded-0">Send Message</Button>
				      </div>
				    </form>
					</Row>
				</Container>
			</ContentBlock>
	  )
	}
}

export default withRouter(ContactForm)
