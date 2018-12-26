import { css, createGlobalStyle } from 'styled-components'
import { DeviceSize } from './DeviceSize';

const bscBlue = css`
  color: #005891 !important;
`;

const GlobalStyle = createGlobalStyle`

  .App {
    overflow-x: hidden;
  }

  body {
    font-family: 'SofiaProLight', sans-serif;
    // padding-top: 110px;
    // @media ${DeviceSize.xs} {
    //   padding-top: 88px;
    // }
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Slab', sans-serif;
    ${bscBlue};
  }
  h3 {
    @media ${DeviceSize.xs} {
      font-size: 1.625rem;
    }
  }
  h4 {
    @media ${DeviceSize.xs} {
      font-size: 1.375rem;
    }
  }
  h5 {
    @media ${DeviceSize.xs} {
      font-size: 1.125rem;
    }
  }

  .buysocial-navigation {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
    z-index: 1;
  }

  .btn-primary {
    background-color: #005891;
    border-color: #005891;
  }
  .light-shadow {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .team-member-image {
    border-radius: 50px;
  }

  .postList {
    .media {
      margin-bottom: 3rem;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        text-decoration: underline;
      }
    }
  }


  .footer {
    .social .list-inline-item i {
      font-size: 1.5rem;
      margin-right: 0.75rem;
    }
    .fa-li {
      left: -3rem;
    }
    .form-control {
      border: 0;
      padding: .375rem .75rem;
    }
    .list-unstyled a {
      color: #fff !important;
    }
  }




  .navbar-brand img {
    width: 84px;
    @media ${DeviceSize.xs} {
      width: 64px;
    }
  }
  .nav-item {
    .nav-link {
      font-family: 'Museo Slab 500';
      ${bscBlue};
    }
  }
  .btn-warning {
    border-color: #D9D458;
    background: #D9D458;
  }
  .text-warning {
    color: #D9D458 !important;
  }
  a {
    ${bscBlue};
    // text-decoration: underline;
  }
  .input-group-append .btn-primary {
    background:#005891;
    border-color: #005891;
  }
  .media {
    &.mb-5 {
      a { text-decoration: underline; }
    }
  }
  .carousel-inner {
    .carousel-item {
      opacity: 0;
      top: 0;
      left: 0;
      width: 100%;
      display: block;
      position: absolute;
      transition: opacity 1s ease-in-out;

      &:first-of-type {
        position: relative;
      }
    }

    .active {
      opacity: 1;
    }
  }
  .list-group-item.active {
      z-index: 2;
      background-color: transparent;
      border-color: transparent;
      ${bscBlue};
  }
  legend {
    font-family: 'Roboto Slab', sans-serif;
    color: #005891;
  }
  label { font-family: 'SofiaProMedium'; margin-bottom: 0; }
  .form-control {
    outline: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    padding: .375rem 0;
    -webkit-appearance: none;
    margin-bottom: 1.25rem;
  }
  .form-control:focus {
    border-color: #005891;
    box-shadow: none;
  }
  .btn {
    border-radius: 0;
  }

  .hit {
    display: flex;
    align-items: flex-start;
    .hit-body {
      flex: 1;
      color: #212529;
      a {
        text-decoration: underline;
      }
    }
  }
  .ais-Hits-list, .ais-InfiniteHits-list, .ais-InfiniteResults-list, .ais-Results-list {
    display: block;
    margin: 0;
  }
  .ais-Hits-item, .ais-InfiniteHits-item, .ais-InfiniteResults-item, .ais-Results-item {
    width: 100%;
    border: 0;
    padding:0;
    box-shadow: none;
    margin: 0 0 3rem 0;
  }
  .ais-Menu-item:last-child .ais-Menu-link {
    border-bottom: 0;
  }
  .ais-Menu-link {
    padding: .75rem 0;
    border-bottom: 1px solid rgba(0,0,0,.125);
    color:  #212529 !important;
  }
  .ais-Menu-count {
    margin-left: .25rem;
  }
  .ais-SearchBox-form {
    margin-bottom: 3rem;
  }
  // .ais-Breadcrumb-item--selected, .ais-HierarchicalMenu-item--selected, .ais-Menu-item--selected {
  //   font-family: 'SofiaProMedium';
  //   font-weight: normal !important;
  // }
  .ais-SearchBox-input {
    border-radius: 0;
  }
  .ais-Pagination-link {
    padding: .25rem 0.75rem;
    border-radius: 0;
  }
  .ais-Pagination-item--selected .ais-Pagination-link {
    color: #fff !important;
    background-color: #005891;
    border-color: #005891;
  }
  .ais-Menu-count {
    display: none;
  }

  .post-body {
    font-size: 1.125rem;
    p:last-child {
      margin-bottom: 0;
    }
    img {
      max-width: 100%;
      margin: auto;
      display: block;
    }
  }
  .filedIn {
    font-family: 'SofiaProMedium';
  }
  .badge-primary {
    background: #005891;
  }

  @media ${DeviceSize.xs} {
    .display-4 {
      font-size: 1.875rem;
    }
    .lead {
      font-size: 1rem;
    }
  }


  .ais-HierarchicalMenu-link, .ais-Menu-link {
    color: rgb(33, 37, 41) !important;
    padding: 0.75rem 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .ais-HierarchicalMenu-count, .ais-Menu-count, .ais-RefinementList-count, .ais-ToggleRefinement-count {
    display:none;
  }
  .ais-HierarchicalMenu-list .ais-HierarchicalMenu-list {
    margin-left: 0;
  }
  .ais-HierarchicalMenu-list--child .ais-HierarchicalMenu-link {
    padding-left: 1em;
  }
  .ais-HierarchicalMenu-item--selected > .ais-HierarchicalMenu-link {
      font-family: 'SofiaProMedium';
      font-weight: normal !important;
  }
  .ais-HierarchicalMenu-item--selected {
    font-weight: normal !important;
  }
  .ais-HierarchicalMenu-list .ais-HierarchicalMenu-item:last-child .ais-HierarchicalMenu-link {
    // border-bottom: 0;
  }

`
export default GlobalStyle
