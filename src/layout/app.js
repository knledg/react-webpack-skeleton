import React from 'react';

import { Nav } from 'src/layout/nav/app';

export const AppLayout = React.createClass({
  propTypes: {
    location: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">{ process.env.APP_NAME }</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/">Link</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <Nav location={this.props.location} />
            </div>
            <div className="col-sm-9 col-md-10 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
