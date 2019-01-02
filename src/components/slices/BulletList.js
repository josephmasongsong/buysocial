import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
	border-top: 1px solid #f8f9fa;
  h1,h2,h3,h4,h5 {
    margin-bottom: 0;
  }
  ul {
    margin-bottom: 0;
    li {
      margin-bottom: 1rem;
      padding-left: 1rem;
      &:last-child {
        margin-bottom: 0;
        p:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  img {
    height: 64px;
    margin-right: 1rem;
  }
  .media {
    margin-bottom: 1.5rem;
  }
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`

class BulletList extends React.Component {
  render () {
    const listItems = this.props.slice.items.map(function(item, itemIndex){
      return(
        <li key={itemIndex}><span className="fa-li" ><i className="fas fa-check"></i></span>{RichText.render(item.list_item)}</li>
      )
    })
    return(
      <ContentBlock>
        <Container>
          <Row>
            <Col lg="12" className="align-self-center">
              <Media className="align-items-center">
                <Media left>
                  <img src={this.props.slice.primary.icon.url} alt="" />
                </Media>
                <Media body>
                  {RichText.render(this.props.slice.primary.title)}
                </Media>
              </Media>
              <ul className="fa-ul">
                {listItems}
              </ul>
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    )
  }
}
export default BulletList
