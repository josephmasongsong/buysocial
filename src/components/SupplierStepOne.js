import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class SupplierStepOne extends Component {
  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  render(){
    const { values } = this.props;
    return(
      <Form className="w-100">
        <legend>Social Enterprise Information</legend>
        <FormGroup>
          <Label htmlFor="organizationName">Organization Name</Label>
          <Input
            type="text"
            name="organizationName"
            id="organizationName"
            placeholder=""
            onChange={this.props.handleChange('organizationName')}
            defaultValue={values.organizationName}
            defaultChecked
            />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inceptionYear">Year of Inception</Label>
          <Input
            type="text"
            name="inceptionYear"
            id="inceptionYear"
            placeholder=""
            onChange={this.props.handleChange('inceptionYear')}
            defaultValue={values.inceptionYear}
            />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="organizationAddress">Organization Address</Label>
          <Input
            type="text"
            name="organizationAddress"
            id="organizationAddress"
            placeholder=""
            onChange={this.props.handleChange('organizationAddress')}
            defaultValue={values.organizationAddress}
            />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="region">Region</Label>
          <Input
            type="select"
            name="region"
            id="region"
            placeholder=""
            onChange={this.props.handleChange('region')}
            defaultValue={values.region}
            >
            <option>Atlantic</option>
            <option>Pacific</option>
            <option>Southern Ontario</option>
            <option>Northern & Central Ontario</option>
            <option>Quebec</option>
            <option>Prairies & North</option>
          </Input>
        </FormGroup>

        <Button color="primary" onClick={this.saveAndContinue}>Save & Continue</Button>
      </Form>
    )
  }
}
export default SupplierStepOne
