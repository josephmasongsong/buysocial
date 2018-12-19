import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Menu,
} from 'react-instantsearch-dom';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Hit = ({hit}) =>
  <div className="hit">

    <Document
      className="mr-4 light-shadow"
      file={{
        url: `${hit.data.document_link.url}`
      }}
    >
      <Page pageNumber={1} width={160} />
    </Document>

    <div className="hit-body">
      <h4 className="mb-3">{hit.data.title[0].text}</h4>
      <p>{hit.data.document_blurb.length ? hit.data.document_blurb[0].text : ''}</p>
      <a href={hit.data.document_link.url} className="hit-download-link">Download</a>
    </div>
  </div>

const Sidebar = () =>
  <Col lg="3" className="sidebar">
    <SearchBox translations={{ placeholder: 'Begin typing...' }} />
    <Menu attribute="data.document_tags.document_tag.data.name.text" />
  </Col>

const Content = () =>
  <Col lg="8" className="ml-auto">
    <Hits hitComponent={Hit} />
    <div className="pagination">
      <Pagination showLast/>
    </div>
  </Col>

class SearchContainer extends Component {


  render(){
    return(
      <InstantSearch
        appId="UVPOJDU7AN"
        apiKey="0ce11a5ad2a8fd5e0068ec55d40f0e80"
        indexName="bsc_production"
      >

        <Row>
          <Sidebar/>


          <Content/>
        </Row>

      </InstantSearch>
    )
  }
}

export default SearchContainer
