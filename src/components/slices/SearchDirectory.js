import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  HierarchicalMenu,
  ToggleRefinement,
  Hits,
  PoweredBy
} from 'react-instantsearch-dom';
import { RichText } from 'prismic-reactjs';
import 'instantsearch.css/themes/algolia-min.css';
import './search.scss';
import Hit from '../Hit';
import InfoPane from '../InfoPane';
import { SearchWrapper, PaginationWrapper, ResultsBody, InfoPaneWrapper } from '../../DirectoryStyles';
import PrismicConfig from '../../prismic-configuration';


const Search = () =>
  <SearchWrapper>
    <SearchBox translations={{ placeholder: 'Search social enterprises...' }} />
    <div className={`d-flex justify-content-between`}>
      <ToggleRefinement
        attribute="bsc_certification"
        label="Buy Social Certified Only"
        value={true}
      />
      <PoweredBy />
    </div>
  </SearchWrapper>


const Content = ({ clickHandler }) =>
  <>
    <Hits
      hitComponent={({ hit }) => (
        <Hit hit={hit} clickHandler={clickHandler} />
      )}
    />

  </>


const Sidebar = () =>
  <Col md={{ size: 2 }} className={`searchSidebar pl-4 py-5 border-right`}>

    <h5>Location</h5>

    <HierarchicalMenu
      attributes={[
        'region.lvl0',
        'region.lvl1'
      ]}
      limit={10}
      rootPath={null}
      separator=" > "
      showParentLevel
    />

    <h5 className={`mt-5`}>Categories</h5>

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


export default class SupplierSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null,
    }
    this.changeInfoPane = this.changeInfoPane.bind(this)
    this.closeInfoPane = this.closeInfoPane.bind(this)
  }

  changeInfoPane(hit, e) {
    this.setState({
        doc: hit
    }, () => {
        console.log(this.state.doc)
    });
  }



  closeInfoPane() {
    this.setState({
        doc: null
    }, () => {
        console.log(this.state.doc)
    });
  }

  render(){
    const { document } = this.props;

    return(
      <Container fluid>
        <InstantSearch
          appId="UVPOJDU7AN"
          apiKey="0ce11a5ad2a8fd5e0068ec55d40f0e80"
          indexName="se_directory"
        >
          <Row>
            <Sidebar/>

            <ResultsBody md="6" className={`p-0`}>
              <Search />
              <Content clickHandler={this.changeInfoPane} />
              <PaginationWrapper>
                <Pagination showLast/>
              </PaginationWrapper>
            </ResultsBody>

            <Col md={`4`}  className={`p-0`}>
              {(this.state.doc != null)
                ?
                <InfoPane hit={this.state.doc} clickHandler={this.closeInfoPane} />
                :
                <InfoPaneWrapper className={`shadow-sm border`}>
                  <h1 className={`h2`}>{RichText.asText(document.title)}</h1>
                  {RichText.render(document.body, PrismicConfig.linkResolver)}
                </InfoPaneWrapper>
              }
            </Col>
          </Row>
        </InstantSearch>
      </Container>
    )
  }
}
