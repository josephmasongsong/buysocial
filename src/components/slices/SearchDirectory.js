import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  HierarchicalMenu,
  ToggleRefinement,
  Hits,
  PoweredBy,
  ClearRefinements,
  ScrollTo,
  connectStateResults,
  connectHierarchicalMenu
} from 'react-instantsearch-dom';
import { RichText } from 'prismic-reactjs';
import 'instantsearch.css/themes/algolia-min.css';
import './search.scss';
import Hit from '../Hit';
import InfoPane from '../InfoPane';
import { SearchWrapper, PaginationWrapper, ResultsBody, InfoPaneWrapper, ConditionalMsg } from '../../DirectoryStyles';
import PrismicConfig from '../../prismic-configuration';
import Slider from 'react-slide-out';
import MobileSidebar from './MobileSidebar';
import 'react-slide-out/lib/index.css';
import './SearchDirectory.scss';

const VirtualHierarchicalMenu = connectHierarchicalMenu(() => null);

const Search = ({ openSlider, isMobile }) =>
  <SearchWrapper>
    <SearchBox translations={{ placeholder: 'Search by region, service category or name' }} />
    <div className={`d-flex justify-content-between`}>
      <ToggleRefinement
        attribute="bsc_certification"
        label="Buy Social Certified Only"
        value={true}
      />
      <PoweredBy />
    </div>
    {isMobile && <Button color="primary" size="sm" onClick={openSlider} >Filters</Button>}
  </SearchWrapper>


const ConditionalDisplay = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0
    ?
    <>{children}</>
    :

    <ConditionalMsg>
      Cannot find results for "{`${searchState.query}`}"
    </ConditionalMsg>
)

const Content = ({ clickHandler }) =>
  <>
    <Hits
      hitComponent={({ hit }) => (
        <Hit hit={hit} clickHandler={clickHandler} />
      )}
    />
  </>


const Sidebar = () =>
  <Col md={{ size: 2 }} xs={{ size: 12 }} className={`searchSidebar pl-4 py-5 border-right `}>

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

    <div className={`mt-5`} />

    <ClearRefinements/>
  </Col>


export default class SupplierSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null,
      isOpen: false,
      width: window.innerWidth,
      searchState: {},
    }
    this.changeInfoPane = this.changeInfoPane.bind(this)
    this.closeInfoPane = this.closeInfoPane.bind(this)
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

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

  onSearchStateChange = searchState =>
    this.setState(() => ({
      searchState,
    }));

  openSlider = () => {
    this.setState({
      isOpen: true
    }, () => {
      console.log(this.state.isOpen)
    });
  }
  closeSlider = () => {
    this.setState({
      isOpen: false
    });
  }

  render(){
    const { document } = this.props;
    const { width, searchState } = this.state;
    const isMobile = width <= 576;

    return(
      <Container fluid>

        <InstantSearch
          appId="UVPOJDU7AN"
          apiKey="0ce11a5ad2a8fd5e0068ec55d40f0e80"
          indexName="prod_se_directory"
          searchState={searchState}
          onSearchStateChange={this.onSearchStateChange}
        >

          {isMobile &&
            <>
              <VirtualHierarchicalMenu
                attributes={[
                  'region.lvl0',
                  'region.lvl1',
                ]}
              />
              <VirtualHierarchicalMenu
                attributes={[
                  'categories.lvl0',
                  'categories.lvl1'
                ]}
              />
            </>
          }

          <Row>

          {isMobile
            ?
            <Slider isOpen={this.state.isOpen} onOutsideClick={() => this.setState({isOpen: false})} leftToRight>
              <div style={{ width: '281.25px' }} >
                <MobileSidebar searchState={searchState} onSearchStateChange={this.onSearchStateChange}  />
              </div>
            </Slider>

            :
            <Sidebar />
          }


            <ResultsBody md="6" className={`p-0`}>
              <ScrollTo>
                <Search openSlider={this.openSlider} isMobile={isMobile}/>
                <ConditionalDisplay>
                  <Content clickHandler={this.changeInfoPane} />
                </ConditionalDisplay>
              </ScrollTo>
              <PaginationWrapper>
                <Pagination
                  padding={2}
                  showLast
                />
              </PaginationWrapper>
            </ResultsBody>

            <Col md={`4`}  className={`p-0 d-none d-sm-block`}>
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
