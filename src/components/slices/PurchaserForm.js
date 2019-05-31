import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Form, Container, Row, Col } from 'reactstrap'
import PurchaserStepOne from './PurchaserStepOne'
import PurchaserStepTwo from './PurchaserStepTwo'
import PurchaserStepThree from './PurchaserStepThree'
import PurchaserStepFour from './PurchaserStepFour'

import { ContentBlock } from '../../styles'


const encode = (data) => {
   return Object.keys(data)
       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
       .join("&");
 }



class PurchaserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      organizationName: '',
      organizationAddress: '',
      region: '',
      organizationType: '',
      revenue: '',
      website: '',
      facebook: '',
      twitter: '',
      contactName: '',
      contactPosition: '',
      email: '',
      phone: '',
      businessNumber: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      referringAgency: '',
      seccMembership: '',
      confirm: '',
    }
  }
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }
  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  }

  handleSubmit = e => {
    const redirect = this.props.slice.primary.redirect_link.uid

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "purchaser", ...this.state })
    })
      .catch(error => alert(error));

    e.preventDefault();
    this.props.history.push('/' + redirect);
  };

  render() {
    const { step } = this.state
    const {
      organizationName,
      organizationAddress,
      region,
      organizationType,
      revenue,
      website,
      facebook,
      twitter,
      contactName,
      contactPosition,
      email,
      phone,
      businessNumber,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      referringAgency,
      seccMembership,
      confirm
    } = this.state

    const values = {
      organizationName,
      organizationAddress,
      region,
      organizationType,
      revenue,
      website,
      facebook,
      twitter,
      contactName,
      contactPosition,
      email,
      phone,
      businessNumber,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      referringAgency,
      seccMembership,
      confirm
    }

    let whichStep = (step) => {
      switch (step) {
        case 1:
          return <PurchaserStepOne
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                 />
        case 2:
          return <PurchaserStepTwo
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   handleChange={this.handleChange}
                   values={values}
                  />
        case 3:
          return <PurchaserStepThree
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                 />
        case 4:
          return <PurchaserStepFour
                  prevStep={this.prevStep}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  values={values}
                 />
        default: return null
      }
    }

    return(
      <ContentBlock className={`applicationForm`}>
        <Container>
          <Row>
            <Col lg={`12`}>
              <Form>
                {whichStep(step)}
              </Form>
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    )
  }

}
export default withRouter(PurchaserForm)
