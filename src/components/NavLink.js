import React from 'react'
import { Name, Link } from '../styles';

const NavLink = props => {
  const pageURI = window.location.pathname+window.location.search
  const aClassName = (props.path === pageURI) ? "nav-link active px-4" : "nav-link px-4"
  return(
    <Link href={props.path} className={aClassName}>
    {
      (props.path === pageURI)
      ?
      <Name>{props.name}</Name>
      :
      props.name
    }
    </Link>
  )
}

export default NavLink
