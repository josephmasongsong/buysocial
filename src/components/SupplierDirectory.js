import React, { Component } from 'react'
import SearchDirectory from './slices/SearchDirectory'
import Layout from './DirectoryLayout'


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

  renderPage() {
    if (this.state.doc) {
      const document = this.state.doc.data;
      return <SearchDirectory document={document} />
    } else {
      return null
    }
  }

  render() {
    return(
      <Layout prismicCtx={this.props.prismicCtx}>
        {this.renderPage()}
      </Layout>
    )
  }

}
