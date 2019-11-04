import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import PrismicConfig from '../../prismic-configuration';

const Section = styled.section`
  padding: 6rem 0 3rem;
  background-color: ${props => props.bgColor};
  .richtext {
    h3 { color: #000 !important; text-align: center }
  }
  @media (max-width: 575.98px) {
    padding: 3rem 0 0;
  }
`

const Column = styled(Col)`
  margin-bottom: 3rem;
  p:last-child {
    margin-bottom: 0;
  }
  a {
    text-decoration: underline;
  }
`

const colSize = label => {
  switch (label) {
    case "col-4":
      return "3"
    case "col-3":
      return "4"
    case "col-2":
      return "6"
    default:
      return "4"
  }
}

const Columns = props => {
  const bgColor = (props.slice.primary.bg_color === "white") ? "#fff" : "#fbfbfb"

  return(
    <Section bgColor={bgColor} >
      <Container>
        <Row>
          {
            ((typeof props.slice.primary.title !== 'undefined' && typeof props.slice.primary.title[0] !== 'undefined') && props.slice.primary.title[0].text )
            &&
            <Col sm="12" className="mb-5 richtext">{RichText.render(props.slice.primary.title)}</Col>
          }
          {props.slice.items && props.slice.items.map((item, i) => (
            <Column md={{ size: colSize(props.slice.slice_label) }} key={i}>
              {item.icon.url && <img src={item.icon.url} alt={item.icon.alt} height="64" className="mb-2" />}
              {RichText.render(item.title)}
              {RichText.render(item.content, PrismicConfig.linkResolver)}
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  )
}

export default Columns
