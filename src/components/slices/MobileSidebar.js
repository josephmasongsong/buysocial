import React from 'react';
import {
  InstantSearch,
  HierarchicalMenu,
  ClearRefinements,
} from 'react-instantsearch-dom';


const MobileSidebar = ({
  searchState,
  onSearchStateChange,
}) => (
    <div className={`searchSidebar pl-4 py-5 border-right `}>
      <InstantSearch
        appId="UVPOJDU7AN"
        apiKey="0ce11a5ad2a8fd5e0068ec55d40f0e80"
        indexName="prod_se_directory"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >

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
    </InstantSearch>
  </div>
)

export default MobileSidebar
