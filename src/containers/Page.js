import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import Loading from '../Loading';
import NotFound from '../NotFound';
import {
	Biography,
	BulletList,
  CalloutCenter,
  ContactForm,
  ContentImage,
  ContentImageLeft,
  ContentNoImage,
  EventMap,
  ListOfLinks,
  LogoGrid,
  PeopleContainer,
  PostList,
  PurchaserForm,
  SearchContainer,
  SupplierForm,
  ThreeColumnBlock,
  ThreeColumnGray,
  TwoColumnsCentered
} from '../components/slices';
import SlimHeader from '../components/SlimHeader';


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
						<ThreeColumnBlock key={index} slice={slice} />
  				);
  			} else if (slice.slice_type === 'people') {
  				return(
						<PeopleContainer key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'biography') {
  				return(
						<Biography key={index} slice={slice} />
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
  			} else if (slice.slice_type === 'supplier_form') {
					return(
						<SupplierForm key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'callout_centered') {
					return(
						<CalloutCenter key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'purchaser_form') {
					return(
						<PurchaserForm key={index} slice={slice} />
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
		if (this.state.notFound) {
			return(
				<NotFound />
			)
		}
  	return <Loading />;
  }
}

export default Page;
