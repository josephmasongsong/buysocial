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
	width: 20%;
  height: 100%;
  background: #005891;
  position: absolute;
  top: 0;
  z-index: 1;
  clip-path: polygon(0 0, 0 100%, 50% 50%);
	@media ${DeviceSize.xs} {
    display: none;
  }
`
const TriangleRed = styled.div`
  width: 10%;
  height: 50%;
  background: #D12331;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
	@media ${DeviceSize.xs} {
		width: 20%;
    height: 15%;
  }
`

const TriangleYellow = styled.div`
  width: 10%;
  height: 50%;
  background: #D9D458;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
	@media ${DeviceSize.xs} {
		width: 20%;
    height: 15%;
  }
`

const Arrows = styled.img`
  margin-bottom: 1rem!important;
	width: 64px;
	@media ${DeviceSize.xs} {
		width: 48px;
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
  TriangleLarge,
  TriangleRed,
  TriangleYellow
}
