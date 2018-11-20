import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import SlimHeader from './components/SlimHeader';

class Suppliers extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  doc: null,
		}
	}

	componentWillMount() {
	  const apiEndpoint = 'https://buy-social-canada.prismic.io/api/v2';
	  Prismic.api(apiEndpoint).then(api => {
	    api.query(Prismic.Predicates.at('document.type', 'supplier_page')).then(response => {
	      if (response) {
	        this.setState({ doc: response.results[0] });
	      }
	    });
	  });
	}

  render() {
  	if (this.state.doc) {
  		const content = this.state.doc.data;
	    return (
	      <div>
	      	<SlimHeader 
	      		headline={content.page_title[0].text} 
	      		subheader={content.page_blurb[0].text}  
						headerImage={content.page_image.url} 
	      	/>
	      </div>
	    );
  	}
  	return <SlimHeader headline="Loading..." />;
  }
}

export default Suppliers;
