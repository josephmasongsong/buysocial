import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import images from '../ThemeImages';

const FooterStyle = styled.div`
  padding: 6rem 0;
  position: relative;
  background-color: #005891;
  color: #fff;
`

class Footer extends React.Component {
	render() {
		return(
			<FooterStyle className="footer">
				<img src={images.arrowLeft} className="icon-arrow-left" alt="" />
				<Container>
					<Row className="justify-content-center">
						<Col lg="4" className="mr-auto">
							<h5 className="mb-4">Newsletter</h5>
						</Col>
						<Col lg="3">
							<h5 className="mb-4">Contact Information</h5>

						</Col>
						<Col lg="2">
							<h5 className="mb-4">Navigation</h5>

						</Col>
						<Col lg="2">
							<h5 className="mb-4">Social</h5>

						</Col>
					</Row>
				</Container>
			</FooterStyle>
		);
	}
}

export default Footer