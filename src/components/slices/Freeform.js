import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import PrismicConfig from '../../prismic-configuration';

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.bgColor};
  ${({ bgImage }) => bgImage &&
    `background: url(${bgImage}) no-repeat center;
    background-size: cover;
    `
  }
  ${({ textCenter }) => textCenter &&
    `text-align: center;`
  }
  @media (max-width: 575.98px) {
    padding: 3rem 0;
  }
`

const Content = styled.div`
  h1,h2,h3 {
    color: #000;
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  p, li {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
  li {
    padding-left: 2rem;
  }
  li:before {
    font-family: 'Font Awesome 5 Free';
    content: '\f00c';
    font-weight: 900;
    margin-right: 1rem;
    color: #D9D458;
    margin-left: -2rem;
    width: 1rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
  .subtext {
    color: #6c757d;
    font-size: 1.25rem;
  }
  a {
    text-decoration: underline;
  }
  .callout-button {
    border: 1px solid #005891;
    background-color: #005891;
    color: #fff !important;
    -webkit-text-decoration: none;
    text-decoration: none;
    line-height: 1.5;
    text-align: center;
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    margin-top: 1.5rem;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 575.98px) {
    .subtext{
      font-size: 1.125rem;
    }
    p, li {
      font-size: 1rem;
    }
  }
`


const Freeform = props =>{
	const bgColor = (props.slice.primary.bg_color === "white") ? "#fff" : "#fbfbfb"
  const textCenter = (props.slice.primary.alignment === "true") ? true : false

	return(
		<Section bgColor={bgColor} textCenter={textCenter}>
			<Container>
				<Content>{RichText.render(props.slice.primary.body1, PrismicConfig.linkResolver )}</Content>
			</Container>
		</Section>
	)
}

export default Freeform
