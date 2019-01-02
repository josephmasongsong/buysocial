import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Link, RichText, Date } from 'prismic-reactjs';
import SlimHeader from './components/SlimHeader';

import PostList from './components/PostList';
import PrismicConfig from './prismic-configuration';
import GoogleMapContainer from './components/GoogleMapContainer';

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



const CalloutButton = styled.a`
	border: ${props => props.outline ? '2px solid #005891' : '1px solid #005891' };
	background-color: ${props => props.outline ? 'transparent' : '#005891' };
	color: ${props => props.outline ? '#005891' : '#fff' } !important;
	text-decoration: none;
	font-family: 'Roboto Slab', sans-serif;
	font-size: 1.25rem;
	line-height: 1.5;
	text-align: center;
	padding: 0.75rem 1.25rem;
	cursor: pointer;
	&:hover {
		text-decoration: none;
	}
`
const MapContainer = styled.div`
	width: 100%;
	height: 242px;
`

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

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
						<ContentBlock key={index}>
							<Container>
								<Row className="justify-content-center">
									<PostList />
								</Row>
							</Container>
						</ContentBlock>
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


					const days = slice.items.map(function(day, dayIndex){
						const options = { hour: 'numeric', minute: 'numeric' };
						const start = new Date(day.day_start)
						const end = new Date(day.day_end)

						return(
							<div index={dayIndex} className="justify-content-between d-flex">

								<h6 className="mb-3 text-dark">{RichText.asText(day.day_label)}</h6>
								<span className="eventHours">{start.toLocaleTimeString("en-US", options)} - {end.toLocaleTimeString("en-US", options)}</span>

							</div>
						);
					});

  				return(
  					<ContentBlock key={index}>
  						<Container>
	  						<Row >
									<Col lg="4"  className="mr-auto">

										<MapContainer className="mb-4">
											<GoogleMapContainer location={slice.primary}/>
										</MapContainer>

										<h5 className="mb-2">{RichText.asText(slice.primary.venue_name)}</h5>
										<div className="post-body mb-4 text-muted">
											{RichText.asText(slice.primary.readable_address)}
										</div>
										{days}
									</Col>
									<Col lg="7">
										<h2 className="mb-4">{RichText.asText(slice.primary.title)}</h2>
										<div className="post-body mb-4">
											{RichText.render(slice.primary.description)}
										</div>
										{
											(slice.primary.button_link.length !== 0) && (slice.primary.button_label.length !==0)
											?
											<CalloutButton href={Link.url(slice.primary.button_link, PrismicConfig.linkResolver)} className="d-block mt-4">{RichText.asText(slice.primary.button_label)}</CalloutButton>
											:
											null
										}

									</Col>
	  						</Row>
  						</Container>
  					</ContentBlock>
  				);
  			} else {
  				return null;
  			}
  		});

	    return (
	      <div>
					<Helmet>
            <title>{RichText.asText(document.page_title) + " - Buy Social Canada"}</title>
            <meta name="description" content={RichText.asText(document.page_blurb)} />
            <meta name="og:image" content={document.page_image.url} />
          </Helmet>


	      	<SlimHeader
	      		headline={RichText.asText(document.page_title)}
	      		subheader={RichText.asText(document.page_blurb)}
						headerImage={document.page_image.url}
	      	/>

					{blockContent}

	     </div>
	    );
  	}
  	return <SlimHeader headline="Loading..." />;
  }
}

export default Page;
