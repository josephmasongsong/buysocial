import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';

import {
	Arrows,
	Header,
  HeaderImage,
  Masthead,
  TriangleLarge,
  TriangleRed,
  TriangleYellow,
	TriangleBlueTwo
} from './StyledHeader'


const BlogHeader = props => {
	const headerImg = props.headerImage;
	let headerContent;


	if (headerImg) {
		headerContent = 	<React.Fragment>
												<Col lg="5" className="align-self-center mx-auto order-sm-12">
													<HeaderImage src={props.headerImage} alt="" />
												</Col>
												<Col lg="6" className="align-self-center mx-auto order-sm-1">
													<Arrows src={images.arrowRight} alt=""/>
													<Header>{props.headline}</Header>
													<p className="text-muted lead mb-0">By {props.author} | {props.pubdate}</p>
												</Col>
											</React.Fragment>
	} else {
		headerContent = 	<Col lg="12" className="align-self-center">
												<Arrows src={images.arrowRight} alt=""/>
												<Header>{props.headline}</Header>
												<div className="text-muted lead mb-0">{props.subheader}</div>
											</Col>
	}

	return(
		<Masthead>
			<TriangleBlueTwo />
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

export default BlogHeader
