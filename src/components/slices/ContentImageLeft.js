import React from 'react'
import styled from 'styled-components'
import { Link, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';
import { Container, Row, Col } from 'reactstrap'
import { DeviceSize } from '../../DeviceSize';
import LazyLoad from 'react-lazyload';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
  h2,h3,h4,h5 {
    margin-bottom: 1rem;
  }
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
  }
`
const BlockImage = styled.img`
	max-width: 100%;
	height: auto;
	width:100%;
	@media ${DeviceSize.xs} {
		margin-bottom: 1rem;
  }
`
const ContentSubTitle = styled.div`
  font-size: 1.25rem;
  color: #6c757d!important;
  margin-bottom: 1rem;
	@media ${DeviceSize.xs} {
		font-size: 1.125rem;
  }
`
const LinkTo = styled.a`
	text-decoration: underline;
  margin-bottom: 0;
  font-size: 1.25rem;
	@media ${DeviceSize.xs} {
		font-size: 1.125rem;
  }
`
const Blurb = styled.div`
	font-size: 1.125rem;
	@media ${DeviceSize.xs} {
		 p {
			 font-size: 1rem;
		 }
  }
`

class ContentImageLeft extends React.Component {
  render() {
    return(
      <ContentBlock>
        <Container>
          <Row>
            <Col lg="5" className="align-self-center mr-auto">
						<LazyLoad>
              <BlockImage src={this.props.slice.primary.image.url} alt=""/>
						</LazyLoad>
            </Col>
            <Col lg="6" className="align-self-center">
              {RichText.render(this.props.slice.primary.title )}
              <ContentSubTitle>{RichText.render(this.props.slice.primary.subtitle )}</ContentSubTitle>
              <Blurb>{RichText.render(this.props.slice.primary.blurb )}</Blurb>
              <LinkTo href={Link.url(this.props.slice.primary.link, PrismicConfig.linkResolver)}>{RichText.asText(this.props.slice.primary.link_label)}</LinkTo>
            </Col>

          </Row>
        </Container>
      </ContentBlock>
    )
  }
}
export default ContentImageLeft
