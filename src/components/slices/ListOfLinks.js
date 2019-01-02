import React from 'react'
import styled from 'styled-components'
import { Link, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';
import { Container, Row, Col } from 'reactstrap'

const GrayBlock = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #fbfbfb;
  h1,h2,h3 {
    margin-bottom: 3rem;
  }
`
const LinkContainer = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6 !important;
  h3,h4,h5 {
    maring-bottom: 0.5rem;
    color: #343a40!important;
  }
  p {
    color: #6c757d!important;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
const LinkTo = styled.a`
	color: #343a40;
	&:hover {
		text-decoration: none;
	}
`
const TriangleRed = styled.div`
	width: 10%;
  height: 50%;
  background: #D12331;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  clip-path: polygon(0% 50%, 0% 100%, 100% 100%);
`
const TriangleBlue = styled.div`
	width: 10%;
  height: 50%;
  background: #005891;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 50%, 0% 0%, 100% 0%);
`

class ListOfLinks extends React.Component {
  render () {
    const items = this.props.slice.items.map(function(item, itemIndex){
      return(
        <Col lg="6" key={itemIndex}>
  				<LinkContainer>
  					<LinkTo href={Link.url(item.link, PrismicConfig.linkResolver)}>{RichText.render(item.title)}</LinkTo>
            {RichText.render(item.description)}
  				</LinkContainer>
  			</Col>
      );
    });
    return(
      <GrayBlock>
        <TriangleRed />
        <TriangleBlue />
        <Container>
          <Row>
            <Col lg="8">
              {RichText.render(this.props.slice.primary.title)}
            </Col>
          </Row>
          <Row>
            {items}
          </Row>
        </Container>
      </GrayBlock>
    );
  }
}
export default ListOfLinks
