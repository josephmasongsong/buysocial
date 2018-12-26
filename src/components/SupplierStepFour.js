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

        <div className="mt-4">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }

}
export default SupplierStepFour
