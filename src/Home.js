import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import RecentArticles from './components/RecentArticles';
import { DeviceSize } from './DeviceSize';
import styled from 'styled-components';

import LogoGrid from './components/slices/LogoGrid';
import ThreeColumnBlock from './components/slices/ThreeColumnBlock';
import ContentNoImage from './components/slices/ContentNoImage';
import ContentImageLeft from './components/slices/ContentImageLeft';
import ContentImage from './components/slices/ContentImage';
import ListOfLinks from './components/slices/ListOfLinks';

const NewsItems = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #fbfbfb;
	border-top: 1px solid #f8f9fa;
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
	}
`
const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
  }
`
const TriangleRed = styled.div`
	width: 10%;
  height: 50%;
  background: #D12331;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  clip-path: polygon(0% 50%, 0% 100%, 100% 100%);
	@media ${DeviceSize.xs} {
		width: 20%;
		height: 20%;
  }
`
const TriangleBlue = styled.div`
	width: 10%;
  height: 50%;
  background: #005891;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 50%, 0% 0%, 100% 0%);
	@media ${DeviceSize.xs} {
		width: 20%;
		height: 20%;
  }
`
const LinkTo = styled.a`
	text-decoration: underline;
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
				} else if (slice.slice_type === '3_column_content_block1') {
	  				return(
							<ThreeColumnBlock key={index} slice={slice} />
	  				);
	  			} else if (slice.slice_type === 'logo_grid') {
  				return(
						<LogoGrid key={index} slice={slice} />
  				);
				} else if (slice.slice_type === 'list_of_articles') {
  				return(
						<ListOfLinks key={index} slice={slice} />
  				);
				} else if (slice.slice_type === 'recent_articles') {
  				return(
						<NewsItems key={index}>
							<TriangleRed />
							<TriangleBlue />
							<Container>
								<Row>
									<Col lg="8">
										<h3 className="mb-5">Latest News & Updates</h3>
									</Col>
								</Row>
								<RecentArticles />
							</Container>
						</NewsItems>
  				);
  			} else if (slice.slice_type === 'content_block_with_image') {
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
