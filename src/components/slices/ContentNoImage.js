import React from 'react'
import { Link, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';
import { Container, Row, Col } from 'reactstrap'
import { ContentBlock, CalloutButton, ContentBody, Subtitle } from '../../styles';

const ContentNoImage = props =>
	<ContentBlock className={`withImage largeText`}>
		<Container>
			<Row>
				<Col lg={`12`}>
					{
						(props.slice.primary.title.length !== 0)
						?
						RichText.render(props.slice.primary.title)
						:
						null
					}
					{
						(props.slice.primary.subtitle.length !== 0 )
						?
						<Subtitle>{RichText.render(props.slice.primary.subtitle )}</Subtitle>
						:
						null
					}
					<ContentBody>
						{RichText.render(props.slice.primary.body1 )}
					</ContentBody>
					{
						(props.slice.primary.button_link.length !== 0) && (props.slice.primary.button_label.length !==0)
						?
						<CalloutButton href={Link.url(props.slice.primary.button_link, PrismicConfig.linkResolver)} >{RichText.asText(props.slice.primary.button_label)}</CalloutButton>
						:
						null
					}
				</Col>
			</Row>
		</Container>
	</ContentBlock>

export default ContentNoImage
