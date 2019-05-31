import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import SimpleReactValidator from 'simple-react-validator'
import { WizardButton } from '../../styles';

class SupplierStepFour extends Component {
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
        <legend>Governance</legend>
        <p className="text-muted">Democratic governance is central to the operations of social enterprises.</p>
        <FormGroup>
          <Label htmlFor="">Organization Size</Label>
          <Input
            type="text"
            name="organizationSize"
            id="organizationSize"
            placeholder=""
            onChange={this.props.handleChange('organizationSize')}
            defaultValue={values.organizationSize}
          />
          {this.validator.message('organizationSize', values.organizationSize, 'required|numeric')}

        </FormGroup>
        <FormGroup tag="fieldset">
          <p>Do you follow the principle of one member, one vote?</p>
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
          <p>Does your board of directors mostly consist of members?</p>
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
          <p>Are most board members appointed by one or more public agencies?</p>
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
          <p>Are most board members appointed by one or more private corporations?</p>
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
          <p>Are most board members appointed by one or more religious communities?</p>
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


        <div className="mt-4">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }

}
export default SupplierStepFour
