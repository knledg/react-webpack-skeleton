import React from 'react';

export class Button extends React.Component {

  static propTypes = {
    type: React.PropTypes.string,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string,
  }

  static defaultProps = {
    onClick: function noop() { },
  }

  renderIcon(icon) {
    if (! icon) {
      return null;
    }

    return <i className={icon} />;
  }

  render() {
    let classes;
    let icon;
    let title;

    switch (this.props.type) {
    case 'add':
      classes = 'btn-primary';
      icon = 'fa fa-plus';
      title = 'Add';
      break;

    default:
      throw new Error(`Unknown button type ${this.props.type}`);
    }

    return (
      <div>
        <button className={`btn ${classes}`}>
          {this.renderIcon(icon)} {this.props.title || title}
        </button>
      </div>
    );
  }
}
