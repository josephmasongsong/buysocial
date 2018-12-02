import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Document, Page } from 'react-pdf';

class DocumentItem extends Component {

  render(){
    return(
      <div>

            <Media className="mb-5">
              <Media left>

                <Document
                  className="mr-4 light-shadow"
                  file={{
                    url: `${this.props.item.data.document_link.url}`
                  }}
                >
                  <Page pageNumber={1} width={160} />
                </Document>

              </Media>
              <Media body>
                <h4 className="mb-3">{this.props.item.data.title[0].text}</h4>
                <p>Inspirational, milestones collective impact then, outcomes social impact. Save the world innovate outcomes to compassion leverage innovate. We must stand up justice shared value data inspiring agile.</p>
                <a href={this.props.item.data.document_link.url} className="mb-0">Download PDF</a>
              </Media>
            </Media>

      </div>
    )
  }
}

export default DocumentItem
