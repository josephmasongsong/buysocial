import React from 'react'
import styled from 'styled-components'
import { Link, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration';

import { Container, Row, Col } from 'reactstrap'
import GoogleMapContainer from './GoogleMapContainer'

const CalloutButton = styled.a`
	border: ${props => props.outline ? '2px solid #005891' : '1px solid #005891' };
	background-color: ${props => props.outline ? 'transparent' : '#005891' };
	color: ${props => props.outline ? '#005891' : '#fff' } !important;
	text-decoration: none;
	font-size: 1.25rem;
	line-height: 1.5;
	text-align: center;
	padding: 0.75rem 1.25rem;
	cursor: pointer;
	&:hover {
		text-decoration: none;
	}
`
const EventDescription = styled.div`
	font-size: 1.125rem;
	h3,h4,h5,h6 {
		margin-bottom: 1rem;
	}
`

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`
const MapContainer = styled.div`
	width: 100%;
	height: 242px;
  margin-bottom: 1.5rem;
`

class EventMap extends React.Component {
  render(){
    const days = this.props.slice.items.map(function(day, dayIndex){
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
      <ContentBlock>
        <Container>
          <Row >
            <Col lg="4"  className="mr-auto">

              <MapContainer className="mb-4">
                <GoogleMapContainer location={this.props.slice.primary}/>
              </MapContainer>

              <h5 className="mb-2">{RichText.asText(this.props.slice.primary.venue_name)}</h5>
              <div className="post-body mb-4 text-muted">
                {RichText.asText(this.props.slice.primary.readable_address)}
              </div>
              {days}
            </Col>
            <Col lg="7">
              <h2 className="mb-4">{RichText.asText(this.props.slice.primary.title)}</h2>

							<EventDescription>
              	{RichText.render(this.props.slice.primary.description)}
							</EventDescription>

              {
                (this.props.slice.primary.button_link.length !== 0) && (this.props.slice.primary.button_label.length !==0)
                ?
                <CalloutButton href={Link.url(this.props.slice.primary.button_link, PrismicConfig.linkResolver)} className="d-block mt-4">{RichText.asText(this.props.slice.primary.button_label)}</CalloutButton>
                :
                null
              }

            </Col>
          </Row>
        </Container>
      </ContentBlock>
    );
  }
}
export default EventMap
