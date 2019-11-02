import React from 'react'
import { Link, RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import LazyLoad from 'react-lazyload';
import PrismicConfig from '../../prismic-configuration';
import styled from 'styled-components'

const Section = styled.section`
  padding: 4rem 0 0rem;
`

const perRow = number => {
	if (number === "6") {
		return "2"
	} else {
		return "3"
	}
}

const Logos = props => (
	<>
		{props.items.map((item, i) =>
			<Col lg={perRow(props.number)} md={`3`} sm={`4`} xs={`6`} key={i}>
				<a href={Link.url(item.link, PrismicConfig.linkResolver)} target={`_blank`} rel={`noopener noreferrer`}>
				<LazyLoad>
					<img src={item.image.url} alt={item.image.alt} className={`img-fluid grow`} />
				</LazyLoad>
				</a>
			</Col>
		)}
	</>
)

const LogoGrid = props => (
	<Section>
		<Container>
			<Row>
				<Col lg="10" className={`mx-auto text-center`}>
					<h3 className={`mb-3`}>{RichText.asText(props.slice.primary.title)}</h3>
					<p className={`lead text-muted mb-0`}>{RichText.asText(props.slice.primary.subtitle )}</p>
				</Col>
			</Row>
			<Row className={props.slice.primary.justification}>
				<Logos items={props.slice.items} number={props.slice.primary.number} />
			</Row>
		</Container>
	</Section>
)
export default LogoGrid
