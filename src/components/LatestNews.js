import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Prismic from 'prismic-javascript';

const NewsItems = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #f8f9fa;
`
const NewsItem = styled.div`
	position: relative;
`
const TriangleRed = styled.div`
	width: 12.5%;
  height: 50%;
  background: #D12331;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
`
const TriangleBlue = styled.div`
	width: 12.5%;
  height: 50%;
  background: #005891;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
`

class LatestNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			docs: []
		}
	}

	componentWillMount() {
		const apiEndpoint = 'https://buy-social-canada.prismic.io/api/v2';
		 
		Prismic.api(apiEndpoint).then(api => {
		  api.query(
		    Prismic.Predicates.at('document.type', 'blog_post'),
		    { orderings : '[my.blog_post.date desc]' }
		  ).then(response => {
		    this.setState({ docs: response.results });
		  });
		});
	}

	render(){
		return(
			<NewsItems>
				<TriangleRed />
				<TriangleBlue />
				<Container>
					<Row>
						<Col lg="8">
							<h3 className="text-primary mb-4">Latest News & Updates</h3>
						</Col>
					</Row>
					<Row>
						{this.state.docs.map((doc) => {
							return(
								<Col lg="6" key={doc.id}>
									<NewsItem className="mb-3 pb-3 border-bottom">
										<h5>{doc.data.post_title[0].text}</h5>
										<p className="text-muted mb-0">{doc.last_publication_date}</p>
									</NewsItem>
								</Col>
							)
						})}
					</Row>
				</Container>
			</NewsItems>
		);
	}
}

export default LatestNews