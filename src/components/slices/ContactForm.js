import React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap';
import { RichText } from 'prismic-reactjs';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`
const ContentBody = styled.div`
	font-size: 1.125rem;
	margin-bottom: 3rem;
`

const CalloutButton = styled.button`
	border: ${props => props.outline ? '2px solid #005891' : '1px solid #005891' };
	background-color: ${props => props.outline ? 'transparent' : '#005891' };
	color: ${props => props.outline ? '#005891' : '#fff' } !important;
	text-decoration: none;
	font-family: 'Roboto Slab', sans-serif;
	font-size: 1.25rem;
	line-height: 1.5;
	padding: 0.75rem 1.25rem;
	cursor: pointer;
`

class ContactForm extends React.Component {
	render () {
		return(
			<ContentBlock>
				<Container>
					<Row className="justify-content-center">
						<ContentBody>
							{RichText.render(this.props.slice.primary.form_blurb)}
						</ContentBody>
				    <form className="w-100" name="contact" method="post">
				      <input type="hidden" name="form-name" value="contact" />
				      <div className="form-group">
				        <label>Name</label>
				        <input id="name" name="name" type="text" className="form-control rounded-0 here" required="required"/>
				      </div>
				      <div className="form-group">
				        <label>Email</label>
				        <input id="email" name="email" type="text" required="required" className="form-control rounded-0 here"/>
				      </div>
				      <div className="form-group">
				        <label>Message</label>
				        <textarea id="message" name="message" cols="40" rows="5" required="required" className="form-control rounded-0"></textarea>
				      </div>
				      <div className="form-group">
				        <CalloutButton name="submit" type="submit" className="btn btn-primary btn-lg rounded-0">Send Message</CalloutButton>
				      </div>
				    </form>
					</Row>
				</Container>
			</ContentBlock>
	  )
	}
}

export default ContactForm
