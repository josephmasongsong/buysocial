import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
`
const ThreeColumns = props => {
	return(
		<ContentBlock>
			<Container>
				<Row>
					<Col lg="4">
						<img src={props.firstIcon} alt="" height="64" className="mb-3" />
						<h4 className="text-primary mb-3">{props.firstHeader}</h4>
						<p className="mb-0">{props.firstBlurb}</p>
					</Col>
					<Col lg="4">
						<img src={props.secondIcon} alt="" height="64" className="mb-3" />
						<h4 className="text-primary mb-3">{props.secondHeader}</h4>
						<p className="mb-0">{props.secondBlurb}</p>
					</Col>
					<Col lg="4">
						<img src={props.thirdIcon} alt="" height="64" className="mb-3" />
						<h4 className="text-primary mb-3">{props.thirdHeader}</h4>
						<p className="mb-0">{props.thirdBlurb}</p>
					</Col>
				</Row>
			</Container>
		</ContentBlock>
	);
}


export default ThreeColumns