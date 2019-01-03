import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
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
class SupplierStepSix extends Component {
  constructor(props){
    super(props)
    this.validator = new SimpleReactValidator();
  }
  saveAndContinue = (e) => {
    e.preventDefault()
    if (this.validator.allValid()) {
      this.props.handleSubmit(e);
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
        <legend>Affiliations</legend>
        <FormGroup tag="fieldset">
          <p>SECC Membership</p>
          <p className="text-muted">You can purchase an Social Enterprise Council of Canada (SECC) Membership for a discounted rate of $50 off when you become a Buy Social Canada Member.Are you interested in learning more / purchasing an SECC Membership?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="seccMembership"
                onChange={this.props.handleChange('seccMembership')}
                value="yes"
                checked={values.seccMembership === 'yes'}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="seccMembership"
              onChange={this.props.handleChange('seccMembership')}
              value="no"
              checked={values.seccMembership === 'no'}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('seccMembership', values.seccMembership, 'required')}

        <FormGroup>
          <Label htmlFor="region">Referring Agency</Label>
          <Input
            type="select"
            name="referringAgency"
            id="referringAgency"
            placeholder=""
            onChange={this.props.handleChange('referringAgency')}
            defaultValue={values.referringAgency}
            >
            <option>Accelerating Social Impact</option>
            <option>Urban Matters</option>
            <option>Common Good Solutions</option>
            <option>Local Investment Toward Employment</option>
            <option>Open Door Ventures</option>
            <option>Realize Co-op Strategies</option>
            <option>Social Delta</option>
            <option>Other</option>
          </Input>
        </FormGroup>
        {this.validator.message('referringAgency', values.referringAgency, 'required')}

        <FormGroup>
          <legend>Akcelos Social Enterprise Directory and Online Sales Service</legend>
          <p className="text-muted">You can purchase an Social Enterprise Council of Canada (SECC) Membership for a discounted rate of $50 off when you become a Buy Social Canada Member.Are you interested in learning more / purchasing an SECC Membership?</p>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="akcelosDirectory"
                onChange={this.props.handleChange('akcelosDirectory')}
                value="list_only"
                checked={values.akcelosDirectory === 'list_only'}

              />{' '}
              Yes, I wish to be listed on this directory and agree to share information from this application with Akcelos
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input
              type="radio"
              name="akcelosDirectory"
              onChange={this.props.handleChange('akcelosDirectory')}
              value="list_and_sell"
              checked={values.akcelosDirectory === 'list_and_sell'}

            />{' '}
              Yes, I wish to be listed on this directory AND sell my goods/services online and agree to share information from this application with Akcelos.
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input
              type="radio"
              name="akcelosDirectory"
              onChange={this.props.handleChange('akcelosDirectory')}
              value="no"
              checked={values.akcelosDirectory === 'no'}

            />{' '}
              No, I do not wish to be listed on this directory or sell online
            </Label>
          </FormGroup>
        </FormGroup>
        {this.validator.message('akcelosDirectory', values.akcelosDirectory, 'required')}

        <legend>Confirmation</legend>

        <p>
          I confirm that this application is accurate and true, to the best of my knowledge, and I am not attempting to misconstrue any facts regarding my organization.
        </p>

        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="confirm"
              id="confirm"
              placeholder=""
              onChange={this.props.handleChange('confirm')}
              value="confirmed"
            />{' '}
            Yes I confirm that everything in this application is true to the best of my knowledge
          </Label>
        </FormGroup>
        {this.validator.message('confirm', values.confirm, 'required')}


        <div className="mt-4">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }

}
export default SupplierStepSix
