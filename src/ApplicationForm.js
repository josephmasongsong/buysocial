import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import SlimHeader from './components/SlimHeader';

const ContentBlock = styled.section`
	position: relative;
	padding: 6rem 0;
  border-top: 1px solid #f8f9fa;
  border-bottom: 1px solid #f8f9fa;
`
class ApplicationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return(
      <Fragment>
				<SlimHeader headline="Social Enterprise Application Form" subheader="Fill out the form below and we will contact you regarding next steps."/>
        <ContentBlock>
          <Container>
						<Row>
							<Col lg="12" className="mx-auto">

							</Col>
						</Row>
          </Container>
        </ContentBlock>
      </Fragment>
    )
  }
}

export default ApplicationForm;
