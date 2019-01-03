import React from 'react'
import styled from 'styled-components'
import { RichText, Link } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

const TriangleLeftTopRed = styled.div`
	width: 10%;
	height: 50%;
	background: #D12331;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	clip-path: polygon(0% 100%, 0% 0%, 100% 0%);
`

const TriangleLeftBottomYellow = styled.div`
	width: 10%;
	height: 50%;
	background: #D9D458;
	background-size: cover;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2;
	clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
`
const TriangleBlueRight = styled.div`
	width: 20%;
	height: 100%;
	background: #005891;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	clip-path: polygon(50% 50%,100% 0%,100% 100%);
`
const CalloutIcon = styled.img`
	margin-bottom: 1.5rem;
	width: 64px;
`

class CalloutCenter extends React.Component {
  render(){
     return(
       <ContentBlock>
         <TriangleLeftTopRed />
         <TriangleLeftBottomYellow />
         <TriangleBlueRight />
         <Container>
           <Row>
             <Col lg="10" className="text-center mx-auto">
               {
                 (Object.keys(this.props.slice.primary.icon).length !== 0)
                 ?
                 <CalloutIcon src={this.props.slice.primary.icon.url} />
                 :
                 null
               }
               <h3 className=" mb-3">{RichText.asText(this.props.slice.primary.title )}</h3>
               <p className="lead text-muted mb-4">{RichText.asText(this.props.slice.primary.subtitle )}</p>
               <a href={Link.url(this.props.slice.primary.link, PrismicConfig.linkResolver)} className="btn btn-lg btn-primary text-white">{RichText.asText(this.props.slice.primary.button_label)}</a>
             </Col>
           </Row>
         </Container>
       </ContentBlock>
     )
  }
}
export default CalloutCenter
