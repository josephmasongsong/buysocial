import React from 'react';
import DirectoryNav from './DirectoryNav';
import DirectoryFooter from './DirectoryFooter';

const Layout = ({ prismicCtx, children }) => (
    <>
      <DirectoryNav prismicCtx={prismicCtx}/>
        {children}
      <DirectoryFooter />
    </>
)
export default Layout
