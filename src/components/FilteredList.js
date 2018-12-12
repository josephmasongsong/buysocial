import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Col } from 'reactstrap';
import { pdfjs } from 'react-pdf';
import DocumentItem from './DocumentItem';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class FilteredList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialItems: [],
      items: [],
      doc: null
    };
  }

  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'library_document'), { pageSize: 5 }).then(response => {
        if (response) {
          this.setState({
            doc: response.results,
            items: response.results
          });
        }
      });
    });
  }

  filterList = (event) => {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(item => item.toString().toLowerCase().search(
      event.target.value.toLowerCase()) !== -1);
    this.setState({ items: updatedList })
  }

  render(){

    if (this.state.doc) {
      const document = this.state.doc;
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
