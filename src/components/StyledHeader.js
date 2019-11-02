import styled from 'styled-components';
import { DeviceSize } from '../DeviceSize';

const Masthead = styled.section`
	position: relative;
  padding: 6rem 0;
	background: #fbfbfb;
	p:last-child {
		margin-bottom: 0;
	}
	@media ${DeviceSize.xs} {
		padding: 3rem 0;
  }
`
const TriangleLarge = styled.div`
  @media ${DeviceSize.xl} {
    /* width: 20%;
    height: 100%;
    background: #005891;
    position: absolute;
    top: 0;
    z-index: 1;
    clip-path: polygon(0 0, 0 100%, 50% 50%); */
		width: 6.75%;
		height: 25%;
		background: #005891;
		position: absolute;
		bottom: 0;
		z-index: 1;
		clip-path: polygon(0% 100%,0% 0%,100% 100%);
  }
  @media ${DeviceSize.mdMin} and ${DeviceSize.lg} {
    width: 10%;
    height: 50%;
    background: #005891;
    position: absolute;
    bottom: 0;
    z-index: 1;
    clip-path: polygon(0% 50%,0% 100%,100% 100%);
  }
	@media ${DeviceSize.xs} {
    display: none;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    width: 12.5%;
    height: 25%;
    background: #005891;
    position: absolute;
    bottom: 0;
    z-index: 1;
    clip-path: polygon(0% 100%,0% 0%,100% 100%);
  }
`

const BlueChevron = styled.div`
  @media ${DeviceSize.xl} {
    width: 20%;
    height: 100%;
    background: #005891;
    position: absolute;
    top: 0;
    z-index: 1;
    clip-path: polygon(0 0, 0 100%, 50% 50%);
		/* width: 6.75%;
		height: 25%;
		background: #005891;
		position: absolute;
		bottom: 0;
		z-index: 1;
		clip-path: polygon(0% 100%,0% 0%,100% 100%); */
  }
  @media ${DeviceSize.mdMin} and ${DeviceSize.lg} {
    width: 10%;
    height: 50%;
    background: #005891;
    position: absolute;
    bottom: 0;
    z-index: 1;
    clip-path: polygon(0% 50%,0% 100%,100% 100%);
  }
	@media ${DeviceSize.xs} {
    display: none;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    width: 12.5%;
    height: 25%;
    background: #005891;
    position: absolute;
    bottom: 0;
    z-index: 1;
    clip-path: polygon(0% 100%,0% 0%,100% 100%);
  }
`

const TriangleRed = styled.div`
  /* width: 10%;
  height: 50%;
  background: #D12331;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%); */

	width: 6.75%;
	height: 25%;
  background: #D12331;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);

  @media ${DeviceSize.mdMin} and ${DeviceSize.lg} {
    height: 25%;
  }
	@media ${DeviceSize.xs} {
		width: 20%;
    height: 15%;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    width: 12.5%;
    height: 25%;
  }
`

const TriangleYellow = styled.div`
  /* width: 10%;
  height: 50%;
  background: #D9D458;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%); */

	width: 6.75%;
	height: 25%;
  background: #D9D458;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);

  @media ${DeviceSize.mdMin} and ${DeviceSize.lg} {
    height: 25%;
  }
	@media ${DeviceSize.xs} {
		width: 20%;
    height: 15%;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    width: 12.5%;
    height: 25%;
  }
`

const TriangleBlueTwo = styled.div`
	width: 6.75%;
	height: 25%;
	background: #005891;
	/* background: #D9D458; */
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	-webkit-clip-path: polygon(100% 100%,0% 0%,100% 0%);
	clip-path: polygon(0% 100%,0% 0%,100% 0%);
`


const Arrows = styled.img`
  margin-bottom: 1rem!important;
	width: 64px;
	@media ${DeviceSize.xs} {
		width: 48px;
  }
`
const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  color: #6c757d!important;
  p:last-child {
    margin-bottom: 0;
  }
	a {
		text-decoration: underline;
	}
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    font-size: 1rem;
  }
	@media ${DeviceSize.xs} {
		font-size: 1rem;
	}
`
const Title = styled.h1`
  margin-bottom: 1rem;
  @media ${DeviceSize.xl} {
    font-size: 3.125rem;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    font-size: 2.5rem;
  }
	@media ${DeviceSize.xs} {
		font-size: 2.25rem;
	}
`
const Header = styled.h1`
	margin-bottom: 1rem;
	@media ${DeviceSize.xs} {
		font-size: 2rem;
	}
`
const HeaderImage = styled.img`
	box-shadow: 0 0 5px rgba(0,0,0,0.2);
	max-width: 100%;
	height: auto;
	@media ${DeviceSize.xs} {
		margin-bottom: 1.5rem;
		z-index: 2;
		position: relative;
  }
`
export {
  Arrows,
  Header,
  HeaderImage,
  Masthead,
  SubTitle,
  Title,
  TriangleLarge,
  TriangleRed,
  TriangleYellow,
	TriangleBlueTwo,
	BlueChevron
}
