import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
  .headerContainer {
    text-align: center;
    margin-bottom: 3rem;
    h1,h2,h3 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
      color: #6c757d!important;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  img {
    width: 64px;
    margin-right: 1rem;
  }
  .media {
    margin-bottom: 1.5rem;
    .media-body {
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
  .column:nth-last-child(-n+2) {
    .media {
      margin-bottom: 0;
    }
  }
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

class TwoColumnsCentered extends React.Component {
  render () {
    const items = this.props.slice.items.map(function(item, itemIndex){
      return(
        <Col lg="5" key={itemIndex} className="column">
          <Media>
            <Media left>
              <img src={item.icon.url} alt="" />
            </Media>
            <Media body>
              {RichText.render(item.blurb)}
            </Media>
          </Media>
        </Col>
      )
    });
    return(
      <ContentBlock>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <div className="headerContainer">
                {RichText.render(this.props.slice.primary.title)}
                {RichText.render(this.props.slice.primary.subtitle)}
              </div>
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
export default TwoColumnsCentered
