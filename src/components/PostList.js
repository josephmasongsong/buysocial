import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Col } from 'reactstrap';
import Post from './Post';

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null
    };
  }
  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'blog_post'),{ fetchLinks: 'author.name' }).then(response => {
        if (response) {
          this.setState({
            doc: response.results,
          });
        }
      });
    });
  }
  render(){
    if (this.state.doc) {
      const document = this.state.doc;
      const posts = document.map(function(post, postIndex){
        return(
          <Post post={post} key={postIndex} />
        )
      });
      return(
        <Col lg="9">
          {posts}
        </Col>
      )
    }
    return(
      <Col lg="9">
        <h1>Loading Posts...</h1>
      </Col>
    )
  }
}

export default PostList
