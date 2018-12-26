import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Styled from 'styled-components';

const LinkToArticle = Styled.a`
	color: #343a40;
	&:hover {
		text-decoration: none;
	}
`

class ArticleItem extends Component {

	render() {
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		const pubDate = new Date(this.props.doc.publication_date)
		return(
			<Col lg="6">
				<div className="mb-3 pb-3 border-bottom">
					<LinkToArticle href={this.props.doc.articles_to_link.uid}><h5 className="text-dark">{this.props.doc.article_title[0].text}</h5></LinkToArticle>
					<p className="text-muted mb-0">{pubDate.toLocaleDateString("en-US", options)}</p>
				</div>
			</Col>
		)
	}

}

export default ArticleItem
