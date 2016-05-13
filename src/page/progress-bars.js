import React from 'react';

import { Page, Panel, ProgressBar } from 'src/components';

export const ProgressBars = React.createClass({
  render() {
    return (
      <Page title='Progress Bars'>
        <Panel title='Basic'>
          <ProgressBar type='success' percentage={25}/>
          <ProgressBar type='warning' percentage={50}/>
          <ProgressBar type='danger' percentage={75}/>
          <ProgressBar type='primary' percentage={100}/>
        </Panel>
        <Panel title ='Striped'>
          <ProgressBar type='success' striped={true} percentage={25}/>
          <ProgressBar type='warning' striped={true} percentage={50}/>
          <ProgressBar type='danger' striped={true} percentage={75}/>
          <ProgressBar type='primary' striped={true} percentage={100}/>
        </Panel>
        <Panel title='Animated'>
          <ProgressBar type='success' animated={true} percentage={25}/>
          <ProgressBar type='waning' animated={true} percentage={50} />
          <ProgressBar type='danger' animated={true} percentage={75}/>
          <ProgressBar type='primary' animated={true} percentage={100}/>
        </Panel>
        <Panel title='With Labels'>
          <ProgressBar type='success' percentage={25} label='25% Complete'/>
          <ProgressBar type='warning' percentage={50} label='50% Complete'/>
          <ProgressBar type='danger' percentage={75} label='75% Complete'/>
          <ProgressBar type='primary' percentage={100} label='100% Complete'/>
        </Panel>
      </Page>
    );
  },
});
