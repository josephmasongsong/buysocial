import React from 'react'
import styled from 'styled-components'
import { DeviceSize } from '../DeviceSize';

const Name = styled.span`
    position: relative;
    &:after {
      content: '';
      width: 100%;
      border-top: 2px solid #005891;
      position: absolute;
      left: 0;
      bottom: -10px;
    }
  }
`
const Link = styled.a`
  position: relative;
  color: #005891 !important;
  @media ${DeviceSize.xs} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

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
