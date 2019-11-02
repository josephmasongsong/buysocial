import React from 'react'
import styled from 'styled-components'
import PrismicConfig from '../../prismic-configuration'
import { Container, Row, Col } from 'reactstrap'
import { RichText } from 'prismic-reactjs'

const Section = styled.section`
  padding: 6rem 0;
  p {
    font-size: 1.125rem;
  }
`

const VideoEmbed = props => {

  return(
    <Section className={`${props.slice.primary.bg_color}`}>
      <Container>
        {(props.slice.slice_label === "vid-left")
          ?
          <Row className={`${props.slice.primary.alignment}`}>
            <Col md="5" className="mr-auto">
              <div dangerouslySetInnerHTML={{ __html: props.slice.primary.video_url.html }} style={{ maxWidth: '100%' }} />
            </Col>
            <Col md="6">
              {RichText.render(props.slice.primary.content, PrismicConfig.linkResolver)}
            </Col>
          </Row>
          :
          <Row className={`${props.slice.primary.alignment}`}>
            <Col md="6">
              {RichText.render(props.slice.primary.content, PrismicConfig.linkResolver)}
            </Col>
            <Col md="5" className="ml-auto">
              <div dangerouslySetInnerHTML={{ __html: props.slice.primary.video_url.html }} style={{ maxWidth: '100%' }}  />
            </Col>
          </Row>
        }
      </Container>
    </Section>
  )
}

export default VideoEmbed
