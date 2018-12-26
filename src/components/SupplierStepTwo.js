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

class SupplierStepTwo extends Component {
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
        <legend className="mb-4">Organization Details</legend>
        <FormGroup>
          <Label htmlFor="organizationType">Organization Type</Label>
          <Input
            type="select"
            name="organizationType"
            id="organizationType"
            placeholder=""
            onChange={this.props.handleChange('organizationType')}
            defaultValue={values.organizationType}
          >
            <option>Choose from list...</option>
            <option>Non Profit</option>
            <option>Charity</option>
            <option>For Profit owned by Non Profit / Charity</option>
            <option>Cooperative</option>
            <option>Hybrid (ex. CCC or CIC)</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="organizationMission">Organization Mission</Label>
          <Input
            type="textarea"
            rows="3"
            name="organizationMission"
            id="organizationMission"
            placeholder=""
            onChange={this.props.handleChange('organizationMission')}
            defaultValue={values.organizationMission}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Canada Revenue Agency Business Registration Number</Label>
          <Input
            type="text"
            name="businessNumber"
            id="businessNumber"
            placeholder=""
            onChange={this.props.handleChange('businessNumber')}
            defaultValue={values.businessNumber}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Revenue</Label>
          <Input
            type="select"
            name="revenue"
            id="revenue"
            placeholder=""
            onChange={this.props.handleChange('revenue')}
            defaultValue={values.revenue}
          >
            <option>Under $1 million</option>
            <option>$1 - 5 million</option>
            <option>$5 - 20 million</option>
            <option>Over $20 million</option>
          </Input>
          <p className="text-muted">The annual pricing for certification is based upon your business revenue</p>
        </FormGroup>
        <div className="mt-5">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }

}
export default SupplierStepTwo
