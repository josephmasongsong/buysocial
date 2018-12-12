import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import {Link, RichText} from 'prismic-reactjs';
import Header from './components/Header';
import NewsItem from './components/NewsItem';

import styled from 'styled-components';

const NewsItems = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #f8f9fa;
`

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
  border-top: 1px solid #f8f9fa;
  border-bottom: 1px solid #f8f9fa;
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
const LinkTo = styled.a`
	text-decoration: underline;
`
const BlockImage = styled.img`
	/* box-shadow: 0 0 5px rgba(0,0,0,0.2); */
	max-width: 100%;
	height: auto;
	width:100%;
`

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
        if (slice.slice_type === '4_column_content_block') {
          const blocks = slice.items.map(function(block, blockIndex){
            return(
              <Col lg="3" key={blockIndex}>
                <img src={block.blurb_image.url} alt="" height="64" className="mb-3" />
                <h4 className=" mb-3">{block.block_title[0].text}</h4>
                <p className="mb-3">{block.block_blurb[0].text}</p>
								<LinkTo href={block.block_link.uid}>Learn More</LinkTo>
              </Col>
            )
          });
          return(
            <ContentBlock key={index}>
              <Container>
                <Row>
                  {blocks}
                </Row>
              </Container>
            </ContentBlock>
          )
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
										<h3 className="mb-4">{RichText.asText(slice.primary.title_of_section )}</h3>
									</Col>
								</Row>
								<Row>
									{blocks}
								</Row>
							</Container>
						</NewsItems>
  				);
				} else if (slice.slice_type === 'content_block_with_image') {

  				return(
  					<ContentBlock key={index}>
  						<Container>
	  						<Row>
	  							<Col lg="6" className="align-self-center">
                    <h3 className=" mb-3">{RichText.asText(slice.primary.section_title )}</h3>
                    <p className="lead text-muted mb-3">{RichText.asText(slice.primary.section_subtitle )}</p>
                    <LinkTo href={Link.url(slice.primary.section_link, PrismicConfig.linkResolver)} className="lead mb-0">{RichText.asText(slice.primary.link_text)}</LinkTo>
	  							</Col>
                  <Col lg="5" className="align-self-center ml-auto">
                    <BlockImage src={slice.primary.section_image.url} alt=""/>
                  </Col>
	  						</Row>
  						</Container>
  					</ContentBlock>
  				);
  			} else if (slice.slice_type === 'content_block_with_image_left') {

  				return(
  					<ContentBlock key={index}>
  						<Container>
	  						<Row>
									<Col lg="5" className="align-self-center mr-auto">
										<BlockImage src={slice.primary.section_image.url} alt=""/>
									</Col>

	  							<Col lg="6" className="align-self-center">
                    <h3 className=" mb-3">{RichText.asText(slice.primary.section_title )}</h3>
                    <p className="lead text-muted mb-3">{RichText.asText(slice.primary.section_subtitle )}</p>
                    <LinkTo href={Link.url(slice.primary.section_link, PrismicConfig.linkResolver)} className="lead mb-0">{RichText.asText(slice.primary.link_text)}</LinkTo>
	  							</Col>

	  						</Row>
  						</Container>
  					</ContentBlock>
  				);
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
        <div>
          {sliceContent}
        </div>
      )
    }
    return <Header headline="Connecting to Server..." subheader="Please be patient..."/>
  }
}

export default Home;
