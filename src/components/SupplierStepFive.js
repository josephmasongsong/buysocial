import React, { Component } from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap'

class SupplierStepFive extends Component {
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
      <div>

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

          <div className="mt-4">
            <Button color="warning" onClick={this.back} className="mr-1">Back</Button>
            <Button color="primary" onClick={this.saveAndContinue}>Save And Continue </Button>
          </div>

      </div>
    )
  }

}
export default SupplierStepFive
