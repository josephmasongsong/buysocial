import React, { Component } from 'react';
import Header from './components/Header';
import FourColumns from './components/FourColumns';

class Home extends Component {
  render() {
    return (
      <div>
		<Header headline="Free Social Procurement Tools & Resources" subheader="Capitalize on Buy Social Canada's vast social procurement knowledge base for free. 
              Search through our library of tools, frameworks, and resources."/>
        <FourColumns />
      </div>
    );
  }
}

export default Home;
