import styled from 'styled-components';

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
  img {
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

export {
  ContentBlock
}
