import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import images from '../ThemeImages';
import { DeviceSize } from '../DeviceSize';

const Masthead = styled.section`
	position: relative;
  padding: 6rem 0;
	background: #f8f9fa;
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
const HeaderImage = styled.img`
	box-shadow: 0 0 5px rgba(0,0,0,0.2);
	max-width: 100%;
	height: auto;
	@media ${DeviceSize.xs} {
		margin-bottom: 1.5rem;
		z-index: 2;
		position: relative;
  }
`
const Header = styled.h1`
	margin-bottom: 1rem;
	@media ${DeviceSize.xs} {
		font-size: 2rem;
	}
`
const BlogHeader = props => {
	const headerImg = props.headerImage;
	let headerContent;


	if (headerImg) {
		headerContent = 	<Row className="h-100 justify-content-center">
												<Col lg="5" className="align-self-center mx-auto order-sm-12">
													<HeaderImage src={props.headerImage} alt="" />
												</Col>
												<Col lg="6" className="align-self-center mx-auto order-sm-1">
													<Arrows src={images.arrowRight} alt=""/>
													<Header>{props.headline}</Header>
													<p className="text-muted lead mb-0">By {props.author} | {props.pubdate}</p>
												</Col>
											</Row>
	} else {
		headerContent = 	<Col lg="12" className="align-self-center">
												<Arrows src={images.arrowRight} alt=""/>
												<Header>{props.headline}</Header>
												<div className="text-muted lead mb-0">{props.subheader}</div>
											</Col>
	}

	return(
		<Masthead>
			<TriangleLarge />
			<TriangleRed />
			<TriangleYellow />
			<Container className="h-100">
				{headerContent}
			</Container>
		</Masthead>
	);
}

export default BlogHeader
