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
  @media ${DeviceSize.xs} {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
`

const NavLink = props => {
  const pageURI = window.location.pathname+window.location.search
  const aClassName = (props.path === pageURI) ? "px-4 nav-link active" : "px-4 nav-link"
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
