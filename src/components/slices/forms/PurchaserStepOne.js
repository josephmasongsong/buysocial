import React, { Component, Fragment } from 'react'
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import { WizardButton } from '../../../styles';
import SimpleReactValidator from 'simple-react-validator'

class PurchaserStepOne extends Component {
  constructor(props){
    super(props)
    this.validator = new SimpleReactValidator()
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
  render() {
    const { values } = this.props
    return(
      <Fragment>
          <legend className="mb-4">Business Information</legend>
          <FormGroup>
            <Label htmlFor="organizationName">Organization Name</Label>
            <Input
              type="text"
              name="organizationName"
              id="organizationName"
              placeholder=""
              onChange={this.props.handleChange('organizationName')}
              defaultValue={values.organizationName}
              />
              {this.validator.message('organizationName', values.organizationName, 'required')}
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
              {this.validator.message('organizationAddress', values.organizationAddress, 'required')}
          </FormGroup>
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
            {this.validator.message('organizationType', values.organizationType, 'required')}
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
              <option>Choose from list...</option>
              <option>Atlantic</option>
              <option>Pacific</option>
              <option>Southern Ontario</option>
              <option>Northern & Central Ontario</option>
              <option>Quebec</option>
              <option>Prairies & North</option>
            </Input>
            {this.validator.message('region', values.region, 'required')}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="website">Website</Label>
            <Input
              type="text"
              name="website"
              id="website"
              placeholder=""
              onChange={this.props.handleChange('website')}
              defaultValue={values.website}
              />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              type="text"
              name="facebook"
              id="facebook"
              placeholder=""
              onChange={this.props.handleChange('facebook')}
              defaultValue={values.facebook}
              />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="twitter">Twitter</Label>
            <Input
              type="text"
              name="twitter"
              id="twitter"
              placeholder=""
              onChange={this.props.handleChange('twitter')}
              defaultValue={values.twitter}
              />
          </FormGroup>

          <div className="mt-4">
            <WizardButton color="primary" onClick={this.saveAndContinue}>Save & Continue</WizardButton>
          </div>
      </Fragment>
    )
  }
}
export default PurchaserStepOne
