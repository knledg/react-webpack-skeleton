import React from 'react';
import { Page, Tabs, Tab, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';

export class TabsDemo extends React.Component {

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
          Tabs Demo
      </Breadcrumbs>
    );
  }

  render() {
    return (
      <Page actionBar={this.renderBreadcrumbs()} title='Tabs Demo'>
        <Tabs
          align='top'
          startTab={2} >
          <Tab title='Tab Component'>
            <h2>The Tab Component</h2>
            <p>Takes one prop <code>title</code>, which is a <code>String</code></p>
            <p>Then takes children elements</p>
            <p>It should sit inside of the <code>Tabs</code> Component</p>
          </Tab>
          <Tab title='Tabs Component'>
            <h2>The Tabs Component</h2>
            <p>This component manages the tabs and layouts them out according to the alignment</p>
            <p>This component props:</p>
            <ul>
              <li>
                <div>
                  <p>Prop: <code>align</code></p>
                  <p>Type: <code>String</code></p>
                  <p>Values: <code>top|left|right</code></p>
                  <p>Description: Aligns the tabs to either the top, left, or right.</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Prop: <code>size</code></p>
                  <p>Type: <code>String</code></p>
                  <p>Values: <code>xs|sm|md|lg|auto|none</code></p>
                  <p>Description: Size of Panel the tabs are to sit in.</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Prop: <code>startTab</code></p>
                  <p>Type: <code>number</code></p>
                  <p>Values: <code>[1..number of tabs]</code></p>
                  <p>Description: pass this prop to tell tabs which tab to display frist.</p>
                </div>
              </li>
            </ul>
          </Tab>
        </Tabs>

        <Tabs align='left'>
          <Tab title='Left Side Tabs'>
            <p>Some content can go here!</p>
          </Tab>
          <Tab title='Content Tab'>
            <p>Any Content that you want!</p>
          </Tab>
        </Tabs>

        <Tabs align='right'>
          <Tab title='Right Side Tabs'>
            <p>Content!</p>
          </Tab>
          <Tab title='PropTypes'>
            <p>PropTypes for Dayz</p>
          </Tab>
        </Tabs>
      </Page>
    );
  }
}
