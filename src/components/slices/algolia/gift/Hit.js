import React from 'react'
import images from '../../../../ThemeImages';
import { DeviceSize } from '../../../../DeviceSize';
import styled from 'styled-components'

const HitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.75rem;
	@media ${DeviceSize.xs} {
		padding: 1rem;
	}
`
const HitImg = styled.img`
	width: 140px;
	height: 140px;
	@media ${DeviceSize.xs} {
		display: none;
  }
`
const HitBody = styled.div`
  flex: 1;
  color: #212529;
  a { text-decoration: underline; }
`

const Hit = ({ hit, clickHandler }) =>
  <HitWrapper>
    {hit.image
      ?
      <HitImg src={hit.image} alt={hit.name} className={`border mr-4`}/>
      :
      <HitImg src={images.placeholder} alt="Company Logo" className={`border mr-4`}/>
    }
    <HitBody>
      <h4 className={`mb-1`}
        // onClick={(e) => clickHandler(hit,e)} style={{ cursor: "pointer" }}
        >{hit.name}</h4>
      {hit.website && <a className={`mb-2 d-inline-block`} href={`http://` + hit.website} target={`_blank`} >{hit.website}</a> }
      {/* {hit.phone && <p className={`mb-0`}>{hit.phone}</p> }
      {hit.email && <p className={`mb-0`}>{hit.email}</p> } */}
      {hit.address && <p className={`mb-2`}><i className="fas fa-map-marker-alt text-warning mr-1"></i><a href={`https://www.google.com/maps/search/?api=1&query=${hit.address}`} style={{ textDecoration: 'none' }} target="_blank">{hit.address}</a></p> }
      {hit.description && <div style={{ color: '#4a5568' }}>{hit.description}</div>}
    </HitBody>
  </HitWrapper>

export default Hit
