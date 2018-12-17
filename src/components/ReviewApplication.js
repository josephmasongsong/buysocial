import React, { Component } from 'react';
import { Button, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

class ReviewApplication extends Component {
  render(){
    const {
      values: {
        organizationName,
        inceptionYear,
        organizationAddress,
        region,
        website,
        twitter,
        facebook,
        organizationType,
        organizationSize,
        organizationMission,
        businessNumber,
        revenue,
        contactName,
        contactPosition,
        email,
        phone,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        seccMembership,
        akcelosDirectory,
        referringAgency,
        confirm
      }
    } = this.props;

    return(
      <Row>
        {values}
      </Row>
    )
  }
}
export default ReviewApplication
