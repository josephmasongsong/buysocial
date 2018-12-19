import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Col } from 'reactstrap';
import { pdfjs } from 'react-pdf';
import DocumentItem from './DocumentItem';
import {
  InstantSearch,
} from 'react-instantsearch-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class FilteredList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialItems: [],
      items: [],
      doc: null,
    };
  }

  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'library_document'), { fetchLinks: 'document_tag.name', pageSize: 30 }).then(response => {
        if (response) {
          this.setState({
            doc: response.results,
            items: response.results
          });
        }

      });
    });
  }


  render(){


    if (this.state.doc) {
      const document = this.state.doc;
      console.log(JSON.stringify(document));
      const theDocs = document.map(function(docItem, docItemIndex){

        return(
          <DocumentItem item={docItem} key={docItemIndex}/>
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

export default FilteredList
