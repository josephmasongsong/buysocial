import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link, RichText } from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import BlogHeader from './components/BlogHeader'
import styled from 'styled-components';
import { DeviceSize } from './DeviceSize';
import RecentArticles from './components/slices/RecentArticles';
import ThreeColumnBlock from './components/slices/ThreeColumnBlock';
import PeopleContainer from './components/slices/PeopleContainer';
import LogoGrid from './components/slices/LogoGrid';
import BulletList from './components/slices/BulletList';
import TwoColumnsCentered from './components/slices/TwoColumnsCentered';
import ThreeColumnGray from './components/slices/ThreeColumnGray';
import ListOfLinks from './components/slices/ListOfLinks';
import ContentNoImage from './components/slices/ContentNoImage';
import ContentImageLeft from './components/slices/ContentImageLeft';
import ContentImage from './components/slices/ContentImage';
import ContactForm from './components/slices/ContactForm';
import SearchContainer from './components/slices/SearchContainer';
import PostList from './components/slices/PostList';
import EventMap from './components/slices/EventMap';


const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	border-bottom: 1px solid #f8f9fa;
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
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
					{sliceContent}
        </React.Fragment>
      )
    }
    return <BlogHeader headline="Loading news post..." />;
  }
}
export default Post
