import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import SlimHeader from './components/SlimHeader';
import NewsItem from './components/NewsItem';
import LibrarySidebar from './components/LibrarySidebar';
import FilteredList from './components/FilteredList';
import PostList from './components/PostList';
import PostTags from './components/PostTags';
import ContactForm from './components/ContactForm';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	border-bottom: 1px solid #f8f9fa;
`
const GrayBlock = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #f8f9fa;
`
const GrayBlockBottom = styled.div`
	padding: 6rem 0 3rem;
	position: relative;
	background: #f8f9fa;
`
const NewsItems = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #f8f9fa;
`
const TeamMember = styled.div`
	text-align: center;
	margin-top: 3rem;
`
const TriangleRed = styled.div`
	width: 12.5%;
  height: 50%;
  background: #D12331;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
`
const TriangleBlue = styled.div`
	width: 12.5%;
  height: 50%;
  background: #005891;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
`
const MemberPhoto = styled.img`
	border-radius: 50px;
	margin-bottom: 1rem;
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
  				const blocks = slice.items.map(function(block, blockIndex){
  					return(
							<Col lg="4" key={blockIndex}>
								<img src={block.block_image.url} alt="" height="64" className="mb-3" />
								<h4 className=" mb-3">{block.block_title[0].text}</h4>
								<p className="mb-0">{block.block_blurb[0].text}</p>
							</Col>
  					);
  				});
  				return(
						<ContentBlock key={index}>
							<Container>
								<Row>
									{blocks}
								</Row>
							</Container>
						</ContentBlock>
  				);
  			} else if (slice.slice_type === 'team') {
  				const members = slice.items.map(function(member, memberIndex){
  					return(
  						<Col lg="3" key={memberIndex}>
  							<TeamMember>
  								<MemberPhoto src={member.portrait.url} alt="" height="100" width="100"/>
  								<h5 className="text-dark">{member.first_and_lastname[0].text}</h5>
  								<p className="mb-0 text-muted">{member.position[0].text}</p>
  							</TeamMember>
  						</Col>
  					);
  				});
  				return(
  					<GrayBlock key={index}>

							<TriangleRed />
							<TriangleBlue />
							<Container>
								<Row>
									<Col lg="12" className="text-center">
										<h3 className=" mb-3">{RichText.asText(slice.primary.team_section)}</h3>
										<p className="text-muted lead mb-0">{RichText.asText(slice.primary.team_subheader)}</p>
									</Col>
								</Row>
								<Row>
									{members}
								</Row>
							</Container>


  					</GrayBlock>
  				);
  			} else if (slice.slice_type === 'bullet_list') {
  				const listItems = slice.items.map(function(listItem, itemIndex){
  					return(
  						<li className="mb-3 pl-3" key={itemIndex}><span className="fa-li" ><i className="fas fa-check"></i></span>{listItem.list_item[0].text}</li>
  					);
  				});
  				return(
  					<ContentBlock key={index}>
  						<Container>
	  						<Row>
	  							<Col lg="12" className="align-self-center">
	  								<div className="media mb-4 align-items-center">
											<img src={slice.primary.list_icon.url} alt="" height="64" className="mr-3" />
	  									<div className="media-body">
	  										<h3 className=" mb-0">{RichText.asText(slice.primary.list_name)}</h3>
	  									</div>
	  								</div>
	  								<ul className="mb-0 fa-ul">
	  									{listItems}
	  								</ul>
	  							</Col>
	  						</Row>
  						</Container>
  					</ContentBlock>
  				);
  			} else if (slice.slice_type === '2_narrow_columns') {
  				const blocks = slice.items.map(function(block, blockIndex){
  					return(
  						<Col lg="5" key={blockIndex} className="mb-4">
  							<div className="media">
  								<img src={block.subblock_icon.url} alt="" width="64" className="mr-3" />
  								<div className="media-body">
  									{block.subblock_blurb[0].text}
  								</div>
  							</div>
  						</Col>
  					)
  				});
  				return(

  					<ContentBlock key={index}>
  						<Container>
	  						<Row className="mb-5">
	  							<Col lg="10" className="mx-auto text-center">
	  								<h3 className=" mb-3">{RichText.asText(slice.primary.block_header)}</h3>
	  								<p className="lead text-muted mb-0">{RichText.asText(slice.primary.block_blurb )}</p>
	  							</Col>
	  						</Row>
	  						<Row className="justify-content-center">
	  							{blocks}
	  						</Row>
  						</Container>
  					</ContentBlock>

  				);
  			} else if (slice.slice_type === 'gray_3_column_content_block') {
  				const blocks = slice.items.map(function(block, blockIndex){
  					return(
  						<Col lg="4" key={blockIndex} className="mb-5">
  							<h5 className="mb-3">{block.block_title[0].text}</h5>
  							<p className="mb-0">{block.block_blurb[0].text}</p>
  						</Col>
  					)
  				});
  				return(
  					<GrayBlockBottom key={index}>
							<TriangleRed />
							<TriangleBlue />
								<Container>
									<Row>
										{blocks}
									</Row>
								</Container>
  					</GrayBlockBottom>
  				);
  			} else if (slice.slice_type === 'logo_grid') {
  				const blocks = slice.items.map(function(block, blockIndex){
  					return(
							<Col lg="3" key={blockIndex}>
								<img src={block.logo_image.url} alt="" className="img-fluid" />
							</Col>
  					);
  				});
  				return(
						<ContentBlock key={index} className="pb-3">
  						<Container>
	  						<Row>
	  							<Col lg="10" className="mx-auto text-center">
	  								<h3 className=" mb-3">{RichText.asText(slice.primary.logo_section)}</h3>
	  								<p className="lead text-muted mb-0">{RichText.asText(slice.primary.logo_subheader )}</p>
	  							</Col>
	  						</Row>
	  						<Row className="justify-content-center">
	  							{blocks}
	  						</Row>
  						</Container>
  					</ContentBlock>
  				);
				} else if (slice.slice_type === 'list_of_articles') {
  				const blocks = slice.items.map(function(block, blockIndex){
  					return(
							<NewsItem key={blockIndex} doc={block} />
  					);
  				});
  				return(
						<NewsItems key={index}>
							<TriangleRed />
							<TriangleBlue />
							<Container>
								<Row>
									<Col lg="8">
										<h3 className=" mb-4">{RichText.asText(slice.primary.title_of_section )}</h3>
									</Col>
								</Row>
								<Row>
									{blocks}
								</Row>
							</Container>
						</NewsItems>
  				);
				} else if (slice.slice_type === 'knowledge_base') {
					return(
						<ContentBlock key={index}>
							<Container>
								<Row>
									<LibrarySidebar />
									<FilteredList />
								</Row>
							</Container>
						</ContentBlock>
					);
				} else if (slice.slice_type === 'news_index') {
					return(
						<ContentBlock key={index}>
							<Container>
								<Row className="justify-content-center">
									<PostList />
									<PostTags />
								</Row>
							</Container>
						</ContentBlock>
					);
				} else if (slice.slice_type === 'contact_form') {
					return(
						<ContentBlock key={index}>
							<Container>
								<Row className="justify-content-center">
									<div>
										<p className="mb-5">{RichText.asText(slice.primary.form_blurb)}</p>
									</div>
									<ContactForm />
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
	      	<div>
					{blockContent}
					</div>

	     </div>
	    );
  	}
  	return <SlimHeader headline="Loading..." />;
  }
}

export default Page;
