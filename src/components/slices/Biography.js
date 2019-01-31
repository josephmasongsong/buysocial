import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
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

const ContentSubTitle = styled.div`
  font-size: 1.25rem;
  color: #6c757d!important;
  margin-bottom: 1rem;
`
const ContentBody = styled.div`
  font-size: 1.125rem;
`

class Biography extends React.Component {
  render() {
    return(
      <ContentBlock>
        <Container>
          <Row>
						<Col lg="2">
							<img src={this.props.slice.primary.image.url} className="img-responsive w-100 rounded-circle" alt="" />
							<h5 className="mt-4 text-center">{RichText.asText(this.props.slice.primary.name)}</h5>
						</Col>
            <Col lg={{ size: 9, offset: 1 }}>

              {
                (this.props.slice.primary.subtitle.length !== 0 )
                ?
                <ContentSubTitle>{RichText.render(this.props.slice.primary.subtitle )}</ContentSubTitle>
                :
                null
              }
              <ContentBody>
                {RichText.render(this.props.slice.primary.blurb )}
              </ContentBody>

            </Col>
          </Row>
        </Container>
      </ContentBlock>
    )
  }
}
export default Biography
