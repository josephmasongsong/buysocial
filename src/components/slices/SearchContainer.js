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
    <div className={`mb-5`}></div>
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
  <Col md="8" className="ml-auto documentDb">
    <Hits hitComponent={Hit} />
    <div className="pagination">
      <Pagination showLast/>
    </div>
  </Col>


const SearchContainer = props =>
  <DocumentSection>
    <Container>
      <InstantSearch
        appId={process.env.REACT_APP_ALGOLIA_ID}
        apiKey={process.env.REACT_APP_ALGOLIA_KEY}
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
