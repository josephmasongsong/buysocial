import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';
import LazyLoad from 'react-lazyload';

import {
	Arrows,
  HeaderImage,
  Masthead,
  TriangleLarge,
  TriangleRed,
  TriangleYellow
} from './StyledHeader'

const SlimHeader = props => {
	const headerImg = props.headerImage;
	let headerContent;


	if (headerImg) {
		headerContent = 	<React.Fragment>
												<Col lg="5" className="align-self-center mx-auto order-sm-12">
												<LazyLoad>
													<HeaderImage src={props.headerImage} alt="" />
												</LazyLoad>
												</Col>
												<Col lg="6" className="align-self-center mx-auto order-sm-1">
													<Arrows src={images.arrowRight} alt=""/>
													<h1 className="display-4  mb-3">{props.headline}</h1>
													<div className="lead mb-0 text-muted">{props.subheader}</div>
												</Col>
											</React.Fragment>
	} else {
		headerContent =
												<Col lg="12" className="align-self-center">
													<Arrows src={images.arrowRight} alt=""/>
													<h1 className="mb-3">{props.headline}</h1>
													<div className="text-muted lead mb-0">{props.subheader}</div>
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
