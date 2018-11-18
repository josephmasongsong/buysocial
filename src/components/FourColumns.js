import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import images from '../ThemeImages';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
`
class FourColumns extends React.Component {
	render() {
		return(
			<ContentBlock>
				<Container>
					<Row>
						<Col lg="3">
							<img src={images.socialShop} alt="" height="64" className="mb-3" />
							<h4 className="text-primary mb-3">Social Procurement Guidebook</h4>
							<p className="mb-3">Systems thinking; theory of change correlation move the needle invest our work expose the truth targeted. Empathetic, inspirational, the contextualize black lives matter cultivate, systems thinking do-gooder granular.</p>
						</Col>
						<Col lg="3">
							<img src={images.heartBrain} alt="" height="64" className="mb-3" />
							<h4 className="text-primary mb-3">Social Procurement Knowledge Base</h4>
							<p className="mb-3">Systems thinking; theory of change correlation move the needle invest our work expose the truth targeted. Empathetic, inspirational, the contextualize black lives matter cultivate, systems thinking do-gooder granular.</p>
						</Col>
						<Col lg="3">
							<img src={images.buildingDollarSign} alt="" height="64" className="mb-3" />
							<h4 className="text-primary mb-3">Social Purchaser Certification</h4>
							<p className="mb-3">Systems thinking; theory of change correlation move the needle invest our work expose the truth targeted. Empathetic, inspirational, the contextualize black lives matter cultivate, systems thinking do-gooder granular.</p>
						</Col>
						<Col lg="3">
							<img src={images.crates} alt="" height="64" className="mb-3" />
							<h4 className="text-primary mb-3">Social Supplier Certification</h4>
							<p className="mb-3">Systems thinking; theory of change correlation move the needle invest our work expose the truth targeted. Empathetic, inspirational, the contextualize black lives matter cultivate, systems thinking do-gooder granular.</p>
						</Col>
					</Row>
				</Container>
			</ContentBlock>
		);
	}
}

export default FourColumns