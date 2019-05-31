import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import LazyLoad from 'react-lazyload';
import PrismicConfig from '../../prismic-configuration';
import { ContentBlock, BlockContainer } from '../../styles';
import LinkSerializer from '../../LinkSerializer';

const ColumnBlocks = props => (
	<>
		{props.items.map((item, i) =>
			<Col md={`4`} key={i}>
				<BlockContainer>
					<LazyLoad>
						<img src={item.icon.url} alt={item.icon.alt} />
					</LazyLoad>
					{RichText.render(item.title)}
					{RichText.render(item.blurb, PrismicConfig.linkResolver, LinkSerializer)}
				</BlockContainer>
			</Col>
		)}
	</>
)

const ThreeColumnBlock = props => (
	<ContentBlock >
		<Container>
			<Row>
				<ColumnBlocks items={props.slice.items} />
			</Row>
		</Container>
	</ContentBlock>
)

export default ThreeColumnBlock
