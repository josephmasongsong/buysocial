import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import images from './ThemeImages';
import styled from 'styled-components';

import { DeviceSize } from './DeviceSize';
import {
	Arrows,
  Masthead,
	SubTitle,
	Title,
  TriangleLarge,
  TriangleRed,
  TriangleYellow
} from './components/StyledHeader'

const MastheadHome = styled(Masthead)`
	height: 600px;
	@media ${DeviceSize.xs} {
		height: calc(100vh - 96px);
	}
`

export default class NotFound extends React.Component {
  render(){
    return(
      <MastheadHome>
        <TriangleLarge />
        <TriangleRed />
        <TriangleYellow />
        <Container className="h-100">
          <Row className="h-100 justify-content-center">
            <Col lg="12" className="align-self-center">
              <Arrows src={images.arrowRight} alt=""/>
              <Title>Page Not Found</Title>
              <SubTitle>We're sorry, either the link you hit was incorrect or the page has been archived.</SubTitle>
            </Col>
          </Row>
        </Container>
      </MastheadHome>
    )
  }
}
