import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'

import { ContentBlock } from '../../styles'

const ListItems = props => (
	<>
		{props.items.map((item, i) =>
			<li key={i}>
				<span className={`fa-li`} ><i className={`fas fa-check`}></i></span>{RichText.render(item.list_item)}
			</li>
		)}
	</>
)

const BulletList = props => (
	<ContentBlock>
		<Container>
			<Row>
				<Col lg={`12`} className={`align-self-center`}>
					<Media className={`align-items-center`}>
						<Media left>
							<img src={props.slice.primary.icon.url} alt={props.slice.primary.icon.alt} />
						</Media>
						<Media body>
							{RichText.render(props.slice.primary.title)}
						</Media>
					</Media>
					<ul className={`fa-ul`}>
						<ListItems items={props.slice.items} />
					</ul>
				</Col>
			</Row>
		</Container>
	</ContentBlock>
)
export default BulletList
