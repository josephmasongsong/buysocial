import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import images from '../ThemeImages';

const Masthead = styled.section`
	position: relative;
  padding: 6rem 0;
	background: #f8f9fa;
`
const TriangleLarge = styled.div`
	width: 25%;
  height: 100%;
  background: #005891;
  position: absolute;
  top: 0;
  z-index: 1;
  clip-path: polygon(0 0, 0 100%, 50% 50%);
`
const TriangleRed = styled.div`
  width: 12.5%;
  height: 50%;
  background: #D12331;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
`

const TriangleYellow = styled.div`
  width: 12.5%;
  height: 50%;
  background: #D9D458;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
`

const Arrows = styled.img`
  margin-bottom: 1rem!important;
	width: 64px;
`
const HeaderImage = styled.img`
	box-shadow: 0 0 5px rgba(0,0,0,0.2);
	max-width: 100%;
	height: auto;
`

const SlimHeader = props => {
	const headerImg = props.headerImage;
	let img;

	if (headerImg) {
		img =  <Col lg="5" className="align-self-center mx-auto">
		         <HeaderImage src={props.headerImage} alt="" />
		       </Col>
	} else {
		img = null;
	}

	return(
		<Masthead>
			<TriangleLarge />
			<TriangleRed />
			<TriangleYellow />
			<Container className="h-100">
				<Row className="h-100 justify-content-center">
					<Col lg="6" className="align-self-center">
						<Arrows src={images.arrowRight} alt=""/>
						<h1 className="display-4  mb-3">{props.headline}</h1>
						<p className="lead text-muted mb-0">{props.subheader}</p>
					</Col>
					{img}
				</Row>
			</Container>
		</Masthead>
	);
}

export default SlimHeader
