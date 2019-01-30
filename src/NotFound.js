import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import images from './ThemeImages';
import { DeviceSize } from './DeviceSize';

const Masthead = styled.section`
	position: relative;
  padding: 6rem 0;
	background: #fbfbfb;
	p:last-child {
		margin-bottom: 0;
	}
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
  }
`
const TriangleLarge = styled.div`
	width: 20%;
  height: 100%;
  background: #005891;
  position: absolute;
  top: 0;
  z-index: 1;
  clip-path: polygon(0 0, 0 100%, 50% 50%);
	@media ${DeviceSize.xs} {
    display: none;
  }
`
const TriangleRed = styled.div`
  width: 10%;
  height: 50%;
  background: #D12331;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
	@media ${DeviceSize.xs} {
		width: 20%;
    height: 15%;
  }
`

const TriangleYellow = styled.div`
  width: 10%;
  height: 50%;
  background: #D9D458;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
	@media ${DeviceSize.xs} {
		width: 20%;
    height: 15%;
  }
`

const Arrows = styled.img`
  margin-bottom: 1rem!important;
	width: 64px;
	@media ${DeviceSize.xs} {
		width: 48px;
  }
`

export default class NotFound extends React.Component {
  render(){
    return(
      <Masthead>
        <TriangleLarge />
        <TriangleRed />
        <TriangleYellow />
        <Container className="h-100">
          <Row className="h-100 justify-content-center">
            <Col lg="12" className="align-self-center">
              <Arrows src={images.arrowRight} alt=""/>
              <h1 className="mb-3">Page Not Found</h1>
              <div className="text-muted lead mb-0">We're sorry, either the link you hit was incorrect or the page has been archived.</div>
            </Col>
          </Row>
        </Container>
      </Masthead>
    )
  }
}
