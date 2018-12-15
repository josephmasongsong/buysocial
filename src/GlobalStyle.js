import { css, createGlobalStyle } from 'styled-components'

const bscBlue = css`
  color: #005891 !important;
`;

const GlobalStyle = createGlobalStyle`

  .App {
    overflow-x: hidden;
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
    }
    .list-unstyled a { color: #fff !important; }
    a {
    }
  }

  body {
    font-family: 'SofiaProLight', sans-serif;
    padding-top: 110px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Slab', sans-serif;
    ${bscBlue};
  }
  .buysocial-navigation {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
  }
  .navbar-brand img {
    width: 84px;
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

`
export default GlobalStyle
