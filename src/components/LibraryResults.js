import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Col, Media } from 'reactstrap';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class LibraryResults extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null,
      pageNumber: 1,
    };
  }

  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'library_document')).then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }
      });
    });
  }
  render(){
    const { pageNumber } = this.state;
    if (this.state.doc) {
      const document = this.state.doc;
      const theDocs = document.map(function(docItem, docItemIndex){

        return(
          <Media key={docItemIndex} className="mb-5">
            <Media left>

              <Document
                className="mr-4 light-shadow"
                file={{
                  url: `${docItem.data.document_link.url}`
                }}
              >
                <Page pageNumber={pageNumber} width={160} />
              </Document>

            </Media>
            <Media body>
              <h4 className="mb-3">{docItem.data.title[0].text}</h4>
              <p>Inspirational, milestones collective impact then, outcomes social impact. Save the world innovate outcomes to compassion leverage innovate. We must stand up justice shared value data inspiring agile.</p>
              <a href={docItem.data.document_link.url} className="mb-0">Download PDF</a>
            </Media>
          </Media>
        )
      });
      return(
        <Col lg="8" className="ml-auto">
          {theDocs}
        </Col>
      )
    }
    return(
      <Col lg="8" className="ml-auto">
        <h1>Loading Documents...</h1>
      </Col>
    )
  }
}

export default LibraryResults
