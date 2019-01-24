import React from 'react'
import styled from 'styled-components'

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
const NavLink = props => {
  const pageURI = window.location.pathname+window.location.search
  const aClassName = (props.path === pageURI) ? "px-4 nav-link active" : "px-4 nav-link"
  return(
    <a href={props.path} className={aClassName}>
    {
      (props.path === pageURI)
      ?
      <Name>{props.name}</Name>
      :
      props.name
    }
    </a>
  )
}

export default NavLink
