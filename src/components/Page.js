import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { AsyncNotFound } from './slices/async';
import SliceZone from '../components/SliceZone';
import SlimHeader from '../components/SlimHeader';
import Meta from '../meta';
import Layout from './Layout';

class Page extends Component {
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
      return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

	renderPage() {
		if (this.state.doc) {
			const document = this.state.doc.data
			return(
				<>
					{Meta(document)}
					<SlimHeader
						headline={RichText.asText(document.page_title)}
						subheader={RichText.render(document.page_blurb)}
						headerImage={document.page_image.url}
					/>
					<SliceZone items={document.body} />
				</>
			)
		}
		if (this.state.notFound) {
			return <AsyncNotFound />
		}
	}

  render() {
		return <Layout prismicCtx={this.props.prismicCtx}>{this.renderPage()}</Layout>
  }
}

export default Page;
