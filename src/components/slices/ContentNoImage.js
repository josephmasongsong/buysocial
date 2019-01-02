import React from 'react'
import styled from 'styled-components'
import { Link, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';
import { Container, Row, Col } from 'reactstrap'

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
  h2,h3,h4,h5 {
    margin-bottom: 1rem;
  }
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`
const CalloutButton = styled.a`
	border: ${props => props.outline ? '2px solid #005891' : '1px solid #005891' };
	background-color: ${props => props.outline ? 'transparent' : '#005891' };
	color: ${props => props.outline ? '#005891' : '#fff' } !important;
	text-decoration: none;
	font-family: 'Roboto Slab', sans-serif;
	font-size: 1.25rem;
	line-height: 1.5;
	text-align: center;
	padding: 0.75rem 1.25rem;
	cursor: pointer;
  margin-top: 1.5rem;
  display: inline-block;
	&:hover {
		text-decoration: none;
	}
`
const ContentSubTitle = styled.div`
  font-size: 1.5rem;
  color: #6c757d!important;
  margin-bottom: 1rem;
`
const ContentBody = styled.div`
  font-size: 1.125rem;
`

class ContentNoImage extends React.Component {
  render() {
    return(
      <ContentBlock>
        <Container>
          <Row>
            <Col lg="12">
              {
                (this.props.slice.primary.title.length !== 0)
                ?
                RichText.render(this.props.slice.primary.title)
                :
                null
              }
              {
                (this.props.slice.primary.subtitle.length !== 0 )
                ?
                <ContentSubTitle>{RichText.render(this.props.slice.primary.subtitle )}</ContentSubTitle>
                :
                null
              }
              <ContentBody>
                {RichText.render(this.props.slice.primary.body1 )}
              </ContentBody>
              {
                (this.props.slice.primary.button_link.length !== 0) && (this.props.slice.primary.button_label.length !==0)
                ?
                <CalloutButton href={Link.url(this.props.slice.primary.button_link, PrismicConfig.linkResolver)} >{RichText.asText(this.props.slice.primary.button_label)}</CalloutButton>
                :
                null
              }
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    )
  }
}
export default ContentNoImage
