import React from 'react';

export class PageTop extends React.Component {

  state = {
    isMenuOpen: false,
  }

  componentWillMount() {

  }

  onToggleMenu() {
    this.setState({ isMenuOpen: ! this.state.isMenuOpen });
  }

  render() {
    // dropdown - .open
    // @todo msg-center
    // onClick startSearch
    // import message cente
    return (
      <div className="page-top clearfix" scroll-position="scrolled" max-height="50">
        <a href="#/dashboard" className="al-logo clearfix"><span>Blur</span>Admin</a>
        <a href className="collapse-menu-link ion-navicon" ng-click="isMenuCollapsed=!isMenuCollapsed"></a>

        <div className="search">
          <i className="ion-ios-search-strong"></i>
          <input id="searchInput" type="text" placeholder="Search for..." />
        </div>

        <div className="user-profile clearfix">
          <div className={`al-user-profile dropdown ${this.state.isMenuOpen ? 'open' : ''}`}>
            <a className="profile-toggle-link dropdown-toggle" onClick={this.onToggleMenu.bind(this)}>
              <img src='http://placehold.it/25/25' />
            </a>
            <ul className="top-dropdown-menu profile-dropdown dropdown-menu">
              <li><i className="dropdown-arr"></i></li>
              <li><a href="#/profile"><i className="fa fa-user"></i>Profile</a></li>
              <li><a href><i className="fa fa-cog"></i>Settings</a></li>
              <li><a href className="signout"><i className="fa fa-power-off"></i>Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
