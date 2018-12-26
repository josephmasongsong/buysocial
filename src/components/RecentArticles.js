import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Row } from 'reactstrap';
import ArticleItem from './ArticleItem';

class RecentArticles extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null
    }
  };
  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'blog_post'),{ orderings: '[my.blog_post.publication_date desc]', pageSize: 4 }).then(response => {
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
      const recent = document.map(function(post, postIndex){
        return(
          <ArticleItem doc={post} key={postIndex}/>
        )
      })
      return(
        <Row>
          {recent}
        </Row>
      )
    }
    return null;
  }
}

export default RecentArticles;
