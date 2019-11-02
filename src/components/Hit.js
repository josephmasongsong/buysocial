
import React from 'react'
import { HitWrapper, HitBody, HitImg, HitCert } from '../DirectoryStyles';
import images from '../ThemeImages';

const Hit = ({ hit, clickHandler }) =>
  <HitWrapper>
    {hit.image
      ?
      <HitImg src={hit.image} alt={hit.name} className={`border mr-4`}/>
      :
      <HitImg src={images.placeholder} alt="Company Logo" className={`border mr-4`}/>
    }
    <HitBody>
      <h4 className={`mb-1`} onClick={(e) => clickHandler(hit,e)} style={{ cursor: "pointer" }}>{hit.name}</h4>
      {hit.website && <a className={`mb-2 text-secondary d-inline-block`} href={`http://` + hit.website} target={`_blank`} >{hit.website}</a> }
      {hit.phone && <p className={`mb-0`}>{hit.phone}</p> }
      {hit.email && <p className={`mb-0`}>{hit.email}</p> }
      {hit.address && <p className={`mb-0`}>{hit.address}</p> }
    </HitBody>
    {hit.bsc_certification && <HitCert alt={`Buy Social Canada Certified Supplier`} src={images.logo} /> }
  </HitWrapper>

export default Hit
