import React, { Component } from 'react';
import SlimHeader from './components/SlimHeader';
import ThreeColumns from './components/ThreeColumns';
import images from './ThemeImages';

class About extends Component {
  render() {
    return (
      <div>
      	<SlimHeader 
      		headline="About Buy Social Canada" 
      		subheader="Buy Social Canada is an intermediary organization that advances social procurement by bringing socially driven purchasers and social enterprise suppliers together, building business relationships that generate social benefits to communities across the country." 
			headerImage={images.potluck}
      	/>
      	<ThreeColumns 
      		firstIcon={images.personTree}
      		firstHeader="Promote & Educate"
      		firstBlurb="We develop social procurement tools and resources, convene a community of practice, facilitate multi-stakeholder roundtables, and host workshops and webinars to build relationships across sectors."
      		secondIcon={images.contractBlank}
      		secondHeader="Certify & Engage"
      		secondBlurb="We certify social enterprise suppliers and social purchasers. We facilitate purchaser and supplier relationships and learning opportunities to increase social enterprise business opportunities and grow their social impact."
      		thirdIcon={images.chart}
      		thirdHeader="Measure"
      		thirdBlurb="We work with our partners to capture and report on social impact outcomes. Our deep knowledge base includes measurement tools such as the Community Benefit Agreement scorecard free for any social enterprise use."
      	/>
      </div>
    );
  }
}

export default About;
