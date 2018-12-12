import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';

class PostTags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
    };
  }
  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'post_tag')).then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }
      });
    });
  }
  render(){
    if (this.state.doc) {
      const document = this.state.doc;
      const listItems = document.map(function(postTag, postTagIndex){
        return(
          <ListGroupItem key={postTagIndex} className="pl-0">{postTag.data.name[0].text}</ListGroupItem>
        )
      });
      return(
        <Col lg="3" className="ml-auto pl-lg-5">
          <ListGroup flush>
            <ListGroupItem className="pl-0 active">All Tags</ListGroupItem>
            {listItems}
          </ListGroup>
        </Col>
      )
    }
    return(
      <h5>Loading Post Tags...</h5>
    )
  }
}
export default PostTags
