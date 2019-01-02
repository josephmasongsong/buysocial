import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`
const BlockContainer = styled.div`
  img, h4,h5,h6  {
    margin-bottom: 1rem;
  }
  img {
    height: 64px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

class ThreeColumnBlock extends React.Component {
  render () {
    const items = this.props.slice.items.map(function(item, itemIndex) {
      return(
        <Col lg="4" key={itemIndex}>
          <BlockContainer>
            <img src={item.icon.url} alt=""/>
            {RichText.render(item.title)}
            {RichText.render(item.blurb)}
          </BlockContainer>
        </Col>
      )
    })
    return(
      <ContentBlock >
        <Container>
          <Row>
            {items}
          </Row>
        </Container>
      </ContentBlock>
    )
  }
}
export default ThreeColumnBlock
