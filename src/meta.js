import React from 'react';
import {Helmet} from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import images from './ThemeImages';

export default document =>
  <Helmet>
    <title>{RichText.asText(document.page_title) || 'Buy Social Canada'}</title>
    {document.page_blurb ? <meta name="description" content={RichText.asText(document.page_blurb)} /> : <meta name="description" content='Buy Social Canada' /> }
    {document.page_image ? <meta name="og:image" content={document.page_image.url} /> : <meta name="og:image" content={images.logo} /> }
  </Helmet>
