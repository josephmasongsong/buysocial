import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';
import LazyLoad from 'react-lazyload';

import {
	Arrows,
  HeaderImage,
  Masthead,
	SubTitle,
	Title,
  TriangleLarge,
  TriangleRed,
  TriangleYellow
} from './StyledHeader'

const SlimHeader = props => {
	const headerImg = props.headerImage;
	let headerContent;


	if (headerImg) {
		headerContent = 	<React.Fragment>
												<Col md="5" lg="5" className="align-self-center mx-auto order-sm-12">
												<LazyLoad>
													<HeaderImage src={props.headerImage} alt="" />
												</LazyLoad>
												</Col>
												<Col md="7" lg="6" className="align-self-center mx-auto order-sm-1">
													<Arrows src={images.arrowRight} alt=""/>
													<Title>{props.headline}</Title>
													<SubTitle>{props.subheader}</SubTitle>
												</Col>
											</React.Fragment>
	} else {
		headerContent =
												<Col lg="12" className="align-self-center">
													<Arrows src={images.arrowRight} alt=""/>
													<Title>{props.headline}</Title>
													<SubTitle>{props.subheader}</SubTitle>
												</Col>

	}

	return(
		<Masthead>
			<TriangleLarge />
			<TriangleRed />
			<TriangleYellow />
			<Container className="h-100">
				<Row className="h-100 justify-content-center">
					{headerContent}
				</Row>
			</Container>
		</Masthead>
	);
}

export default SlimHeader
