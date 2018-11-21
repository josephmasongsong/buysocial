import { css, createGlobalStyle } from 'styled-components'

const bscBlue = css`
  color: #005891 !important;
`;

const GlobalStyle = createGlobalStyle`

  .App {
    overflow-x: hidden;
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
`
export default GlobalStyle
