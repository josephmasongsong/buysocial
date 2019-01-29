import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import { RichText } from 'prismic-reactjs';
import Helmet from 'react-helmet';
import images from './ThemeImages';
import Loading from './Loading';
import Loadable from 'react-loadable';

import {
  AsyncBulletList,
  AsyncContactForm,
  AsyncContentImage,
  AsyncContentImageLeft,
  AsyncContentNoImage,
  AsyncEventMap,
  AsyncListOfLinks,
  AsyncLogoGrid,
  AsyncPeopleContainer,
  AsyncPostList,
  AsyncRecentArticles,
  AsyncSearchContainer,
  AsyncThreeColumnBlock,
  AsyncThreeColumnGray,
  AsyncTwoColumnsCentered
} from './components/slices/async'

const Header = Loadable({
  loader: () => import('./components/Header'),
  loading: Loading
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
    }
  }

  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'homepage')).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  render() {
		if (this.state.doc) {
  		const document = this.state.doc.data;

  		const sliceContent = document.body.map(function(slice, index){
  			if (slice.slice_type === '3_column_content_block1') {
  				return(
						<AsyncThreeColumnBlock key={index} slice={slice} />
  				);
  			} else if (slice.slice_type === 'people') {
  				return(
						<AsyncPeopleContainer key={index} slice={slice} />
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
  			} else if (slice.slice_type === 'recent_articles') {
					return(
						<AsyncRecentArticles key={index} slice={slice} />
					)
  			} else if (slice.slice_type === 'featured_pages') {
					const slides = slice.items
					return(
						<Header slides={slides} key={index}/>
  				);
  			} else {
  				return null;
  			}
  		});
      return(
        <React.Fragment>
					<Helmet>
						<title>{RichText.asText(document.page_title) + " - Buy Social Canada"}</title>
						<meta name="description" content="Buy Social Canada brings socially driven purchasers and social enterprise suppliers together, building business relationships that generate social benefits to communities across the country." />
						<meta name="og:image" content={images.logo} />
					</Helmet>


          {sliceContent}
        </React.Fragment>
      )
    }
    return <Header headline="Connecting to Server..." subheader="Please be patient..."/>
  }
}

export default Home;
