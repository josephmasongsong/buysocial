import React, { Component } from 'react'
import Layout from './Layout'
import SearchDirectory from './slices/SearchDirectory';

export default class SupplierDirectory extends Component {
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
			return props.prismicCtx.api.getSingle('supplier_directory', (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    return(
      <Layout prismicCtx={this.props.prismicCtx} >
        <SearchDirectory />
      </Layout>
    )
  }

}
