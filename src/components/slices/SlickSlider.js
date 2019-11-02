import React from 'react'
import styled from 'styled-components';
import { DeviceSize } from '../../DeviceSize';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { Link, RichText } from 'prismic-reactjs';
import images from '../../ThemeImages';
import PrismicConfig from '../../prismic-configuration';

import {
	Arrows,
	BlueChevron,
  Masthead,
	SubTitle,
	Title,
  TriangleRed,
  TriangleYellow,
} from './../StyledHeader'

const MastheadHome = styled(Masthead)`
	height: 600px;
	a:hover {
		text-decoration: none;
	}
	.slick-slide > div {
		position: relative;
		z-index: 5;
	}
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

const settings = {
  dots: false,
	arrows: false,
  infinite: true,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000
};

const SlickSlider = props => {
  return(
    <MastheadHome>
      <BlueChevron />
      <HomeTriangleRed />
      <HomeTriangleYellow />
				<Container className="h-100">
					<Row className="h-100 justify-content-center align-items-center">
						<Col md="8">
							<Slider {...settings}>
								{props.slice.items.map(({ title, subtext, link }, index) =>
									<a href={Link.url(link, PrismicConfig.linkResolver)} key={index}>
										<Arrows src={images.arrowRight} alt="Buy Social Canada"/>
										<Title>{RichText.asText(title)}</Title>
										<SubTitle>{RichText.render(subtext)}</SubTitle>
									</a>
								)}
							</Slider>
						</Col>
					</Row>
				</Container>
    </MastheadHome>
  )
}

export default SlickSlider
