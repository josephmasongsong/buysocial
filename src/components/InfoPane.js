import React from 'react'
import { InfoPaneWrapper } from '../DirectoryStyles';
import { DirectoryMapContainer } from '../DirectoryStyles';
import GoogleMap from './slices/GoogleMap';

const InfoPane = props =>
  <InfoPaneWrapper className={`shadow-sm border`}>
    <div className={`w-100 text-right`}>
      <i className={`fas fa-times mb-3`} style={{ cursor: "pointer" }} onClick={props.clickHandler} />
    </div>
    { props.hit.lat && <DirectoryMapContainer><GoogleMap lat={props.hit.lat} lon={props.hit.lon} /></DirectoryMapContainer> }
    { props.hit.categories.lvl0
      &&
      <p className={`mb-1 text-secondary`}>{props.hit.categories.lvl0}</p>
    }
    { props.hit.name && <h1 className={`mb-3 h2`}>{props.hit.name}</h1> }
    { props.hit.description && <p className={`mb-4`}>{props.hit.description}</p> }
    {props.hit.website && <a className={`mb-3 d-block`} href={`http://` + props.hit.website} target={`_blank`} ><i className={`fas fa-link mr-2`}></i>{props.hit.website}</a> }
    {props.hit.phone && <a href={`tel:` + props.hit.phone} className={`mb-3 d-block`}><i className={`fas fa-phone mr-2`}></i>{props.hit.phone}</a> }
    {props.hit.email && <a href={`mailto:` + props.hit.email} className={`mb-3 d-block`}><i className={`fas fa-envelope mr-2`}></i>{props.hit.email}</a> }
    {props.hit.address && <a  href={`https://maps.google.com/?q=` + props.hit.address} target={`_blank`} className={`mb-0 d-block`}><i className={`fas fa-map-marker-alt mr-2`}></i>{props.hit.address}</a> }
  </InfoPaneWrapper>


export default InfoPane
