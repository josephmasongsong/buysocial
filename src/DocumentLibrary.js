import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import SlimHeader from './components/SlimHeader';
import Prismic from 'prismic-javascript';
import { RichText, Link } from 'prismic-reactjs'
import PrismicConfig from './prismic-configuration';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
  border-top: 1px solid #f8f9fa;
  border-bottom: 1px solid #f8f9fa;
`
class DocumentLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
    }
  }
  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'library_document'),{ pageSize: 100, orderings: '[my.library_document.first_publication_date desc]' }).then(response => {
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
      const documents = this.state.doc.map((item, itemIndex) => {
        return(
          <Col lg="12" key={itemIndex}>
            <div className="mb-3 pb-3 border-bottom">
              <h5>{RichText.asText(item.data.title)}</h5>
              {RichText.render(item.data.document_blurb)}
              <a href={Link.url(item.data.document_link, PrismicConfig.linkResolver)}>{item.data.document_link.name}</a>
            </div>
          </Col>
        )
      })

      return(
        <Fragment>
  				<SlimHeader headline="Document Links" subheader=""/>
          <ContentBlock>
            <Container>
  						<Row>
                {documents}
  						</Row>
            </Container>
          </ContentBlock>
        </Fragment>
      )
    }
    return(
      <SlimHeader headline="Document Links" subheader=""/>
    )
  }
}

export default DocumentLibrary;
