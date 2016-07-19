import React from 'react';
import { Link } from 'react-router';
import {SearchBar} from 'src/layout/components/search-bar';

// Lib
import eventBus from 'src/lib/event-bus';

export class PageTop extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string.isRequired,
      query: React.PropTypes.object.isRequired,
    }),
  }

  state = {
    isMenuOpen: false,
    appName: process.env.APP_NAME,
  }

  componentWillMount() {

  }

  onToggleMenu() {
    this.setState({ isMenuOpen: ! this.state.isMenuOpen });
  }

  onLogout() {
    eventBus.emit('logout');
  }

  renderLogo() {
    return (
      <Link to={{ pathname: '/' }} className="al-logo clearfix">{this.state.appName}</Link>
    );
  }

  renderHamburgerMenu() {
    return null;

    // @todo
    // return (
    //   <a href className="collapse-menu-link ion-navicon" ng-click="isMenuCollapsed=!isMenuCollapsed"></a>
    // );
  }

  renderSearch() {
    return (
      <div className="search">
        <SearchBar />
      </div>
    );
  }

  renderUserSection() {
    return (
      <div className="user-profile clearfix">
        <div className={`al-user-profile dropdown ${this.state.isMenuOpen ? 'open' : ''}`}>
          <a className="profile-toggle-link dropdown-toggle" onClick={this.onToggleMenu.bind(this)}>
            <img src={this.props.user && this.props.user.picture ? this.props.user.picture : 'http://placehold.it/25x25'} />
          </a>
          <ul className="top-dropdown-menu profile-dropdown dropdown-menu">
            <li><i className="dropdown-arr"></i></li>
            <li><Link to="/"><i className="fa fa-user"></i>Profile</Link></li>
            <li><Link to="/'"><i className="fa fa-cog"></i>Settings</Link></li>
            <li>
              <a href={this.props.location.pathname} className="signout" onClick={e => this.onLogout()}>
                <i className="fa fa-power-off"></i>Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    // dropdown - .open
    // @todo msg-center
    // onClick startSearch
    // import message cente
    return (
      <div className="page-top clearfix" scroll-position="scrolled" max-height="50">
        {this.renderLogo()}
        {this.renderHamburgerMenu()}
        {this.renderSearch()}
        {this.renderUserSection()}
      </div>
    );
  }
}
