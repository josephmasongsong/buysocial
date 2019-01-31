import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import { DeviceSize } from '../../DeviceSize';
import LazyLoad from 'react-lazyload';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0 0;
	border-top: 1px solid #f8f9fa;
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
  }
`

class LogoGrid extends React.Component {
  render () {
    const items = this.props.slice.items.map(function(item, itemIndex){
      return(
        <Col md="3" sm="4" xs="6" key={itemIndex}>
					<LazyLoad>
          	<img src={item.image.url} alt="" className="img-fluid" />
					</LazyLoad>
        </Col>
      );
    });
    return(
      <ContentBlock>
        <Container>
          <Row>
            <Col lg="10" className="mx-auto text-center">
              <h3 className=" mb-3">{RichText.asText(this.props.slice.primary.title)}</h3>
              <p className="lead text-muted mb-0">{RichText.asText(this.props.slice.primary.subtitle )}</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {items}
          </Row>
        </Container>
      </ContentBlock>
    )
  }
}
export default LogoGrid
