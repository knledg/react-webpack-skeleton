import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { noop } from 'lodash';
import Person from 'react-blur-admin/dist/assets/img/person.svg';

import {SearchBar} from 'src/layout/components/search-bar';

// Lib
import eventBus from 'src/lib/event-bus';
import {MessagesAlert, MessagesAlertContainer, NotificationsAlert, NotificationAlert} from 'react-blur-admin';
import {Row, Col} from 'react-flex-proto';

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
    this.state = {
      notifications: [{
        user: {
          name: 'Ashley',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '02/13/95 9:00',
        relativeTime: moment('02/13/95').fromNow(),
      },
      {
        user: {
          name: 'Nick',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '07/13/16 12:00',
        relativeTime: moment('07/13/16 12:00').fromNow(),
      },
      {
        user: {
          name: 'Matt',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '04/20/15 9:00',
        relativeTime: moment('04/20/15 9:00').fromNow(),
      },
      {
        user: {
          name: 'Jon',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '07/19/16 8:00',
        relativeTime: moment('07/19/16 8:00').fromNow(),
      },
      {
        user: {
          name: 'Jacob',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '05/23/16 2:00',
        relativeTime: moment('05/23/16 2:00').fromNow(),
      },
      {
        user: {
          name: 'Jason',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '05/01/16 4:00',
        relativeTime: moment('05/01/16 4:00').fromNow(),
      }],
      messages: [{
        user: {
          name: 'Ashley',
          picture: Person,
        },
        subject: 'This is a message alert',
        timeStamp: '02/13/95 9:00',
        relativeTime: moment('02/13/16').fromNow(),
      },
      {
        user: {
          name: 'Nick',
          picture: Person,
        },
        subject: 'This is a message alert',
        timeStamp: '07/13/16 12:00',
        relativeTime: moment('07/13/16 12:00').fromNow(),
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

  renderMessages() {
    let message = _.assign({}, this.state.messages);
    return _.map(message, (messages, index) => {
      return (
        <MessagesAlert {...messages} key={index}/>
      );
    });
  }

  renderNotifications() {
    let notifications = _.assign({}, this.state.notifications);
    return _.map(notifications, (notification, index) => {
      return (
        <NotificationAlert {...notification} key={index}/>
      );
    });
  }

  renderUserSection() {
    return (
      <div className="user-profile clearfix">
        <div className={`al-user-profile dropdown ${this.state.isMenuOpen ? 'open' : ''}`}>
          <a className="profile-toggle-link dropdown-toggle" onClick={this.onToggleMenu.bind(this)}>
            <img src={this.props.user && this.props.user.picture ? this.props.user.picture : Person}/>
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
        <Row>
          <Col padding='5px 2px'>
            <MessagesAlertContainer mailCount={this.state.messages.length} markAllAsReadOnClick={noop} allMessagesOnClick={noop} settingsOnClick={noop} >
              {this.renderMessages()}
            </MessagesAlertContainer>
            <NotificationsAlert
              notificationCount={this.state.notifications.length}
              markAllAsReadOnClick={noop}
              allNotificationsOnClick={noop}
              settingsOnClick={noop} >
                {this.renderNotifications()}
            </NotificationsAlert>
          </Col>
        </Row>
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
