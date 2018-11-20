import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import SlimHeader from './components/SlimHeader';

import styled from 'styled-components';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
`
const TeamBlock = styled.div`
	padding: 6rem 0;
	position: relative;
	background: #f8f9fa;
`

const TeamMember = styled.div`
	text-align: center;
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

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  doc: null,
		}
	}

	componentWillMount() {
	  const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
	    api.query(Prismic.Predicates.at('document.type', 'about_page')).then(response => {
	      if (response) {
	        this.setState({ doc: response.results[0] });
	      }
	    });
	  });
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
								<h4 className="text-primary mb-3">{block.block_title[0].text}</h4>
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
  								<img src={member.portrait.url} alt="" height="100" width="100" className="mb-3 team-member-image" />
  								<h5>{member.first_and_lastname[0].text}</h5>
  								<p className="mb-0 text-muted">{member.position[0].text}</p>
  							</TeamMember>
  						</Col>
  					);	
  				});
  				return(
  					<TeamBlock key={index}>

							<TriangleRed />
							<TriangleBlue />
							<Container>
								<Row className="mb-5">
									<Col lg="12" className="text-center">
										<h3 className="text-primary mb-3">{RichText.asText(slice.primary.team_section)}</h3>
										<p className="text-muted lead mb-0">{RichText.asText(slice.primary.team_subheader)}</p>
									</Col>
								</Row>
								<Row>
									{members}
								</Row>
							</Container>


  					</TeamBlock>
  				);
  			} else {
  				return null;
  			}

  		});

	    return (
	      <div>
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

export default About;


