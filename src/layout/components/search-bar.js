import Autosuggest from 'react-autosuggest';
import React from 'react';
import { Row, Col } from 'react-flex-proto';

const suggestionExamples = [
  {
    text: 'Tabs',
  },
  {
    text: 'Buttons',
  },
  {
    text: 'Progress Bars',
  },
  {
    text: 'Tables',
  },
  {
    text: 'About',
  },
  {
    text: 'Inputs',
  },
  {
    text: 'Notifications',
  },
  {
    text: 'Home',
  },
  {
    text: 'Panels',
  },
  {
    text: 'Modals',
  },
];

export class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: this.getSuggestions(''),
    };

    this.onChange = this.onChange.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    });
  }

  onSuggestionsUpdateRequested({ value }) {
    this.setState({loading: true, suggestions: [{type: 'loading'}]});

    setTimeout(function() {
      this.setState({
        suggestions: this.getSuggestions(value),
        loading: false,
      });
    }.bind(this), 200);
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    let suggestions = suggestionExamples.filter(lang =>
      lang.text.toLowerCase().slice(0, inputLength) === inputValue
    );

    return suggestions.length ? suggestions : [{type: 'no-results'}];
  }

  getSuggestionValue(suggestion) { // when suggestion selected, this function tells
    return suggestion.text;                 // what should be the value of the input
  }

  renderSuggestion(suggestion) {
    if (this.state.loading) {
      return (
        <div>
          <i className='fa fa-spinner fa-spin' /> Loading...
        </div>
      );
    }

    if (suggestion.type === 'no-results') {
      return (
        <div>
          <i className='fa fa-exclamation-triangle' /> No results found, you may need to be more specific!
        </div>
      );
    }

    return (
      <span>{suggestion.text}</span>
    );
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search for...',
      value,
      onChange: this.onChange,
    };

    return (
      <Row>
        <Col grow={false} padding={0}>
          <i className='ion-ios-search-strong'></i>
        </Col>
        <Col padding={0}>
          <Autosuggest suggestions={suggestions}
            onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps} />
        </Col>
      </Row>
    );
  }
}
