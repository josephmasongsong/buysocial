import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import {RichText} from 'prismic-reactjs';
import BlogHeader from './components/BlogHeader'
import styled from 'styled-components';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	border-bottom: 1px solid #f8f9fa;
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
      return props.prismicCtx.api.getByUID('blog_post', props.match.params.uid, {}, (err, doc) => {
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
      const pubDate = new Date(this.state.doc.first_publication_date)

      return(
        <div>
          <Helmet>
            <title>{RichText.asText(document.post_title) + " - Buy Social Canada"}</title>
            <meta name="description" content={RichText.asText(document.post_excerpt)} />
            <meta name="og:image" content={document.post_image.url} />
          </Helmet>

          <BlogHeader headline={RichText.asText(document.post_title)} pubdate={pubDate.toLocaleDateString("en-US", options)} headerImage={document.post_image.url} />
          <ContentBlock>
            <Container>
              <Row>
                <Col lg="8" className="mx-auto">
                  <div>
                  {RichText.render(document.post_body)}
                  </div>
                </Col>
              </Row>
            </Container>
          </ContentBlock>
        </div>
      )
    }
    return <BlogHeader headline="Loading news post..." />;
  }
}
export default Post
