import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Container } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  padding: 6rem 0;
  background: url(${props => props.bgImage}) center no-repeat;
  background-color: #005891;
  background-size: cover;
  color: #fff;
  &:after {
    position: absolute;
    z-index: 2;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 88, 145, 0.90);
  }
  @media (max-width: 575.98px) {
    padding: 3rem 0;
  }
`
const QuoteContainer = styled.div`
  width: 100%;
`

const Quote = styled.div`
  font-family: 'SofiaProLight';
  font-size: 1.875rem;
  margin-bottom: 1rem;
  @media (max-width: 575.98px) {
    font-size: 1.5rem;
  }
`

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 6000,
  arrows:false,
  responsive: [
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 720,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ],
  appendDots: (dots) => {
    return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
  }
};

const Testimonials = props => {
  return(
    <Section bgImage={props.slice.primary.bg_image.url}>
      <Container style={{ position: "relative", zIndex: '3' }}>
        <Slider {...settings}>
          {props.slice.items.map(({ quote, name, organization }, i) =>
            <QuoteContainer key={i}>
              <Quote>
                "{RichText.asText(quote)}"
              </Quote>
              {name} - <em>{organization}</em>
            </QuoteContainer>
          )}
        </Slider>
      </Container>
    </Section>
  )
}

export default Testimonials
