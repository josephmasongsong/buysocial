import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import ListItemWithSub from './ListItemWithSub';

class LibrarySidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
    };
  }

  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'document_category')).then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }
      });
    });
  }
  render(){

    if (this.state.doc) {
      const document = this.state.doc;


      const listItems = document.map(function(listItem, listItemIndex){

        const subItems = listItem.data.subcategories.map(function(subItem, subItemIndex){
          if (subItem.subcategory_name.length > 0) {
            return(
              <ListGroupItem key={subItemIndex} className="pl-4">{subItem.subcategory_name[0].text}</ListGroupItem>
            )
          } else {
            return null
          }
        });

        return(
          <div  key={listItemIndex}>
          {
            (listItem.data.subcategories.length > 1)
            ?
              <ListItemWithSub categoryName={listItem.data.name[0].text} subItems={subItems}/>
            :
            <ListGroupItem className="pl-0">{listItem.data.name[0].text}</ListGroupItem>
          }
          </div>
        )
      });

      return(
        <Row>
          <Col lg="3">

            <div className="input-group mb-5">
      			  <input className="form-control py-2" id="example-search-input" type="search" ></input>
      			  <span className="input-group-append">
      			    <button className="btn btn-primary" type="button">
      			      <i className="fas fa-search"></i>
      			    </button>
      			  </span>
      			</div>

            <ListGroup flush>
              <ListGroupItem className="pl-0">All Documents</ListGroupItem>
              {listItems}
            </ListGroup>
          </Col>
          <Col lg="8" className="ml-auto">
            <h1>Loading Documents...</h1>
          </Col>
        </Row>
      )
    }
    return(
      <h1>Loading Documents...</h1>
    )
  }
}
export default LibrarySidebar
