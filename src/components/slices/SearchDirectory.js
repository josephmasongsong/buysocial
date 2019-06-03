import React, { Component } from 'react';
import { Col, Row, Container, Media, Button } from 'reactstrap';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  HierarchicalMenu,
  ToggleRefinement,
  PoweredBy
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia-min.css';
import './search.scss';
import { DocumentSection } from '../../styles';

const Content = ({ clickHandler }) =>
  <Col md="6" className="px-5 py-5">
    <SearchBox translations={{ placeholder: 'Search social enterprises...' }} />
    <div className={`d-flex justify-content-between`}>
      <ToggleRefinement
        attribute="bsc_certification"
        label="Buy Social Canada Certified Only"
        value={true}
      />
      <PoweredBy />
    </div>
    <Hits
      hitComponent={({ hit }) => (
        <Hit hit={hit} clickHandler={clickHandler} />
      )}
    />
    <div className="pagination">
      <Pagination showLast/>
    </div>
  </Col>

const Hit = ({hit, clickHandler}) => {

  return(
    <div className="hit">
      <div className="hit-body">
        <Media className={``}>
          <Media left className={`mr-3`}>
            {hit.image && <img src={hit.image} width="140" height="140" alt={hit.name} className={`border`} />}
          </Media>
          <Media body>
            <div className={`d-flex justify-content-between`}>
              <div className={`d-block`}>
                <h4 className={`mb-1`} onClick={() => clickHandler(hit)} style={{ cursor: "pointer" }}>{hit.name}</h4>
                <p className={`text-secondary mb-2`}>{hit.website}</p>
              </div>
              <div className={`d-block`}>
                {/* { hit.bsc_certification  && <img src={hit.bsc_certification} width="48" height="48" alt="Buy Social Certified" /> } */}
              </div>
            </div>
            <p className={`mb-0`}>
              {hit.phone} <br/>
              {hit.email} <br/>
              {hit.address} <br/>
             </p>
          </Media>
        </Media>
      </div>
    </div>
  )
}

const Sidebar = () =>
  <Col md={{ size: 2 }} className={`searchSidebar border-right pl-4 py-5 bg-white`}>
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


const InfoPane = props => (
  <>
    { props.hit.name && <h1>{props.hit.name}</h1> }
    { props.hit.description && <p className="lead mb-5">{props.hit.description}</p> }
    { props.hit.phone && <Button color="primary" block size="lg">{props.hit.phone}</Button> }
    { props.hit.email && <Button color="secondary" block size="lg">{props.hit.email}</Button> }
    { props.hit.website && <Button color="dark" block size="lg">{props.hit.website}</Button> }
  </>
)


export default class SupplierSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null,
    }
    this.changeInfoPane = this.changeInfoPane.bind(this)
  }

  changeInfoPane(hit) {
    this.setState({
        doc: hit
    }, () => {
        console.log(this.state.doc)
    });
  }

  render(){
    return(
      <DocumentSection className="bg-light">
        <Container fluid>
          <InstantSearch
            appId="UVPOJDU7AN"
            apiKey="0ce11a5ad2a8fd5e0068ec55d40f0e80"
            indexName="se_directory"
          >
            <Row>
              <Sidebar/>
              <Content clickHandler={this.changeInfoPane} />
              <Col md={`4`} className={`py-5 px-5 bg-white border-left`}>
                {(this.state.doc != null)
                  ?
                  <InfoPane hit={this.state.doc} />
                  :
                  <h1>Search for a social enterprise...</h1>
                }
              </Col>
            </Row>
          </InstantSearch>
        </Container>
      </DocumentSection>
    )
  }
}
