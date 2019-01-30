import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import Loadable from 'react-loadable';
import Loading from './Loading'

import {
	AsyncBiography,
	AsyncBulletList,
  AsyncCalloutCenter,
  AsyncContactForm,
  AsyncContentImage,
  AsyncContentImageLeft,
  AsyncContentNoImage,
  AsyncEventMap,
  AsyncListOfLinks,
  AsyncLogoGrid,
  AsyncPeopleContainer,
  AsyncPostList,
  AsyncPurchaserForm,
  AsyncSearchContainer,
  AsyncSupplierForm,
  AsyncThreeColumnBlock,
  AsyncThreeColumnGray,
  AsyncTwoColumnsCentered
} from './components/slices/async'

const SlimHeader = Loadable({
  loader: () => import('./components/SlimHeader'),
  loading: Loading
})

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
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, doc) => {
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

  		const blockContent = document.body.map(function(slice, index){
  			if (slice.slice_type === '3_column_content_block') {
  				return(
						<AsyncThreeColumnBlock key={index} slice={slice} />
  				);
  			} else if (slice.slice_type === 'people') {
  				return(
						<AsyncPeopleContainer key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'biography') {
  				return(
						<AsyncBiography key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'bullet_list') {
					return(
						<AsyncBulletList key={index} slice={slice} />
					)
  			} else if (slice.slice_type === '2_narrow_columns') {
					return(
						<AsyncTwoColumnsCentered key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'gray_3_column_content_block') {
					return(
						<AsyncThreeColumnGray key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'logo_grid') {
  				return(
						<AsyncLogoGrid key={index} slice={slice} />
  				);
				} else if (slice.slice_type === 'list_of_articles') {
					return(
						<AsyncListOfLinks key={index} slice={slice} />
					)
				} else if (slice.slice_type === 'knowledge_base') {
					return(
						<AsyncSearchContainer key={index} slice={slice} />
					);
				} else if (slice.slice_type === 'news_index') {
					return(
						<AsyncPostList key={index} />
					);
				} else if (slice.slice_type === 'contact_form') {
					return(
						<AsyncContactForm key={index} slice={slice} />
					);
				}  else if (slice.slice_type === 'content_block_with_image') {
  				return(
						<AsyncContentImage key={index} slice={slice} />
  				);
  			} else if (slice.slice_type === 'content_block_with_image_left') {
  				return(
						<AsyncContentImageLeft key={index} slice={slice} />
  				);
  			} else if (slice.slice_type === 'content_block_no_image') {
  				return(
						<AsyncContentNoImage key={index} slice={slice} />
  				);
  			} else if (slice.slice_type === 'google_map') {
					return(
						<AsyncEventMap key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'supplier_form') {
					return(
						<AsyncSupplierForm key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'callout_centered') {
					return(
						<AsyncCalloutCenter key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'purchaser_form') {
					return(
						<AsyncPurchaserForm key={index} slice={slice} />
					)
  			} else {
  				return null;
  			}
  		});

	    return (
	      <React.Fragment>
					<Helmet>
            <title>{RichText.asText(document.page_title) + " - Buy Social Canada"}</title>
            <meta name="description" content={RichText.asText(document.page_blurb)} />
            <meta name="og:image" content={document.page_image.url} />
          </Helmet>


	      	<SlimHeader
	      		headline={RichText.asText(document.page_title)}
	      		subheader={RichText.render(document.page_blurb)}
						headerImage={document.page_image.url}
	      	/>

					{blockContent}

	     </React.Fragment>
	    );
  	}
  	return <SlimHeader headline="Loading..." />;
  }
}

export default Page;
