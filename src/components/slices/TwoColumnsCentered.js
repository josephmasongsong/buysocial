import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'
import { ContentBlock } from '../../styles'

const Columns = props => (
	<>
		{props.items.map((item,i) =>
			<Col lg={`5`} key={i} className={`column`}>
				<Media className={`two-columns`}>
					<Media left>
						<img src={item.icon.url} alt={item.icon.alt} className={`two-columns-icon`} />
					</Media>
					<Media body>
						{RichText.render(item.blurb)}
					</Media>
				</Media>
			</Col>
		)}
	</>
)

const TwoColumnsCentered = props =>
	<ContentBlock>
		<Container>
			<Row className={`justify-content-center`}>
				<Col lg={`10`}>
					<div className={`headerContainer`}>
						{RichText.render(props.slice.primary.title)}
						{RichText.render(props.slice.primary.subtitle)}
					</div>
				</Col>
			</Row>
			<Row className={`justify-content-center`}>
				<Columns items={props.slice.items} />
			</Row>
		</Container>
	</ContentBlock>

export default TwoColumnsCentered
