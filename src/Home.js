import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import { RichText } from 'prismic-reactjs';
import Header from './components/Header';
import Helmet from 'react-helmet';
import images from './ThemeImages';


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
