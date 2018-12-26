import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link, RichText } from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import BlogHeader from './components/BlogHeader'
import styled from 'styled-components';
import { DeviceSize } from './DeviceSize';
import RecentArticles from './components/RecentArticles';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	border-bottom: 1px solid #f8f9fa;
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
	}
`
const NewsItems = styled.div`
	padding: 6rem 0;
	position: relative;
	/* background: #f8f9fa; */
	background: #fbfbfb;
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
`

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
      notFound: false,
    }
  }
  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('blog_post', props.match.params.uid, {'fetchLinks': ['author.name', 'post_tag.name']}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {

    if (this.state.doc) {
      const document = this.state.doc.data;
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const pubDate = new Date(this.state.doc.data.publication_date)
			const postTags = document.post_tags.map(function(tag, tagIndex){
				return(
					<Badge color="primary" href={Link.url(tag.post_tag, PrismicConfig.linkResolver)} key={tagIndex} className="text-white mr-2">
						{tag.post_tag.data.name[0].text}
					</Badge>
				)
			});
      return(
        <div>
          <Helmet>
            <title>{RichText.asText(document.post_title) + " - Buy Social Canada"}</title>
            <meta name="description" content={RichText.asText(document.post_excerpt)} />
            <meta name="og:image" content={document.post_image.url} />
          </Helmet>
					<BlogHeader headline={RichText.asText(document.post_title)} author={RichText.asText(document.author.data.name)} pubdate={pubDate.toLocaleDateString("en-US", options)} />
          <ContentBlock>
            <Container>
              <Row>
                <Col lg="12" className="mx-auto">
									<p className="lead text-muted">{RichText.asText(document.post_excerpt)}</p>
                  <div className="post-body">
                  	{RichText.render(document.post_body)}
										<span className="filedIn d-inline-block mr-2 mt-4">Filed Under:</span> {postTags}
                  </div>
                </Col>
              </Row>
            </Container>
          </ContentBlock>
					<NewsItems>
						<TriangleRed />
						<TriangleBlue />
						<Container>
							<Row>
								<Col lg="8">
									<h3 className="mb-5">Latest Articles</h3>
								</Col>
							</Row>
							<RecentArticles />
						</Container>
					</NewsItems>
        </div>
      )
    }
    return <BlogHeader headline="Loading news post..." />;
  }
}
export default Post
