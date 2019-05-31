import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link, RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import styled from 'styled-components';
import { DeviceSize } from '../DeviceSize';
import SliceZone from './SliceZone';
import { AsyncNotFound, AsyncBlogHeader } from './slices/async';
import { PostBody, ContentBlock } from '../styles';

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
      return props.prismicCtx.api.getByUID('blog_post', props.match.params.uid, {'fetchLinks': ['author.name', 'post_tag.name']}, (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

	renderPost() {
		if (this.state.doc) {
			const document = this.state.doc.data;

			const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const pubDate = new Date(this.state.doc.data.publication_date)
			// const postTags = document.post_tags.map(function(tag, tagIndex){
			// 	return(
			// 		<Badge color="primary" href={Link.url(tag.post_tag, PrismicConfig.linkResolver)} key={tagIndex} className="text-white mr-2">
			// 			{tag.post_tag.data.name[0].text}
			// 		</Badge>
			// 	)
			// });

			return (
				<>
					<Helmet>
						<title>{RichText.asText(document.post_title) + " - Buy Social Canada"}</title>
						<meta name="description" content={RichText.asText(document.post_excerpt)} />
						<meta name="og:image" content={document.post_image.url} />
					</Helmet>
					<AsyncBlogHeader headline={RichText.asText(document.post_title)} author={RichText.asText(document.author.data.name)} pubdate={pubDate.toLocaleDateString("en-US", options)} headerImage={document.post_image.url} />
					<ContentBlock>
						<Container>
							<Row>
								<Col lg="12" className="mx-auto">
									<p className="lead text-muted">{RichText.asText(document.post_excerpt)}</p>
									<PostBody>
										{RichText.render(document.post_body)}
										{/* <span className="filedIn d-inline-block mr-2 mt-4">Filed Under:</span> {postTags} */}
									</PostBody>
								</Col>
							</Row>
						</Container>
					</ContentBlock>
					<SliceZone items={document.body} />
				</>
			)
		}
		if (this.state.notFound) {
			return <AsyncNotFound />
		}
	}
  render() {
		return <>{this.renderPost()}</>
  }
}
export default Post
