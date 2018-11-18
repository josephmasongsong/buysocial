import React, { Component } from 'react';
import SlimHeader from './components/SlimHeader';
import ThreeColumns from './components/ThreeColumns';
import images from './ThemeImages';

class Purchasers extends Component {
  render() {
    return (
      <div>
      	<SlimHeader 
      		headline="Social Purchaser Certification" 
      		subheader="Buy Social Canada’s third party certification program recognizes your organization as a verified social purchaser, and enhances your marketing potential as a business that actively prioritizes social procurement and contributes to the social and environmental wellbeing of your community." 
      		headerImage={images.leafblower}
      	/>
      	<ThreeColumns 
      		firstIcon={images.personTree}
      		firstHeader="Non-profits"
      		firstBlurb="If you’re a non-profit, then you are already in the business of creating social value. By buying from social enterprise suppliers you create an even greater social value."
      		secondIcon={images.contractBlank}
      		secondHeader="Government"
      		secondBlurb="If you're a government institution, you can learn how to integrate your procurement objectives to meet your social and environmental goals, without having to adjust the budget."
      		thirdIcon={images.crates}
      		thirdHeader="Businesses"
      		thirdBlurb="If you're a business, you can examine your operations and supply chain, identifying opportunities to maximize social value through existing procurement decisions."
      	/>
      </div>
    );
  }
}

export default Purchasers;
