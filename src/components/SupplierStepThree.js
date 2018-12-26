import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import styled from 'styled-components';

const WizardButton = styled.button`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.125rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: ${props => props.prev ? '1px solid #D9D458' : '1px solid #005891' };
	background-color: ${props => props.prev ? '#D9D458' : '#005891' };
	color: ${props => props.prev ? '#212529' : '#fff' };
`
class SupplierStepThree extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  render(){
    const { values } = this.props;
    return(
      <Fragment>
        <legend className="mb-4">Organization Contact</legend>

        <FormGroup>
          <Label htmlFor="">Full Name</Label>
          <Input
            type="text"
            name="contactName"
            id="contactName"
            placeholder=""
            onChange={this.props.handleChange('contactName')}
            defaultValue={values.contactName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Position</Label>
          <Input
            type="text"
            name="contactPosition"
            id="contactPosition"
            placeholder=""
            onChange={this.props.handleChange('contactPosition')}
            defaultValue={values.contactPosition}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder=""
            onChange={this.props.handleChange('email')}
            defaultValue={values.email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder=""
            onChange={this.props.handleChange('phone')}
            defaultValue={values.phone}
          />
        </FormGroup>
        <div className="mt-5">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }

}
export default SupplierStepThree
