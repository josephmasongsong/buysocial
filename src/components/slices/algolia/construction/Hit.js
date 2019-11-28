import React, { Component } from 'react'
import images from '../../../../ThemeImages';
import { DeviceSize } from '../../../../DeviceSize';
import styled from 'styled-components'
import { Button, Collapse } from 'reactstrap'

const HitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.75rem;
	@media ${DeviceSize.xs} {
		padding: 1rem 0 0;
	}
`
const HitImg = styled.img`
	width: 140px;
	height: 140px;
	@media ${DeviceSize.xs} {
		display: none;
  }
`

const HitCert = styled.img`
	width: 56px;
	@media ${DeviceSize.xs} {
		display: none;
  }
`
const HitBody = styled.div`
  flex: 1;
  color: #212529;
  a { text-decoration: underline; }
`

// const Hit = ({ hit, clickHandler }) =>
//   <HitWrapper>
//     {hit.image
//       ?
//       <HitImg src={hit.image} alt={hit.name} className={`border mr-4`}/>
//       :
//       <HitImg src={images.placeholder} alt="Company Logo" className={`border mr-4`}/>
//     }
//     <HitBody>
//       <h4 className={`mb-1`}
//         >{hit.name}</h4>
//       {hit.website && <a className={`mb-2 d-inline-block`} href={`http://` + hit.website} target={`_blank`} >{hit.website}</a> }
//       {hit.phone && <p className={`mb-0`}>{hit.phone}</p> }
//       {hit.email && <p className={`mb-0`}>{hit.email}</p> }
//       {hit.address && <p className={`mb-0`}>{hit.address}</p> }
//       {hit.description &&
//
//       }
//
//
//     </HitBody>
//     {hit.bsc_certification && <HitCert alt={`Buy Social Canada Certified Supplier`} src={images.logo} /> }
//   </HitWrapper>

class Hit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(state => ({
      isOpen: !this.state.isOpen
    }));
  }

  render(){
    const { hit } = this.props
    const { isOpen } = this.state
    return(
      <HitWrapper>
        {hit.image
          ?
          <HitImg src={hit.image} alt={hit.name} className={`border mr-4`}/>
          :
          <HitImg src={images.placeholder} alt="Company Logo" className={`border mr-4`}/>
        }
        <HitBody>
          <h4 className={`mb-1`}
            >{hit.name}</h4>
          {hit.website && <a className={`mb-2 d-inline-block`} href={`http://` + hit.website} target={`_blank`} >{hit.website}</a> }
          {hit.phone && <p className={`mb-0`}>{hit.phone}</p> }
          {hit.email && <p className={`mb-0`}>{hit.email}</p> }
          {hit.address && <p className={`mb-0`}><i className="fas fa-map-marker-alt text-warning mr-1"></i><a href={`https://www.google.com/maps/search/?api=1&query=${hit.address}`} style={{ textDecoration: 'none' }} target="_blank">{hit.address}</a></p> }
          {hit.description &&
            <div>
              <Button color="link" className="px-0" onClick={this.toggle} style={{ textDecoration: 'underline' }}>
                {this.state.isOpen ? 'Show Less' : 'Read More'}
              </Button>
              <Collapse isOpen={isOpen}>
                <div className="p-3 bg-light">{hit.description}</div>
              </Collapse>
            </div>
          }

        </HitBody>
        {hit.bsc_certification && <HitCert alt={`Buy Social Canada Certified Supplier`} src={images.logo} /> }
      </HitWrapper>
    )
  }
}


export default Hit
