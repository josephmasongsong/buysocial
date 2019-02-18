import React, { Component } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, } from 'reactstrap';
import styled from 'styled-components';
import images from '../ThemeImages';
import { DeviceSize } from '../DeviceSize';
import { Link, RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';

import {
	Arrows,
	BlueChevron,
  Masthead,
	SubTitle,
	Title,
  TriangleLarge,
  TriangleRed,
  TriangleYellow,
	TriangleBlueTwo
} from './StyledHeader'

const MastheadHome = styled(Masthead)`
	height: 600px;
	@media ${DeviceSize.xs} {
		height: calc(100vh - 96px);
	}
`
const HomeTriangleRed = styled(TriangleRed)`
	width: 10%;
	height: 50%;
	background: #D12331;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
	clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
`
const HomeTriangleYellow = styled(TriangleYellow)`
	width: 10%;
	height: 50%;
	background: #D9D458;
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 2;
	clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
`


const CarouselLink = styled.a`
	font-size: 1.25rem;
	text-decoration: underline;
	margin-top: 1rem;
	display:block;
	@media ${DeviceSize.xs} {
		font-size: 1.125rem;
  }
`
class Header extends Component {
	constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.slides.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.slides.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
	render(){
		const { activeIndex } = this.state;

		const items = this.props.slides || [];

		const carouselSlides =  items.map((item, itemIndex) => {
			return(
				<CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={itemIndex}
					className="h-100"
        >
					<Arrows src={images.arrowRight} alt=""/>
					<Title>{RichText.asText(item.headline)}</Title>
					<SubTitle>{RichText.render(item.subheader)}</SubTitle>
					<CarouselLink href={Link.url(item.link, PrismicConfig.linkResolver)}>{RichText.asText(item.link_label)}</CarouselLink>
        </CarouselItem>
			)
		});

		return(
			<MastheadHome>
				<BlueChevron />
				<HomeTriangleRed />
				<HomeTriangleYellow />
				<Container className="h-100">
					<Row className="h-100 align-items-center">
						<Col lg="8" className="mx-auto">
							<Carousel
								ride="carousel"
								slide={false}
								interval="6000"
				        activeIndex={activeIndex}
				        next={this.next}
				        previous={this.previous}
				      >
								{carouselSlides}
				      </Carousel>
						</Col>
					</Row>
				</Container>
			</MastheadHome>
		);
	}
}

export default Header
