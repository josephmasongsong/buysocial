import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../../prismic-configuration';
import { Col, Row, Container } from 'reactstrap';
import styled from 'styled-components';
import Post from './Post';
import Pagination from './Pagination';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null,
      currentDoc: [],
      currentPage: null,
    };
  }
  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'blog_post'),{ fetchLinks: 'author.name', pageSize: 100, orderings: '[my.blog_post.publication_date desc]' }).then(response => {
        if (response) {
          this.setState({
            doc: response.results,
          });
        }
      });
    });
  }

  onPageChanged = (data) => {
    const { doc } = this.state;
    const { currentPage, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentDoc = doc.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentDoc })
  }

  render(){
    if (this.state.doc) {

      const {
        doc,
        currentDoc,
      } = this.state;
      const totalDoc = doc.length

      if (totalDoc === 0) return null;


      return(
        <ContentBlock>
          <Container>
            <Row>
              <Col lg="12" className="postList">
                {currentDoc.map(post => (
                  <Post key={post.uid} post={post} />
                ))}
                <Pagination
                  totalRecords={totalDoc}
                  pageLimit={6}
                  pageNeighbours={1}
                  onPageChanged={this.onPageChanged}
                />
              </Col>
            </Row>
          </Container>
        </ContentBlock>

      )
    }
    return(
      <ContentBlock>
        <Container>
          <Row>
            <Col lg="12">
              <h1>Loading Posts...</h1>
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    )
  }
}

export default PostList
