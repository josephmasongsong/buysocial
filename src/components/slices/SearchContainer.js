import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  HierarchicalMenu,
} from 'react-instantsearch-dom';
import styled from 'styled-components';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

const Hit = ({hit}) =>
  <div className="hit">

    <Document
      className="mr-4 light-shadow"
      file={{
        url: `${hit.link}`
      }}
    >
      <Page pageNumber={1} width={160} />
    </Document>

    <div className="hit-body">
      <h4 className="mb-3">{hit.name}</h4>
      <p>{hit.description}</p>
      <a href={hit.link} className="hit-download-link">Download</a>
    </div>
  </div>

const Sidebar = () =>
  <Col md="3" className="sidebar">
    <SearchBox translations={{ placeholder: 'Begin typing...' }} />

    <HierarchicalMenu
      attributes={[
        'categories.lvl0',
        'categories.lvl1'
      ]}
      limit={10}
      rootPath={null}
      separator=" > "
      showParentLevel
    />

  </Col>

const Content = () =>
  <Col md="8" className="ml-auto">
    <Hits hitComponent={Hit} />
    <div className="pagination">
      <Pagination showLast/>
    </div>
  </Col>

class SearchContainer extends Component {
  render(){
    return(
      <ContentBlock>
        <Container>
          <InstantSearch
            appId="UVPOJDU7AN"
            apiKey="0ce11a5ad2a8fd5e0068ec55d40f0e80"
            indexName="bsc_google_sheet"
          >

            <Row>
              <Sidebar/>


              <Content/>
            </Row>

          </InstantSearch>
        </Container>
      </ContentBlock>
    )
  }
}

export default SearchContainer
