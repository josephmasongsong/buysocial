import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import images from '../../ThemeImages';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function fallback() {
  return(
    <img src={images.excel} width="160" />
  )
}

const Hit = ({hit}) =>
  <div className="hit">

    <Document
      className="mr-4 light-shadow"
      file={{
        url: `${hit.link}`
      }}
      error={fallback()}
    >
      <Page pageNumber={1} width={160} />
    </Document>

    <div className="hit-body">
      <h4 className="mb-3">{hit.name}</h4>
      <p>{hit.description}</p>
      <a href={hit.link}>Download</a>
    </div>
  </div>

export default Hit
