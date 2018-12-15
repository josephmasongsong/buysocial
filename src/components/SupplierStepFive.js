import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap'

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
      <Form className="w-100">
        <legend>Affiliations</legend>
        <FormGroup tag="fieldset">
          <p>SECC Membership</p>
          <p className="text-muted">You can purchase an Social Enterprise Council of Canada (SECC) Membership for a discounted rate of $50 off when you become a Buy Social Canada Member.Are you interested in learning more / purchasing an SECC Membership?</p>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="seccMembership"
                id="seccMembership"
                onChange={this.props.handleChange('seccMembership')}
                defaultValue={values.seccMembership}
              />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
            <Input
              type="radio"
              name="seccMembership"
              id="seccMembership"
              onChange={this.props.handleChange('seccMembership')}
              defaultValue={values.seccMembership}
            />{' '}
              No
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Akcelos Social Enterprise Directory and Online Sales Service</legend>
          <p className="text-muted">You can purchase an Social Enterprise Council of Canada (SECC) Membership for a discounted rate of $50 off when you become a Buy Social Canada Member.Are you interested in learning more / purchasing an SECC Membership?</p>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="akcelosDirectory"
                id="akcelosDirectory"
                onChange={this.props.handleChange('akcelosDirectory')}
                defaultValue={values.akcelosDirectory}
              />{' '}
              Yes, I wish to be listed on this directory and agree to share information from this application with Akcelos
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input
              type="radio"
              name="akcelosDirectory"
              id="akcelosDirectory"
              onChange={this.props.handleChange('akcelosDirectory')}
              defaultValue={values.akcelosDirectory}
            />{' '}
              Yes, I wish to be listed on this directory AND sell my goods/services online and agree to share information from this application with Akcelos.
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input
              type="radio"
              name="akcelosDirectory"
              id="akcelosDirectory"
              onChange={this.props.handleChange('akcelosDirectory')}
              defaultValue={values.akcelosDirectory}
            />{' '}
              No, I do not wish to be listed on this directory or sell online
            </Label>
          </FormGroup>
        </FormGroup>
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
              defaultValue={values.confirm}
            />{' '}
            Yes
          </Label>
        </FormGroup>

        <Button color="primary" onClick={this.back}>Back</Button>
        <Button color="primary" onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    )
  }

}
export default SupplierStepFive
