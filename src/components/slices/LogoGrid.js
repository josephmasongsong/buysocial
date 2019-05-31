import React from 'react'
import { Link, RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import LazyLoad from 'react-lazyload';
import PrismicConfig from '../../prismic-configuration';
import { ContentBlock } from '../../styles'

const Logos = props => (
	<>
		{props.items.map((item, i) =>
			<Col md={`3`} sm={`4`} xs={`6`} key={i}>
				<a href={Link.url(item.link, PrismicConfig.linkResolver)} target={`_blank`} rel={`noopener noreferrer`}>
				<LazyLoad>
					<img src={item.image.url} alt={item.image.alt} className={`img-fluid`} />
				</LazyLoad>
				</a>
			</Col>
		)}
	</>
)

const LogoGrid = props => (
	<ContentBlock>
		<Container>
			<Row>
				<Col lg="10" className={`mx-auto text-center`}>
					<h3 className={`mb-3`}>{RichText.asText(props.slice.primary.title)}</h3>
					<p className={`lead text-muted mb-0`}>{RichText.asText(props.slice.primary.subtitle )}</p>
				</Col>
			</Row>
			<Row className={`justify-content-center`}>
				<Logos items={props.slice.items} />
			</Row>
		</Container>
	</ContentBlock>
)
export default LogoGrid
