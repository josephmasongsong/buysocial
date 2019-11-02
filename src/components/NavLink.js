import React from 'react'
import { Name, TopLink } from '../styles';

const NavLink = props => {
  const pageURI = window.location.pathname+window.location.search
  const aClassName = (props.path === pageURI) ? "nav-link active px-3" : "nav-link px-3"
  return(
    <TopLink to={props.path} className={aClassName}>
    {
      (props.path === pageURI)
      ?
      <Name>{props.name}</Name>
      :
      props.name
    }
    </TopLink>
  )
}

export default NavLink
