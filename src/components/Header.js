import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import images from '../ThemeImages';

const Masthead = styled.section`
	position: relative;
	height: 600px;
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

const Header = props => {

		return(
			<Masthead>
				<TriangleLarge />
				<TriangleRed />
				<TriangleYellow />
				<Container className="h-100">
					<Row className="h-100 align-items-center">
						<Col lg="8" className="mx-auto">
							<Arrows src={images.arrowRight} alt=""/>
							<h1 className="display-4 mb-3">{props.headline}</h1>
							<p className="lead mb-3">{props.subheader}</p>
							<Button color="warning" size="lg" className="rounded-0">Learn More</Button>
						</Col>
					</Row>
				</Container>
			</Masthead>
		);

}

export default Header
