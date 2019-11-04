import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Media } from 'reactstrap'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${props => props.bgColor};
	p {
		font-size: 1.125rem;
  }
  @media (max-width: 575.98px) {
    padding: 3rem 0;
    p {
      font-size: 1rem;
    }
    .fa-ul {
      margin-left: 2em;
    }
  }
`

const ListItems = props => (
	<>
		{props.items.map((item, i) =>
			<li key={i}>
				<span className={`fa-li`} ><i className={`fas fa-check`}></i></span>{RichText.render(item.list_item)}
			</li>
		)}
	</>
)

const BulletList = props => {
	const bgColor = (props.slice.primary.bg_color === "white") ? "#fff" : "#fbfbfb"
	return(
		<Section bgColor={bgColor}>
			<Container>
				<Media className={`align-items-center mb-3`}>
					<Media left>
						<img src={props.slice.primary.icon.url} alt={props.slice.primary.icon.alt} className={`mr-0 mr-sm-3 mb-2 mb-sm-0`} height="64" />
					</Media>
					<Media body>
						<h3 className="mb-0">{RichText.asText(props.slice.primary.title)}</h3>
					</Media>
				</Media>
				<ul className={`fa-ul`}>
					<ListItems items={props.slice.items} />
				</ul>
			</Container>
		</Section>
	)
}
export default BulletList
