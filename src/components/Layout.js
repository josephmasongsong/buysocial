import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ prismicCtx, children }) => (
    <>
      <Navigation prismicCtx={prismicCtx}/>
        {children}
      <Footer prismicCtx={prismicCtx} />
    </>
)
export default Layout
