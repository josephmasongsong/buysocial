import React, { Component } from 'react';
import SlimHeader from './components/SlimHeader';
import images from './ThemeImages';

class Library extends Component {
  render() {
    return (
      <div>
      	<SlimHeader headline="Social Procurement Knowledge Base" 
      		subheader="Take advantage of Buy Social Canada's vast industry knowledge. Search our site for tools, resources, and frameworks free for use for organizations and businesses with social and environmental missions." 
      		headerImage={images.constructionWorker}
      		/>
      </div>
    );
  }
}

export default Library;
