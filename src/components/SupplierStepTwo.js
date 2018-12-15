import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class SupplierStepTwo extends Component {
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
        <legend>Organization Details</legend>
        <FormGroup>
          <Label htmlFor="organizationType">Organization Type</Label>
          <Input
            type="select"
            name="organizationType"
            id="organizationType"
            placeholder=""
            onChange={this.props.handleChange('organizationType')}
            defaultValue={values.organizationType}
          >
            <option>Non Profit</option>
            <option>Charity</option>
            <option>For Profit owned by Non Profit / Charity</option>
            <option>Cooperative</option>
            <option>Hybrid (ex. CCC or CIC)</option>
          </Input>
        </FormGroup>
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

        <FormGroup>
          <Label htmlFor="organizationMission">Organization Mission</Label>
          <Input
            type="textarea"
            rows="5"
            name="organizationMission"
            id="organizationMission"
            placeholder=""
            onChange={this.props.handleChange('organizationMission')}
            defaultValue={values.organizationMission}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Canada Revenue Agency Business Registration Number</Label>
          <Input
            type="text"
            name="businessNumber"
            id="businessNumber"
            placeholder=""
            onChange={this.props.handleChange('businessNumber')}
            defaultValue={values.businessNumber}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Revenue</Label>
          <Input
            type="select"
            name="revenue"
            id="revenue"
            placeholder=""
            onChange={this.props.handleChange('revenue')}
            defaultValue={values.revenue}
          >
            <option>Under $1 million</option>
            <option>$1 - 5 million</option>
            <option>$5 - 20 million</option>
            <option>Over $20 million</option>
          </Input>
          <p className="text-muted">The annual pricing for certification is based upon your business revenue</p>
        </FormGroup>
        <Button color="primary" onClick={this.back}>Back</Button>
        <Button color="primary" onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    )
  }

}
export default SupplierStepTwo
