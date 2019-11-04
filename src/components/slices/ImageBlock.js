import React from 'react'
import styled from 'styled-components'
import PrismicConfig from '../../prismic-configuration'
import { Container, Row, Col } from 'reactstrap'
import { RichText } from 'prismic-reactjs'

const Section = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.bgColor};
  @media (max-width: 575.98px) {
    padding: 3rem 0;
  }
`
const Content = styled.div`
  h2,h3,h4,h5 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.125rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .subtext {
    font-size: 1.25rem;
    color: #6c757d;
  }
  a {
    text-decoration: underline;
  }
`

const ImageBlock = props => {
  const bgColor = (props.slice.primary.bg_color === "white") ? "#fff" : "#fbfbfb"

  return(
    <Section bgColor={bgColor}>
      <Container>
        {(props.slice.slice_label === "img-left")
          ?
          <Row className={`${props.slice.primary.alignment}`}>
            <Col md="5" className="mr-auto text-center">
              <img src={props.slice.primary.image.url} alt={props.slice.primary.image.alt} className="img-fluid mb-2 mb-sm-0" />
            </Col>
            <Col md="6">
              <Content>{RichText.render(props.slice.primary.content, PrismicConfig.linkResolver)}</Content>
            </Col>
          </Row>
          :
          <Row className={`${props.slice.primary.alignment}`}>
            <Col md="6">
              <Content>{RichText.render(props.slice.primary.content, PrismicConfig.linkResolver)}</Content>
            </Col>
            <Col md="5" className="ml-auto text-center order-first order-sm-last">
              <img src={props.slice.primary.image.url} alt={props.slice.primary.image.alt} className="img-fluid mb-2 mb-sm-0" />
            </Col>
          </Row>
        }
      </Container>
    </Section>
  )
}

export default ImageBlock
