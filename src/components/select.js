import _ from 'lodash';
import React from 'react';

export class Select extends React.Component {

  static propTypes = {
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    options: React.PropTypes.array,
    value: React.PropTypes.string,
  }

  static defaultProps = {
    placeholder: '',
    open: false,
    onChange: () => {},
    value: '',
  }

  state = {
    value: this.props.placeholder,
    active: '',
    isOpen: false,
  }

  onToggleOpen() {
    this.setState({ isOpen: ! this.state.isOpen });
  }

  onSelectValue(value) {
    const selectedOpt = _.find(this.props.options, { value });
    this.setState({ isOpen: false, value: selectedOpt.label });
    this.props.onChange(value);
  }

  isOpen() {
    return this.state.isOpen ? 'open' : '';
  }

  renderPlaceholder() {
    if (! this.props.placeholder) {
      return <span />;
    }

    return (
      <span className='filter-option pull-left'>
        {this.state.value}
      </span>
    );
  }

  renderOptions() {
    if (! this.props.options) {
      return null;
    }

    const options = _.map(this.props.options, (option, index) => {
      const isSelected = this.props.value === option.value ? 'selected' : '';
      const isActive = this.state.activeValue === option.value ? 'active' : '';

      return (
        <li
          key={option.value}
          className={`${isSelected} ${isActive}`}
          onClick={e => this.onSelectValue(option.value)}>
          <a taxIndex={index}>
            <span className='text'>{option.label}</span>
          </a>
        </li>
      );
    });

    return (
      <ul className='dropdown-menu inner'>
        {options}
      </ul>
    );
  }

  render() {
    return (
      <div className='form-group'>
        <div className={`btn-group bootstrap-select form-control ${this.isOpen()}`}>
          <button
            type="button"
            className='btn dropdown-toggle btn-default'
            onClick={e => this.onToggleOpen()}>
            {this.renderPlaceholder()}
            <span className='bs-caret'>
              <span className='caret' />
            </span>
          </button>
          <div className='dropdown-menu open'>
            {this.renderOptions()}
          </div>
        </div>
      </div>
    );
  }
}
