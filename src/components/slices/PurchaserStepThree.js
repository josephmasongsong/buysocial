import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input, FormText } from 'reactstrap'
import styled from 'styled-components';
import SimpleReactValidator from 'simple-react-validator'

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

class PurchaserStepThree extends Component {
  constructor(props){
    super(props)
    this.validator = new SimpleReactValidator()
  }
  saveAndContinue = (e) => {
    e.preventDefault()
    if (this.validator.allValid()) {
      this.props.nextStep()
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values } = this.props
    return(
      <Fragment>
        <legend>Verification Process</legend>
        <FormText className="mb-4">Please select the following commitments, to determine if your purchasing organization is eligible for a Buy Social certification.  If we have any questions we will follow up with the contact information provided above.</FormText>
        <FormGroup tag="fieldset">
          <p>Is the primary purpose of the enterprise to create social, environmental or cultural value and impact?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q1"
                onChange={this.props.handleChange('q1')}
                value="yes"
                checked={values.q1 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q1"
              onChange={this.props.handleChange('q1')}
              value="no"
              checked={values.q1 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q1', values.q1, 'required')}

        <FormGroup tag="fieldset">
          <p>Are at least 50% of profits reinvested in the mission of your organization?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q2"
                onChange={this.props.handleChange('q2')}
                value="yes"
                checked={values.q2 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q2"
              onChange={this.props.handleChange('q2')}
              value="no"
              checked={values.q2 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q2', values.q2, 'required')}

        <FormGroup tag="fieldset">
          <p>Is the sale of goods or services a principal revenue source of the enterprise being certified?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q3"
                onChange={this.props.handleChange('q3')}
                value="yes"
                checked={values.q3 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q3"
              onChange={this.props.handleChange('q3')}
              value="no"
              checked={values.q3 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q3', values.q3, 'required')}

        <FormGroup tag="fieldset">
          <p>Is the enterprise incorporated in a manner to support, promote, and ensure stakeholder value over shareholder value?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q4"
                onChange={this.props.handleChange('q4')}
                value="yes"
                checked={values.q4 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q4"
              onChange={this.props.handleChange('q4')}
              value="no"
              checked={values.q4 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q4', values.q4, 'required')}


        <FormGroup tag="fieldset">
          <p>Does the organization and/or enterprise operate in a transparent and responsible manner?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q5"
                onChange={this.props.handleChange('q5')}
                value="yes"
                checked={values.q5 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q5"
              onChange={this.props.handleChange('q5')}
              value="no"
              checked={values.q5 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q5', values.q5, 'required')}

        <FormGroup tag="fieldset">
          <p>In the event of the organization's dissolution, are its remaining properties given to another entity working in a similar field?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q6"
                onChange={this.props.handleChange('q6')}
                value="yes"
                checked={values.q6 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q6"
              onChange={this.props.handleChange('q6')}
              value="no"
              checked={values.q6 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q6', values.q6, 'required')}


        <div className="mt-4">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }
}
export default PurchaserStepThree
