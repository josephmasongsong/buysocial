import React, { Component } from 'react'
import { Col } from 'reactstrap';

class NewsItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<Col lg="6">
				<div className="mb-3 pb-3 border-bottom">
					<h5>{this.props.doc.article_title[0].text}</h5>
					<p className="text-muted mb-0">{this.props.doc.publication_date}</p>
				</div>
			</Col>
		)
	}

}

export default NewsItem
