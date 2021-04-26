import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import { PropTypes } from 'prop-types';

const MainLayouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
MainLayouts.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayouts;
