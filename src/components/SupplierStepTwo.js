import React, { Component } from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap'

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
      <div>
        <legend className="mb-4">Organization Details</legend>
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
            <option>Choose from list...</option>
            <option>Non Profit</option>
            <option>Charity</option>
            <option>For Profit owned by Non Profit / Charity</option>
            <option>Cooperative</option>
            <option>Hybrid (ex. CCC or CIC)</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="organizationMission">Organization Mission</Label>
          <Input
            type="textarea"
            rows="3"
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
        <div className="mt-5">
          <Button color="warning" className="mr-1" onClick={this.back}>Back</Button>
          <Button color="primary" onClick={this.saveAndContinue}>Save And Continue </Button>
        </div>
      </div>
    )
  }

}
export default SupplierStepTwo
