import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import { DeviceSize } from '../../DeviceSize';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
  h2,h3,h4,h5 {
    margin-bottom: 1rem;
  }
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
	@media ${DeviceSize.md} {
		padding: 3rem 0;
	}
`
const Image = styled.img`
	max-width:100%;
	width: 120px;
	border-radius: 50%;
	margin-bottom: 1.5rem;
`

const ContentSubTitle = styled.div`
  font-size: 1.25rem;
  color: #6c757d!important;
  margin-bottom: 1rem;
`
const ContentBody = styled.div`
  font-size: 1.125rem;
`


const Biography = props =>
	<ContentBlock>
		<Container>
			<Row>
				<Col lg={`2`} md={`3`} className={`text-center`}>
					<Image src={props.slice.primary.image.url}/>
					<h5 className={`text-center`}>{RichText.asText(props.slice.primary.name)}</h5>
				</Col>
				<Col lg={{ size: 9, offset: 1 }} md={{ size: 9, offset: 0 }}>

					{
						(props.slice.primary.subtitle.length !== 0 )
						?
						<ContentSubTitle>{RichText.render(props.slice.primary.subtitle )}</ContentSubTitle>
						:
						null
					}
					<ContentBody>
						{RichText.render(props.slice.primary.blurb )}
					</ContentBody>

				</Col>
			</Row>
		</Container>
	</ContentBlock>

export default Biography
