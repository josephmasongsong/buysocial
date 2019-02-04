import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link, RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import styled from 'styled-components';
import { DeviceSize } from '../DeviceSize';
import Loading from '../Loading';
import {
	BulletList,
  ContactForm,
  ContentImage,
  ContentImageLeft,
  ContentNoImage,
  EventMap,
  ListOfLinks,
  LogoGrid,
  PeopleContainer,
  PostList,
  RecentArticles,
  SearchContainer,
  ThreeColumnBlock,
  ThreeColumnGray,
  TwoColumnsCentered
} from '../components/slices';
import NotFound from '../NotFound';
import BlogHeader from '../components/BlogHeader';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	border-bottom: 1px solid #f8f9fa;
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
	}
`
const PostBody = styled.div`
	font-size: 1.125rem;
	p:last-child {
		margin-bottom: 0;
	}
	img {
		max-width: 100% !important;
		margin: auto;
		display: block;
	}
	@media ${DeviceSize.xs} {
		font-size: 1rem;
	}
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

			const sliceContent = document.body.map(function(slice, index){
				if (slice.slice_type === '3_column_content_block') {
					return(
						<ThreeColumnBlock key={index} slice={slice} />
					);
				} else if (slice.slice_type === 'people') {
					return(
						<PeopleContainer key={index} slice={slice} />
					)
				} else if (slice.slice_type === 'bullet_list') {
					return(
						<BulletList key={index} slice={slice} />
					)
				} else if (slice.slice_type === '2_narrow_columns') {
					return(
						<TwoColumnsCentered key={index} slice={slice} />
					)
				} else if (slice.slice_type === 'gray_3_column_content_block') {
					return(
						<ThreeColumnGray key={index} slice={slice} />
					)
				} else if (slice.slice_type === 'logo_grid') {
					return(
						<LogoGrid key={index} slice={slice} />
					);
				} else if (slice.slice_type === 'list_of_articles') {
					return(
						<ListOfLinks key={index} slice={slice} />
					)
				} else if (slice.slice_type === 'knowledge_base') {
					return(
						<SearchContainer key={index} slice={slice} />
					);
				} else if (slice.slice_type === 'news_index') {
					return(
						<PostList key={index} />
					);
				} else if (slice.slice_type === 'contact_form') {
					return(
						<ContactForm key={index} slice={slice} />
					);
				}  else if (slice.slice_type === 'content_block_with_image') {
					return(
						<ContentImage key={index} slice={slice} />
					);
				} else if (slice.slice_type === 'content_block_with_image_left') {
					return(
						<ContentImageLeft key={index} slice={slice} />
					);
				} else if (slice.slice_type === 'content_block_no_image') {
					return(
						<ContentNoImage key={index} slice={slice} />
					);
				} else if (slice.slice_type === 'google_map') {
					return(
						<EventMap key={index} slice={slice} />
					)
				} else if (slice.slice_type === 'recent_articles') {
					return(
						<RecentArticles key={index} slice={slice} />
					)
				} else {
					return null;
				}
			});

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
        <React.Fragment>
          <Helmet>
            <title>{RichText.asText(document.post_title) + " - Buy Social Canada"}</title>
            <meta name="description" content={RichText.asText(document.post_excerpt)} />
            <meta name="og:image" content={document.post_image.url} />
          </Helmet>
					<BlogHeader headline={RichText.asText(document.post_title)} author={RichText.asText(document.author.data.name)} pubdate={pubDate.toLocaleDateString("en-US", options)} headerImage={document.post_image.url} />
          <ContentBlock>
            <Container>
              <Row>
                <Col lg="12" className="mx-auto">
									<p className="lead text-muted">{RichText.asText(document.post_excerpt)}</p>
                  <PostBody>
                  	{RichText.render(document.post_body)}
										<span className="filedIn d-inline-block mr-2 mt-4">Filed Under:</span> {postTags}
                  </PostBody>
                </Col>
              </Row>
            </Container>
          </ContentBlock>
					{sliceContent}
        </React.Fragment>
      )
    }
		if (this.state.notFound) {
			return <NotFound />
		}
		return <Loading />
  }
}
export default Post
