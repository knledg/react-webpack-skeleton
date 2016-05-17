import React, { PropTypes } from 'react';

export const Tab = ({ title, onClick }) => {
  return (
    <a href='#' onClick={onClick}>{title}</a>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
