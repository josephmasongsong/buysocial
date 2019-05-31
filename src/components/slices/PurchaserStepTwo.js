import React, { Component, Fragment } from 'react'
import { WizardButton } from '../../styles';
import { FormGroup, Label, Input } from 'reactstrap'
import SimpleReactValidator from 'simple-react-validator'

class PurchaserStepTwo extends Component {
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
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values } = this.props
    return(
      <Fragment>
        <legend className="mb-4">Business Information Continued</legend>
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
          {this.validator.message('businessNumber', values.businessNumber, 'required|alpha_num_dash')}

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
          {this.validator.message('revenue', values.revenue, 'required')}

          <p className="text-muted">The annual pricing for certification is based upon your business revenue</p>
        </FormGroup>
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
          {this.validator.message('contactName', values.contactName, 'required')}

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
          {this.validator.message('contactPosition', values.contactPosition, 'required')}

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
          {this.validator.message('email', values.email, 'required|email')}

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
          {this.validator.message('phone', values.phone, 'required|phone')}
        </FormGroup>


        <div className="mt-5">
          <WizardButton prev className="mr-1" onClick={this.back}>Back</WizardButton>
          <WizardButton onClick={this.saveAndContinue}>Save & Continue </WizardButton>
        </div>
      </Fragment>
    )
  }
}
export default PurchaserStepTwo
