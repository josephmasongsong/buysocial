import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Collapse, Row, Col } from 'reactstrap';

class LibrarySidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({collapse: !this.state.collapse });
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
    const toggle = this.toggle;
    const isOpen = this.state.collapse;
    if (this.state.doc) {
      const document = this.state.doc;


      const listItems = document.map(function(listItem, listItemIndex){

        const subItems = listItem.data.subcategories.map(function(subItem, subItemIndex){
          if (subItem.subcategory_name.length > 0) {
            return(
              <a key={subItemIndex} href={subItem.subcategory_link.slug} className="list-group-item pl-4">{subItem.subcategory_name[0].text}</a>
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
            <div>
              <a className="list-group-item" onClick={toggle}><i className="fa fa-caret-down"></i> {listItem.data.name[0].text}</a>
              <Collapse isOpen={isOpen}>
                <div className="list-group">
                  {subItems}
                </div>
              </Collapse>
            </div>
            :
            <a href="/" className="list-group-item">{listItem.data.name[0].text}</a>
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

            <div className="list-group list-group-root">
              <a href="/" className="list-group-item border-top-0">All Documents</a>
              {listItems}
            </div>
          </Col>
          <Col lg="8" className="ml-auto">
            <h1>Smell Test</h1>
          </Col>
        </Row>
      )
    }
    return(
      <h1>Test</h1>
    )
  }
}
export default LibrarySidebar
