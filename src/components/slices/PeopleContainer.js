import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'

const Person = styled.div`
	text-align: center;
	margin-top: 3rem;
	h4,h5,h6 {
		color: #343a40! important;
	}
	p {
		color: #6c757d !important;
		margin-bottom: 0;
	}
`
const PersonPhoto = styled.img`
	border-radius: 50px;
	margin-bottom: 1rem;
	height: 100px;
	width: 100px;
`
const GrayBlock = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #fbfbfb;
	border-top:1px solid #f8f9fa;
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

class PeopleContainer extends React.Component {
  render () {
    const members = this.props.slice.items.map(function(member, memberIndex){
      return(
        <Col lg="3" key={memberIndex}>
          <Person>
            <PersonPhoto src={member.image.url} alt="" />
            {RichText.render(member.name)}
            {RichText.render(member.position)}
          </Person>
        </Col>
      );
    });
    return(
      <GrayBlock>
        <TriangleRed />
        <TriangleBlue />
        <Container>
          <Row>
            <Col lg="12">
              <h3 className="text-center mb-3">{RichText.asText(this.props.slice.primary.title)}</h3>
              <p className="text-muted text-center lead mb-0">{RichText.asText(this.props.slice.primary.subtitle)}</p>
            </Col>
          </Row>
          <Row>
            {members}
          </Row>
        </Container>
      </GrayBlock>
    )
  }
}
export default PeopleContainer