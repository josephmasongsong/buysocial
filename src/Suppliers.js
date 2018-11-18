import React, { Component } from 'react';
import SlimHeader from './components/SlimHeader';
import images from './ThemeImages';

class Suppliers extends Component {
  render() {
    return (
      <div>
      	<SlimHeader 
      		headline="Social Supplier Certification" 
      		subheader="Buy Social Canada’s third-party certification program recognizes your organization as a verified social enterprise, and enhances your marketing potential as a business that actively prioritizes community benefits and social impact over private profit and shareholder returns." 
      		headerImage={images.crafts}
      	/>
      </div>
    );
  }
}

export default Suppliers;
