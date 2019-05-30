import styled from 'styled-components';
import { DeviceSize } from './DeviceSize';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
  h1,h2,h3,h4,h5 {
    margin-bottom: 0;
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
	@media (max-width: 575.98px) {
		padding: 3rem 0;
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
  color: #6c757d!important;
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

export {
  ContentBlock,
  BlockImage,
  ContentSubTitle,
  LinkTo,
  Blurb
}
