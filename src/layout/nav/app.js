import React from 'react';
import { Link } from 'react-router';

export const Nav = React.createClass({

  contextTypes: { router: React.PropTypes.object },

  propTypes: {
    location: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {};
  },

  render() {
    return (
      <ul className="nav nav-sidebar">
        <li><Link to={{ pathname: '/' }}>Home</Link></li>
        <li><Link to={{ pathname: '/about' }}>About</Link></li>
      </ul>
    );
  },
});
