
import React from 'react'
import { HitWrapper, HitBody } from '../DirectoryStyles';
import images from '../ThemeImages';

const Hit = ({ hit, clickHandler }) =>
  <HitWrapper className={`align-items-center`}>
    {hit.image
      ?
      <img src={hit.image} width={`140`} height={`140`} alt={hit.name} className={`mr-4`}/>
      :
      <img src={images.placeholder} width={`140`} height={`140`} alt="Company Logo" className={`mr-4`}/>
    }
    <HitBody>
      <h4 className={`mb-1`} onClick={(e) => clickHandler(hit,e)} style={{ cursor: "pointer" }}>{hit.name}</h4>
      {hit.website && <a className={`mb-2 text-secondary d-inline-block`} href={`http://` + hit.website} target={`_blank`} >{hit.website}</a> }
      {hit.phone && <p className={`mb-0`}>{hit.phone}</p> }
      {hit.email && <p className={`mb-0`}>{hit.email}</p> }
      {hit.address && <p className={`mb-0`}>{hit.address}</p> }
    </HitBody>
    {hit.bsc_certification && <img width={`56`} alt={`Buy Social Canada Certified Supplier`} src={images.logo} /> }
  </HitWrapper>

export default Hit
