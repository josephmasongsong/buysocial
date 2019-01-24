import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../../prismic-configuration';
import { Col, Row, Container } from 'reactstrap';
import styled from 'styled-components';
import { DeviceSize } from '../../DeviceSize';
import { RichText } from 'prismic-reactjs';


const LinkToArticle = styled.a`
	color: #343a40;
	&:hover {
		text-decoration: none;
	}
`
const NewsItems = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #fbfbfb;
	border-top: 1px solid #f8f9fa;
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
	}
`
const TriangleRed = styled.div`
	width: 10%;
  height: 50%;
  background: #D12331;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  clip-path: polygon(0% 50%, 0% 100%, 100% 100%);
	@media ${DeviceSize.xs} {
		width: 20%;
		height: 20%;
  }
`
const TriangleBlue = styled.div`
	width: 10%;
  height: 50%;
  background: #005891;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 50%, 0% 0%, 100% 0%);
	@media ${DeviceSize.xs} {
		width: 20%;
		height: 20%;
  }
`

class RecentArticles extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null
    }
  };
  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'blog_post'),{ orderings: '[my.blog_post.publication_date desc]', pageSize: 4, fetchLinks: 'author.name' }).then(response => {
        if (response) {
          this.setState({
            doc: response.results,
          });
        }
      });
    });
  }
  render(){
    if (this.state.doc) {
      const document = this.state.doc;
      const recent = document.map(function(post, postIndex){

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    		const pubDate = new Date(post.data.publication_date)
    		return(
    			<Col lg="6" key={postIndex}>
    				<div className="mb-3 pb-3 border-bottom">
    					<LinkToArticle href={/news/ + post.uid}><h5 className="text-dark">{RichText.asText(post.data.post_title)}</h5></LinkToArticle>
    					<p className="text-muted mb-0">By {RichText.asText(post.data.author.data.name)} | {pubDate.toLocaleDateString("en-US", options)}</p>
    				</div>
    			</Col>
    		)

      })
      return(
        <NewsItems>
          <TriangleRed />
          <TriangleBlue />
          <Container>
            <Row>
              <Col lg="8">
                <h3 className="mb-5">Latest Articles</h3>
              </Col>
            </Row>
            <Row>
              {recent}
            </Row>
          </Container>
        </NewsItems>
      )
    }
    return null;
  }
}

export default RecentArticles;
