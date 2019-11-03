import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
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
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia-min.css';
import Hit from './algolia/construction/Hit';

const Section = styled.section`
  padding: 6rem 0;
  .ais-HierarchicalMenu-link, .ais-Menu-link {
    border: 0;
  }
  .ais-Pagination-list {
    justify-content: normal;
    margin-top: 1.75rem;
  }
`

const ConditionalDisplay = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0
    ?
    <>{children}</>
    :

    <h3>
      Cannot find results for "{`${searchState.query}`}"
    </h3>
)

const Content = ({ clickHandler }) =>
  <>
    <Hits
      hitComponent={({ hit }) => (
        <Hit hit={hit} clickHandler={clickHandler} />
      )}
    />
  </>

export default class Directory extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchState: {}
    }
  }

  onSearchStateChange = searchState =>
    this.setState(() => ({
      searchState
    }))

  render() {
    const { searchState } = this.state
    return(
      <Section>
        <Container>
          <InstantSearch
            appId={process.env.REACT_APP_ALGOLIA_ID}
            apiKey={process.env.REACT_APP_ALGOLIA_KEY}
            indexName="prod_se_directory"
            searchState={searchState}
            onSearchStateChange={this.onSearchStateChange}
          >
            <Row>
              <Col lg="3">
                <SearchBox translations={{ placeholder: 'Search...' }} />
                <PoweredBy />

                <div className="mt-4"></div>
                <ToggleRefinement
                  attribute="bsc_certification"
                  label="Buy Social Certified Only"
                  value={true}
                />

                <h5 className={`mt-4`}>Location</h5>

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

                <h5 className={`mt-4`}>Categories</h5>

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


                <div className="mt-4"/>
                <ClearRefinements/>
              </Col>
              <Col lg="9" className="pl-5">
                <ScrollTo>
                  <ConditionalDisplay>
                    <Content />
                  </ConditionalDisplay>
                </ScrollTo>
                <Pagination
                  padding={2}
                  showLast
                />
              </Col>
            </Row>
          </InstantSearch>
        </Container>
      </Section>
    )
  }
}
