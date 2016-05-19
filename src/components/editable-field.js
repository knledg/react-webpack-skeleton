import React from 'react';

export class EditableField extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.node.isRequired,
    hasError: React.PropTypes.bool,
    errorHelpLabel: React.PropTypes.string,
  }

  static defaultProps = {
    value: '',
    hasError: false,
    errorHelpLabel: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      dirtyValue: this.props.value,
      isBeingEdited: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ dirtyValue: nextProps.value, isBeingEdited: false });
    }
  }

  onSetEditing(isBeingEdited) {
    this.setState({isBeingEdited});
  }

  onCancelEditing() {
    this.setState({isBeingEdited: false, dirtyValue: this.props.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.hasError) {
      return false;
    }

    return this.props.onChange(this.state.dirtyValue);
  }

  onTextChange(e) {
    this.setState({dirtyValue: e.currentTarget.value});
  }

  renderErrorHelpLabel() {
    if (! this.props.errorHelpLabel) {
      return null;
    }

    return (
      <div className='editable-error help-block'>{this.props.errorHelpLabel}</div>
    );
  }

  render() {
    if (! this.state.isBeingEdited) {
      return (
        <span className='editable editable-click' onClick={e => this.onSetEditing(true)}>
          {this.props.value}
        </span>
      );
    }

    return (
      <form className='form-inline editable-wrap editable-text' role='form'>
        <div className={`editable-controls form-group ${this.props.hasError ? 'has-error' : ''}`}>
          <input
            type='text'
            value={this.state.dirtyValue}
            onChange={e => this.onTextChange(e)}
            className='editable-has-buttons editable-input form-control' />
          <span className='editable-buttons'>
            <button type='submit' onClick={e => this.onSubmit(e)} className='btn btn-primary btn-with-icon'>
              <i className='ion-checkmark-round'></i>
            </button>
            <button type='button' onClick={e => this.onCancelEditing()} className='btn btn-default btn-with-icon'>
              <i className='ion-close-round'></i>
            </button>
          </span>
          {this.renderErrorHelpLabel()}
        </div>
      </form>
    );
  }
}
