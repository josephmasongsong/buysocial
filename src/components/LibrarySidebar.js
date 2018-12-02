import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import ListItemWithSub from './ListItemWithSub';
import SearchForm from './SearchForm';

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

          <Col lg="3">

            <SearchForm />

            <ListGroup flush>
              <ListGroupItem className="pl-0">All Documents</ListGroupItem>
              {listItems}
            </ListGroup>
          </Col>

      )
    }
    return(
      <h3>Loading Categories</h3>
    )
  }
}
export default LibrarySidebar
