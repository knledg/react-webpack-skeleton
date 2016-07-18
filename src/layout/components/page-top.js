import React from 'react';
import { Link } from 'react-router';
import {SearchBar} from 'src/layout/components/search-bar';

// Lib
import eventBus from 'src/lib/event-bus';
import {NotificationAlert} from 'react-blur-admin';
import {NotificationsAlert} from 'react-blur-admin';

export class PageTop extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string.isRequired,
      query: React.PropTypes.object.isRequired,
    }),
  }

  constructor(props) {
    super(props);
    this.state = { notifications: [{
      user: {
        name: 'Ashley',
        picture: 'http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif',
      },
      subject: 'This is a notification alert',
      createdAt: '02/13/95 9:00',
    },
    {
      user: {
        name: 'Nick',
        picture: 'http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif',
      },
      subject: 'This is a notification alert',
      createdAt: '07/18/16 10:00',
    },
    {
      user: {
        name: 'Matt',
        picture: 'http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif',
      },
      subject: 'This is a notification alert',
      createdAt: '07/18/16 11:31',
    },
    {
      user: {
        name: 'Jon',
        picture: 'http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif',
      },
      subject: 'This is a notification alert',
      createdAt: '07/18/16 12:00',
    },
    {
      user: {
        name: 'Jacob',
        picture: 'http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif',
      },
      subject: 'This is a notification alert',
      createdAt: '07/18/16 10:00',
    },
    {
      user: {
        name: 'Jason',
        picture: 'http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif',
      },
      subject: 'This is a notification alert',
      createdAt: '07/01/16 2:00',
    }],
  };
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

  renderNotifications() {
    let notifications = _.assign({}, this.state.notifications);
    return _.map(notifications, (notification, index) => {
      return (
        <NotificationAlert {...notification} key={index}/>
      );
    });
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
        <NotificationsAlert notificationCount={this.state.notifications.length} allNotificationsUrl='url' >
          {this.renderNotifications()}
        </NotificationsAlert>
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
