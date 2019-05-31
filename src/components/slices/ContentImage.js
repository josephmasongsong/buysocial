import React from 'react'
import styled from 'styled-components'
import { Link, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';
import { Container, Row, Col } from 'reactstrap'
import { DeviceSize } from '../../DeviceSize';
import LazyLoad from 'react-lazyload';
import { ContentBlock } from '../../styles'


const BlockImage = styled.img`
	max-width: 100%;
	height: auto;
	width:100%;
	@media ${DeviceSize.xs} {
		margin-bottom: 1rem;
	}
`
const ContentSubTitle = styled.div`
  font-size: 1.25rem;
  color: #6c757d!important;
  margin-bottom: 1rem;
	@media ${DeviceSize.xs} {
		font-size: 1.125rem;
	}
`

const LinkTo = styled.a`
	text-decoration: underline;
  margin-bottom: 0;
  font-size: 1.25rem;
	@media ${DeviceSize.xs} {
		font-size: 1.125rem;
	}
`

const Blurb = styled.div`
	font-size: 1.125rem;
	@media ${DeviceSize.xs} {
		font-size: 1rem;
	}
`

const ContentImage = props =>
	<ContentBlock className={`withImage`}>
		<Container>
			<Row>
				<Col md="6" lg="5" className="align-self-center ml-auto order-sm-12">
				<LazyLoad>
					<BlockImage src={props.slice.primary.image.url} alt=""/>
				</LazyLoad>
				</Col>
				<Col md="6" className="align-self-center order-sm-1">
					{RichText.render(props.slice.primary.title )}
					<ContentSubTitle>{RichText.asText(props.slice.primary.subtitle )}</ContentSubTitle>
					<Blurb>{RichText.render(props.slice.primary.blurb )}</Blurb>
					<LinkTo href={Link.url(props.slice.primary.link, PrismicConfig.linkResolver)} >{RichText.asText(props.slice.primary.link_label)}</LinkTo>
				</Col>

			</Row>
		</Container>
	</ContentBlock>
export default ContentImage
