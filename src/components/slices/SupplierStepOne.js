import React, { Component, Fragment } from 'react'
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
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

class SupplierStepOne extends Component {
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
  render(){
    const { values } = this.props;
    return(
      <Fragment>
          <legend className="mb-4">Social Enterprise Information</legend>
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
            <Label htmlFor="inceptionYear">Year of Inception</Label>
            <Input
              type="text"
              name="inceptionYear"
              id="inceptionYear"
              placeholder=""
              onChange={this.props.handleChange('inceptionYear')}
              defaultValue={values.inceptionYear}
              />
              {this.validator.message('inceptionYear', values.inceptionYear, 'required|numeric')}

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
export default SupplierStepOne
