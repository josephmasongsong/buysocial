import styled from 'styled-components';
import { DeviceSize } from './DeviceSize';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
  h1,h2,h3,h4,h5 {
    margin-bottom: 0;
  }
  &.applicationForm, &.withImage {
    h2,h3,h4,h5 {
      margin-bottom: 1rem;
    }
  }
  ul {
    margin-bottom: 0;
    li {
      margin-bottom: 1rem;
      padding-left: 1rem;
      &:last-child {
        margin-bottom: 0;
        p:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  img.bulletlist-icon {
    height: 64px;
    margin-right: 1rem;
  }
  .media {
    margin-bottom: 1.5rem;
  }
  .headerContainer {
    text-align: center;
    margin-bottom: 3rem;
    h1,h2,h3 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
      color: #6c757d!important;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  img.two-columns-icon {
    width: 64px;
    margin-right: 1rem;
  }
  .media.two-columns {
    margin-bottom: 1.5rem;
    .media-body {
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
  .column:nth-last-child(-n+2) {
    .media {
      margin-bottom: 0;
    }
  }
	@media (max-width: 575.98px) {
		padding: 3rem 0;
    .headerContainer {
      p {
        font-size: 1.125rem;
      }
    }
    .column:nth-last-child(-n+2) {
      .media {
        margin-bottom: 1.5rem;
      }
    }
  }
`

const BlockImage = styled.img`
	max-width: 100%;
	height: auto;
	width:100%;
	@media ${DeviceSize.xs} {
		margin-bottom: 1rem;
  }
`
const ContentSubTitle = styled.div`
  font-size: 1.25rem;
  color: #6c757d !important;
  margin-bottom: 1rem;
	@media ${DeviceSize.xs} {
		font-size: 1.125rem;
  }
`
const LinkTo = styled.a`
	text-decoration: underline;
  margin-bottom: 0;
  font-size: 1.25rem;
	@media ${DeviceSize.xs} {
		font-size: 1.125rem;
  }
`
const Blurb = styled.div`
	font-size: 1.125rem;
	@media ${DeviceSize.xs} {
		 p {
			 font-size: 1rem;
		 }
  }
`
const BlockContainer = styled.div`
  img, h4,h5,h6  {
    margin-bottom: 1rem;
  }
  img {
    height: 64px;
  }
  p:last-child {
    margin-bottom: 0;
  }
	a {
		text-decoration: underline;
	}
	@media ${DeviceSize.xs} {
		margin-bottom: 1.5rem;
	}
`

const GrayBlock = styled.div`
	padding: 6rem 0 3rem 0;
	position: relative;
	background: #fbfbfb;
	border-top:1px solid #f8f9fa;
  &.peopleContainer {
    padding-bottom: 6rem;
  }
  .column {
    margin-bottom: 3rem;
    h4,h5,h6 {
      margin-bottom: 1rem;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
	@media ${DeviceSize.xs} {
    padding: 3rem 0;
		.column:last-child {
			margin-bottom: 0;
		}
  }
`
const Person = styled.div`
	text-align: center;
	margin-top: 3rem;
	h4,h5,h6 {
		color: #343a40! important;
	}
	p {
		color: #6c757d !important;
		margin-bottom: 0;
	}
`
const PersonPhoto = styled.img`
	border-radius: 50px;
	margin-bottom: 1rem;
	height: 100px;
	width: 100px;
	@media ${DeviceSize.xs} {
		height: 72px;
		width: 72px;
	}
`

const TriangleRed = styled.div`
	width: 6.75%;
	height: 25%;
	background: #D12331;
	position: absolute;
	bottom: 0;
	z-index: 1;
	clip-path: polygon(0% 100%,0% 0%,100% 100%);

	/* width: 10%;
  height: 50%;
  background: #D12331;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  clip-path: polygon(0% 50%, 0% 100%, 100% 100%); */
	@media ${DeviceSize.xs} {
		width: 20%;
	  height: 20%;
	}
`
const TriangleBlue = styled.div`
	/* width: 10%;
  height: 50%;
  background: #005891;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 50%, 0% 0%, 100% 0%); */

	width: 6.75%;
	height: 25%;
	background: #005891;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);

	@media ${DeviceSize.xs} {
		width: 20%;
	  height: 20%;
	}
`

const WizardButton = styled.button`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.125rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: ${props => props.prev ? '1px solid #D9D458' : '1px solid #005891' };
	background-color: ${props => props.prev ? '#D9D458' : '#005891' };
	color: ${props => props.prev ? '#212529' : '#fff' };
`

const Name = styled.span`
    position: relative;
    &:after {
      content: '';
      width: 100%;
      border-top: 2px solid #005891;
      position: absolute;
      left: 0;
      bottom: -10px;
    }
  }
`
const Link = styled.a`
  position: relative;
  color: #005891 !important;
  @media ${DeviceSize.xs} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    padding: 1rem 1.5rem;
  }
`
const DocumentSection = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

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
  margin-top: 1.5rem;
  display: inline-block;
	&:hover {
		text-decoration: none;
	}
`
const ContentBody = styled.div`
  font-size: 1.125rem;
`
const Subtitle = styled.div`
  font-size: 1.5rem;
  color: #6c757d!important;
  margin-bottom: 1rem;
`
const MapContainer = styled.div`
	width: 100%;
	height: 242px;
  margin-bottom: 1.5rem;
`
const Address = styled.ul`
  padding-left: 0rem;
	margin-left: 1.25rem;
	a {
		color: #005891;
		text-decoration: underline;
	}
`

const PostImage = styled.div`
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  width: 220px;
  height: 160px;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.background})`};
  @media ${DeviceSize.xs} {
    width: 100%;
    max-width: 100%;
    height: 220px;
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
`
const PostBody = styled.div`
	font-size: 1.125rem;
	p:last-child {
		margin-bottom: 0;
	}
	img {
		max-width: 100% !important;
		margin: auto;
		display: block;
	}
	@media ${DeviceSize.xs} {
		font-size: 1rem;
	}
`

export {
  ContentBlock,
  BlockImage,
  ContentSubTitle,
  LinkTo,
  Blurb,
  BlockContainer,
  GrayBlock,
  WizardButton,
  Name,
  Link,
  DocumentSection,
  Person,
  PersonPhoto,
  TriangleRed,
  TriangleBlue,
  CalloutButton,
  ContentBody,
  Subtitle,
  MapContainer,
  Address,
  PostImage,
	PostBody
}
