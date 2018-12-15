import React, { Component } from 'react'
import SupplierStepOne from './components/SupplierStepOne'
import SupplierStepTwo from './components/SupplierStepTwo'
import SupplierStepThree from './components/SupplierStepThree'
import SupplierStepFour from './components/SupplierStepFour'
import SupplierStepFive from './components/SupplierStepFive'





class SupplierForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      step: 1,
      organizationName: '',
      inceptionYear: '',
      organizationAddress: '',
      region: '',
      website: '',
      twitter: '',
      facebook: '',
      organizationType: '',
      organizationSize: '',
      organizationMission: '',
      businessNumber: '',
      revenue: '',
      contactName: '',
      contactPosition: '',
      email: '',
      phone: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      q11: '',
      seccMembership: '',
      akcelosDirectory: '',
      referringAgency: '',
      confirm: '',
    }
  }
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }
  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  }
  render(){
    const { step } = this.state;
    const {
      organizationName,
      inceptionYear,
      organizationAddress,
      region,
      website,
      twitter,
      facebook,
      organizationType,
      organizationSize,
      organizationMission,
      businessNumber,
      revenue,
      contactName,
      contactPosition,
      email,
      phone,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      q11,
      seccMembership,
      akcelosDirectory,
      referringAgency,
      confirm
    } = this.state;

    const values = {
      organizationName,
      inceptionYear,
      organizationAddress,
      region,
      website,
      twitter,
      facebook,
      organizationType,
      organizationSize,
      organizationMission,
      businessNumber,
      revenue,
      contactName,
      contactPosition,
      email,
      phone,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      q11,
      seccMembership,
      akcelosDirectory,
      referringAgency,
      confirm
    };
    switch (step) {
    case 1:
      return <SupplierStepOne
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
             />
    case 2:
      return <SupplierStepTwo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
             />
    case 3:
      return <SupplierStepThree
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
            />
    case 4:
      return <SupplierStepFour
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
            />
    case 5:
      return <SupplierStepFive
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
            />
    }
  }
}
export default SupplierForm
