import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import SimpleReactValidator from 'simple-react-validator'
import { WizardButton } from '../../styles';

class SupplierStepFive extends Component {
  constructor(props){
    super(props)
    this.validator = new SimpleReactValidator();
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
  render(){
    const { values } = this.props;
    return(
      <Fragment>
        <legend className="mb-4">Verification Process</legend>
        <FormGroup tag="fieldset">
          <p>Is the primary purpose of the enterprise to create social, environmental or cultural value and impact?</p>
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

        <FormGroup tag="fieldset">
          <p>Are at least 50% of profits reinvested in the mission of your organization?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q7"
                onChange={this.props.handleChange('q7')}
                value="yes"
                checked={values.q7 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q7"
              onChange={this.props.handleChange('q7')}
              value="no"
              checked={values.q7 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q7', values.q7, 'required')}

        <FormGroup tag="fieldset">
          <p>Is the sale of goods or services a principal revenue source of the enterprise being certified?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q8"
                onChange={this.props.handleChange('q8')}
                value="yes"
                checked={values.q8 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q8"
              onChange={this.props.handleChange('q8')}
              value="no"
              checked={values.q8 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q8', values.q8, 'required')}

        <FormGroup tag="fieldset">
          <p>Is the enterprise incorporated in a manner to support, promote, and ensure stakeholder value over shareholder value?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q9"
                onChange={this.props.handleChange('q9')}
                value="yes"
                checked={values.q9 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q9"
              onChange={this.props.handleChange('q9')}
              value="no"
              checked={values.q9 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q9', values.q9, 'required')}


        <FormGroup tag="fieldset">
          <p>Does the organization and/or enterprise operate in a transparent and responsible manner?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q10"
                onChange={this.props.handleChange('q10')}
                value="yes"
                checked={values.q10 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q10"
              onChange={this.props.handleChange('q10')}
              value="no"
              checked={values.q10 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q10', values.q10, 'required')}

        <FormGroup tag="fieldset">
          <p>In the event of the organization's dissolution, are its remaining properties given to another entity working in a similar field?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q11"
                onChange={this.props.handleChange('q11')}
                value="yes"
                checked={values.q11 === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q11"
              onChange={this.props.handleChange('q11')}
              value="no"
              checked={values.q11 === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('q11', values.q11, 'required')}

        <div className="mt-4">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }

}
export default SupplierStepFive
