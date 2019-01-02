import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'

const GrayBlock = styled.div`
	padding: 6rem 0 3rem 0;
	position: relative;
	background: #fbfbfb;
	border-top:1px solid #f8f9fa;
  .column {
    margin-bottom: 3rem;
    h4,h5,h6 {
      margin-bottom: 1rem;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
`

class ThreeColumnGray extends React.Component {
    render () {
      const items = this.props.slice.items.map((item, itemIndex) => {
        return(
          <Col lg="4" key={itemIndex} className="column">
            {RichText.render(item.title)}
            {RichText.render(item.blurb)}
          </Col>
        )
      })
      return(
        <GrayBlock>
            <Container>
              <Row>
                {items}
              </Row>
            </Container>
        </GrayBlock>
      )
    }
}
export default ThreeColumnGray
