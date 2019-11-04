import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container } from 'reactstrap';
import { RichText } from 'prismic-reactjs';
import SliceZone from './SliceZone';
import { AsyncNotFound, AsyncBlogHeader } from './slices/async';
import Layout from './Layout';
import styled from 'styled-components'

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.bgColor};
  ${({ bgImage }) => bgImage &&
    `background: url(${bgImage}) no-repeat center;
    background-size: cover;
    `
  }
  ${({ textCenter }) => textCenter &&
    `text-align: center;`
  }
  @media (max-width: 575.98px) {
    padding: 3rem 0;
  }
`

const Content = styled.div`
  h1,h2,h3 {
    color: #000;
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  p, li {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
  li {
    padding-left: 2rem;
  }
  li:before {
    font-family: 'Font Awesome 5 Free';
    content: '\f00c';
    font-weight: 900;
    margin-right: 1rem;
    color: #D9D458;
    margin-left: -2rem;
    width: 1rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
  .subtext {
    color: #6c757d;
    font-size: 1.25rem;
  }
  a {
    text-decoration: underline;
  }
  .callout-button {
    border: 1px solid #005891;
    background-color: #005891;
    color: #fff !important;
    -webkit-text-decoration: none;
    text-decoration: none;
    line-height: 1.5;
    text-align: center;
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    margin-top: 1.5rem;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 575.98px) {
    .subtext{
      font-size: 1.125rem;
    }
    p, li {
      font-size: 1rem;
    }
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


			return (
				<>
					<Helmet>
						<title>{RichText.asText(document.post_title) + " - Buy Social Canada"}</title>
						<meta name="description" content={RichText.asText(document.post_excerpt)} />
						<meta name="og:image" content={document.post_image.url} />
					</Helmet>
					<AsyncBlogHeader headline={RichText.asText(document.post_title)} author={RichText.asText(document.author.data.name)} pubdate={pubDate.toLocaleDateString("en-US", options)} headerImage={document.post_image.url} />
					<Section>
						<Container>
							<Content>
                <p className="subtext">{RichText.asText(document.post_excerpt)}</p>
								{RichText.render(document.post_body)}
							</Content>
						</Container>
					</Section>
					<SliceZone items={document.body} />
				</>
			)
		}
		if (this.state.notFound) {
			return <AsyncNotFound />
		}
	}
  render() {
    return <Layout prismicCtx={this.props.prismicCtx}>{this.renderPost()}</Layout>
  }
}
export default Post
