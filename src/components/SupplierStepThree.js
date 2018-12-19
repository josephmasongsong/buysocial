import React, { Component } from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap'

class SupplierStepThree extends Component {
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
        <legend className="mb-4">Organization Contact</legend>

        <FormGroup>
          <Label htmlFor="">Full Name</Label>
          <Input
            type="text"
            name="contactName"
            id="contactName"
            placeholder=""
            onChange={this.props.handleChange('contactName')}
            defaultValue={values.contactName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Position</Label>
          <Input
            type="text"
            name="contactPosition"
            id="contactPosition"
            placeholder=""
            onChange={this.props.handleChange('contactPosition')}
            defaultValue={values.contactPosition}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder=""
            onChange={this.props.handleChange('email')}
            defaultValue={values.email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder=""
            onChange={this.props.handleChange('phone')}
            defaultValue={values.phone}
          />
        </FormGroup>
        <div className="mt-5">
          <Button color="warning" className="mr-1" onClick={this.back}>Back</Button>
          <Button color="primary" onClick={this.saveAndContinue}>Save And Continue </Button>
        </div>
      </div>
    )
  }

}
export default SupplierStepThree
