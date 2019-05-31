import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import { GrayBlock } from '../../styles';

const Columns = props => (
	<>
		{props.items.map((item, i) =>
			<Col md={`4`} key={i} className={`column`}>
				{RichText.render(item.title)}
				{RichText.render(item.blurb)}
			</Col>
		)}
	</>
)

const ThreeColumnGray = props => (
	<GrayBlock>
		<Container>
			<Row>
				<Columns items={props.slice.items} />
			</Row>
		</Container>
	</GrayBlock>
)
export default ThreeColumnGray
