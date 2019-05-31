import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import SimpleReactValidator from 'simple-react-validator'
import { WizardButton } from '../../styles';

class PurchaserStepFour extends Component {
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()
  }
  saveAndContinue = (e) => {
    e.preventDefault()
    if (this.validator.allValid()) {
      this.props.handleSubmit(e)
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
        <legend>Affiliations</legend>
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
          <label>SECC Membership</label>
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
export default PurchaserStepFour
