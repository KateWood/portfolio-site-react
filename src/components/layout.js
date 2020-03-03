import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import './layout.css';

const Layout = ({ children }) => {
  const pageStyles = css`
    max-width: 31%;
    margin: 50px auto;
    text-align: center;
    font-family: fantasy;
  `;

  return <main css={pageStyles}>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
