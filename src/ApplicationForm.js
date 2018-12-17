import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import SupplierForm from './SupplierForm';
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
      <div>
        <ContentBlock>
          <Container>
            <SupplierForm />
          </Container>
        </ContentBlock>
      </div>
    )
  }
}

export default ApplicationForm;
