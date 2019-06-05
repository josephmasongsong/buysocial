import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

//NAVIGATION BAR

const StyledNavbarBrand = styled(Link)`
	display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`
const HorizontalLogo = styled.img`
	width: 300px;
`
// RESULTS BODY

const ResultsBody = styled(Col)`
	min-height: calc(100vh - 147px);
`

//SEARCH WRAPPER

const SearchWrapper = styled.div`
  padding: 3.5rem 3.5rem 1.75rem;
  /* border-bottom: 1px solid #dee2e6; */
`

// HITS

const HitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.75rem;
  /* border-bottom: 1px solid #dee2e6; */
`
const HitBody = styled.div`
  flex: 1;
  color: #212529;
  a { text-decoration: underline; }
`

//PAGINATION WRAPPER

const PaginationWrapper = styled.div`
  padding: 1.75rem 0 3.5rem 3rem;
	display: flex;
  /* border-top: 1px solid #dee2e6; */
`

//INFOPANE

const DirectoryMapContainer = styled.div`
	position: relative;
  width: 100%;
  height: 242px;
  margin-bottom: 1.75rem;
`

const InfoPaneWrapper = styled.div`
  margin: 3.5rem 1.75rem 3.5rem;
  padding: 1.75rem;
  .h2 {
    font-family: 'SofiaProMedium';
    color: #005891;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

export {
  DirectoryMapContainer,
  HitWrapper,
  HitBody,
  HorizontalLogo,
  InfoPaneWrapper,
  PaginationWrapper,
	ResultsBody,
  SearchWrapper,
  StyledNavbarBrand
}
