import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  HierarchicalMenu,
  PoweredBy
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia-min.css';
import './search.scss';
import { DocumentSection } from '../../styles';
import Hit from './Hit';

const Sidebar = () =>
  <Col md="3" className="sidebar">
    <SearchBox translations={{ placeholder: 'Begin typing...' }} />
    <PoweredBy/>
    <HierarchicalMenu
      attributes={[
        'categories.lvl0',
        'categories.lvl1'
      ]}
      limit={10}
      defaultRefinement="Guidebooks"
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


const SearchContainer = props =>
  <DocumentSection>
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
  </DocumentSection>


export default SearchContainer
