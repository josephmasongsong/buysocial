import React from 'react'
import { Link, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';
import { Container, Row, Col } from 'reactstrap'
import LazyLoad from 'react-lazyload';
import { ContentBlock, BlockImage, ContentSubTitle, LinkTo, Blurb } from '../../styles';

const ContentImageLeft = props => (
	<ContentBlock className={`withImage`}>
		<Container>
			<Row>
				<Col md={`6`} lg={`5`} className={`align-self-center mr-auto`}>
				<LazyLoad>
					<BlockImage src={props.slice.primary.image.url} alt={props.slice.primary.image.alt} />
				</LazyLoad>
				</Col>
				<Col md={`6`} className={`align-self-center`}>
					{RichText.render(props.slice.primary.title )}
					<ContentSubTitle>{RichText.render(props.slice.primary.subtitle )}</ContentSubTitle>
					<Blurb>{RichText.render(props.slice.primary.blurb )}</Blurb>
					<LinkTo href={Link.url(props.slice.primary.link, PrismicConfig.linkResolver)}>{RichText.asText(props.slice.primary.link_label)}</LinkTo>
				</Col>
			</Row>
		</Container>
	</ContentBlock>
)
export default ContentImageLeft
