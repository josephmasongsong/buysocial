import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import LazyLoad from 'react-lazyload';
import PrismicConfig from '../../prismic-configuration';
import { GrayBlock, Person, PersonPhoto, TriangleRed, TriangleBlue } from '../../styles'

const People = props => (
	<>
		{props.items.map((member, i) =>
			<Col sm="3" xs="6" key={i}>
				<Person>
					<LazyLoad>
						<PersonPhoto src={member.image.url} alt={member.image.alt} />
					</LazyLoad>
					{RichText.render(member.name)}
					{RichText.render(member.position)}
				</Person>
			</Col>
		)}
	</>
)

const PeopleContainer = props =>
	<GrayBlock className={`peopleContainer`}>
		<TriangleRed />
		<TriangleBlue />
		<Container>
			<Row>
				<Col lg="12">
					<h3 className={`text-center mb-3`}>{RichText.asText(props.slice.primary.title)}</h3>
					<div className={`text-muted text-center lead mb-0`}>{RichText.render(props.slice.primary.subtitle, PrismicConfig.linkResolver)}</div>
				</Col>
			</Row>
			<Row className={`justify-content-center`}>
				<People items={props.slice.items} />
			</Row>
		</Container>
	</GrayBlock>

export default PeopleContainer
