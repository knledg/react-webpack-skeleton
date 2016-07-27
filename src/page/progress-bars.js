import React from 'react';
import _ from 'lodash';

import { Page, Panel, ProgressBar, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';

export class ProgressBars extends React.Component {

  state = {
    percentage: _.fill(Array(16), 0),
  }

  componentDidMount() {
    this.updatePercentages();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  updatePercentages() {
    let done = true;
    let percentage = _.map(this.state.percentage, (percent) => {
      let newPercent = percent + Math.floor(Math.random() * (15) + 0);
      if (newPercent >= 100) {
        return 100;
      }
      done = false;
      return newPercent;
    }
  );

    this.setState({percentage});
    if (! done ) {
      this.timer = setTimeout(e => this.updatePercentages(), Math.random(500) + 250);
    }
  }

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
          Progress Bars
      </Breadcrumbs>
    );
  }

  render() {
    return (
      <Page actionBar={this.renderBreadcrumbs()} title='Progress Bars ♥'>
        <Panel title='Basic'>
          <ProgressBar type='success' percentage={this.state.percentage[0]}/>
          <ProgressBar type='warning' percentage={this.state.percentage[1]}/>
          <ProgressBar type='danger' percentage={this.state.percentage[2]}/>
          <ProgressBar type='primary' percentage={this.state.percentage[3]}/>
        </Panel>
        <Panel title ='Striped'>
          <ProgressBar type='success' striped={true} percentage={this.state.percentage[4]}/>
          <ProgressBar type='warning' striped={true} percentage={this.state.percentage[5]}/>
          <ProgressBar type='danger' striped={true} percentage={this.state.percentage[6]}/>
          <ProgressBar type='primary' striped={true} percentage={this.state.percentage[7]}/>
        </Panel>
        <Panel title='Animated'>
          <ProgressBar type='success' animated={true} percentage={this.state.percentage[8]}/>
          <ProgressBar type='warning' animated={true} percentage={this.state.percentage[9]} />
          <ProgressBar type='danger' animated={true} percentage={this.state.percentage[10]}/>
          <ProgressBar type='primary' animated={true} percentage={this.state.percentage[11]}/>
        </Panel>
        <Panel title='With Labels'>
          <ProgressBar type='success' percentage={this.state.percentage[12]} label={`${this.state.percentage[12]}% Complete`}/>
          <ProgressBar type='warning' percentage={this.state.percentage[13]} label={` ${this.state.percentage[13]}% Complete`}/>
          <ProgressBar type='danger' percentage={this.state.percentage[14]} label={` ${this.state.percentage[14]}% Complete`}/>
          <ProgressBar type='primary' percentage={this.state.percentage[15]} label={` ${this.state.percentage[15]}% Complete`}/>
        </Panel>
      </Page>
    );
  }
}

