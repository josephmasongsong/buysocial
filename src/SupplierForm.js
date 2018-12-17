import React, { Component } from 'react'
import { Form } from 'reactstrap'
import SupplierStepOne from './components/SupplierStepOne'
import SupplierStepTwo from './components/SupplierStepTwo'
import SupplierStepThree from './components/SupplierStepThree'
import SupplierStepFour from './components/SupplierStepFour'
import SupplierStepFive from './components/SupplierStepFive'
import SupplierStepSix from './components/SupplierStepSix'


const encode = (data) => {
   return Object.keys(data)
       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
       .join("&");
 }

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

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "supplier", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };


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

    let whichStep = (step) => {
      switch( step ) {
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
        case 6:
          return <SupplierStepSix
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                />
      }
    }

    return(
      <Form onSubmit={this.handleSubmit}>
        {whichStep(step)}
      </Form>
    )
  }
}
export default SupplierForm
