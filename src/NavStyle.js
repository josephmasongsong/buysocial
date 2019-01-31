import styled from 'styled-components'
import { DeviceSize } from './DeviceSize';

const TogglerStyle = css`
  padding: 0 1rem 0 0;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 0;
  border-radius: 0;
`
const DropDownStyle = css`
  border-radius: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  top: 72px;
  padding: 0;
  border: 0;
  @media ${DeviceSize.xs} {
    box-shadow: none;
    background: #f8f9fa;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    box-shadow: none;
    background: #f8f9fa;
  }
`
const DropDownItemStyle = css`
  padding: .75rem 1.5rem;
  &:focus {
    outline: 0;
  }
  &.active, &:active {
    background-color: #005891 !important;
    color: #fff !important;
  }
`
const Logo = styled.img`
  width: 84px;
  @media ${DeviceSize.xs} {
    width: 64px;
  }
`
const NavBrandStyle  = css`
  @media ${DeviceSize.xs} {
    padding-top: 1rem;
    padding-left: 1rem;
    margin-right: 0;
    padding-bottom: 1rem;
  }
`

const NavLinkStyle = css`
  color: #005891;
`

const NavStyle = css`
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
  z-index: 1;
  @media ${DeviceSize.xs} {
    padding: 0;
  }
  @media ${DeviceSize.smMin} and ${DeviceSize.md} {
    padding: 0;
  }
}
`
export {
  DropDownStyle,
  DropDownItemStyle,
  Logo,
  NavBrandStyle,
  NavLinkStyle,
  NavStyle,
  TogglerStyle,
}
