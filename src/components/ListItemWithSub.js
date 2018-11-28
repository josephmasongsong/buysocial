import React, { Component } from 'react';
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap'

class ListItemWithSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({ collapse: !this.state.collapse });
  }

  render() {

    return(
      <div>
        <ListGroupItem onClick={this.toggle} className="pl-0"><i className={"fa " + ((this.state.collapse) ? 'fa-caret-down' : 'fa-caret-right')}></i>{this.props.categoryName}</ListGroupItem>
        <Collapse isOpen={this.state.collapse}>
          <ListGroup>
            {this.props.subItems}
          </ListGroup>
        </Collapse>
      </div>
    )
  }
}

export default ListItemWithSub
