import React from 'react';

import {Notification} from 'src/components';

import eventBus from 'src/lib/event-bus';

export class Notifications extends React.Component {

  static propTypes = {
    position: React.PropTypes.string,
    newestOnTop: React.PropTypes.bool,
    maxOpened: React.PropTypes.number,
    preventDuplicates: React.PropTypes.bool,
  }

  static defaultProps = {
    position: 'top-right',
    newestOnTop: true,
    maxOpened: 10,
    preventDuplicates: true,
  }

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      notifications: {},
      notificationsOrder: [],
    };

    this.addNotification = this.addNotification.bind(this);
    this.onClose = this.onClose.bind(this);
    eventBus.on('notification', this.addNotification);
  }

  onClose(counter) {
    let notes = this.state.notifications;
    let notesOrder = this.state.notificationsOrder;

    notesOrder.splice(notesOrder.indexOf(counter), 1);
    delete notes[counter];
    this.setState({notifications: notes, notificationsOrder: notesOrder});
  }

  addNotification(notification) {
    let notes = this.state.notifications;
    let notesOrder = this.state.notificationsOrder;
    if (!this.props.preventDuplicates || !_.some(this.state.notifications, (note) => {
      return notification.text === note.text;
    })) {
      let counter = this.state.counter;
      notes[counter] = notification;
      if (this.state.notificationsOrder.length === this.props.maxOpened) {
        let remove = notesOrder.pop();
        delete notes[remove];
      }

      notesOrder.unshift(counter);
      this.setState({notifications: notes, notificationsOrder: notesOrder, counter: ++counter});
    }
  }

  renderNotifications() {
    let order = _.clone(this.state.notificationsOrder);
    if (!this.props.newestOnTop) {
      _.reverse(order);
    }
    return _.map(order, (counter) => {
      const notification = this.state.notifications[counter];
      return (
        <Notification {...notification.props} key={counter} onClose={() => this.onClose(counter)} blah='blah'>{notification.text}</Notification>
      );
    });
  }

  render() {
    if (!this.state.notificationsOrder.length) {
      return null;
    }

    return (
      <div id='toast-container' className={`toast-${this.props.position}`}>
        {this.renderNotifications()}
      </div>
    );
  }
}
