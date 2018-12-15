import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class SupplierStepFour extends Component {
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
      <Form>
        <legend>Verification Process</legend>
        <FormGroup tag="fieldset">
          <p>Do you follow the principle of one member, one vote?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q1"
                id="q1"
                onChange={this.props.handleChange('q1')}
                value={values.q1}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q1"
              id="q1"
              onChange={this.props.handleChange('q1')}
              value={values.q1}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>


        <FormGroup tag="fieldset">
          <p>Does your board of directors mostly consist of members?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q2"
                id="q2"
                onChange={this.props.handleChange('q2')}
                defaultValue={values.q2}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q2"
              id="q2"
              onChange={this.props.handleChange('q2')}
              defaultValue={values.q2}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <p>Are most board members appointed by one or more public agencies?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q3"
                id="q3"
                onChange={this.props.handleChange('q3')}
                defaultValue={values.q3}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q3"
              id="q3"
              onChange={this.props.handleChange('q3')}
              defaultValue={values.q3}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <p>Are most board members appointed by one or more private corporations?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q4"
                id="q4"
                onChange={this.props.handleChange('q4')}
                defaultValue={values.q4}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q4"
              id="q4"
              onChange={this.props.handleChange('q4')}
              defaultValue={values.q4}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <p>Are most board members appointed by one or more religious communities?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q5"
                id="q5"
                onChange={this.props.handleChange('q5')}
                defaultValue={values.q5}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q5"
              id="q5"
              onChange={this.props.handleChange('q5')}
              defaultValue={values.q5}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <p>Is the primary purpose of the enterprise to create social, environmental or cultural value and impact?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="q6"
                id="q6"
                onChange={this.props.handleChange('q6')}
                defaultValue={values.q6}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q6"
              id="q6"
              onChange={this.props.handleChange('q6')}
              defaultValue={values.q6}
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
                id="q7"
                onChange={this.props.handleChange('q7')}
                defaultValue={values.q7}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q7"
              id="q7"
              onChange={this.props.handleChange('q7')}
              defaultValue={values.q7}
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
                id="q8"
                onChange={this.props.handleChange('q8')}
                defaultValue={values.q8}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q8"
              id="q8"
              onChange={this.props.handleChange('q8')}
              defaultValue={values.q8}
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
                id="q9"
                onChange={this.props.handleChange('q9')}
                defaultValue={values.q9}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q9"
              id="q9"
              onChange={this.props.handleChange('q9')}
              defaultValue={values.q9}
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
                id="q10"
                onChange={this.props.handleChange('q10')}
                defaultValue={values.q10}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q10"
              id="q10"
              onChange={this.props.handleChange('q10')}
              defaultValue={values.q10}
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
                id="q11"
                onChange={this.props.handleChange('q11')}
                defaultValue={values.q11}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="q11"
              id="q11"
              onChange={this.props.handleChange('q11')}
              defaultValue={values.q11}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>


        <Button color="primary" onClick={this.back}>Back</Button>
        <Button color="primary" onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    )
  }

}
export default SupplierStepFour
