import React, { Component } from 'react';
import { AsyncNotFound } from './slices/async';
import Meta from '../meta';
import SliceZone from './SliceZone';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
    }
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

	fetchPage(props) {
    if (props.prismicCtx) {
			return props.prismicCtx.api.getSingle('homepage', (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }


  renderPage() {
    if (this.state.doc) {
      const document = this.state.doc.data;
      return(
        <>
          {Meta(document)}
          <SliceZone items={document.body} />
        </>
      )
    }
    if (this.state.notFound) {
      return <AsyncNotFound />
    }
  }

  render() {
    return <>{this.renderPage()}</>
  }
}

export default Home;
