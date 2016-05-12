import EventEmmitter from 'events';
import _ from 'lodash';

class Notifications extends EventEmmitter {

  addNotification(type, text, options) {
    const props = _.extend(options, {
      type,
    });

    this.emit('notification', {text, props});
  }
}

const notifications = new Notifications();
export default notifications;
