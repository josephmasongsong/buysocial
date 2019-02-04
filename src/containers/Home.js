import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { RichText } from 'prismic-reactjs';
import Helmet from 'react-helmet';
import images from '../ThemeImages';
import Loading from '../Loading';
import Header from '../components/Header';
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
    return <Loading />
  }
}

export default Home;
