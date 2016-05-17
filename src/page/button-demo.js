import React from 'react';

import { Page, Panel, Button } from 'src/components';

import {Row, Col} from 'react-flex-proto';

export class ButtonDemo extends React.Component {
  render() {
    return (
      <Page title='Buttons'>
        <Row>
          <Col>
            <Panel title='Large Buttons' size='md'>
              <Button type='default' size='lg' />
              <Button type='add' size='lg' />
              <Button type='remove' size='lg' />
              <Button type='info' size='lg' />
              <Button type='warning' size='lg' />
              <Button type='success' size='lg' />
            </Panel>
          </Col>
          <Col>
            <Panel title='Extra Medium Buttons' size='md'>
              <Button type='default' size='xm' />
              <Button type='add' size='xm' />
              <Button type='remove' size='xm' />
              <Button type='info' size='xm' />
              <Button type='warning' size='xm' />
              <Button type='success' size='xm' />
            </Panel>
          </Col>
          <Col>
            <Panel title='Medium Buttons' size='md'>
              <Button type='default' />
              <Button type='add' />
              <Button type='remove' />
              <Button type='info' />
              <Button type='warning' />
              <Button type='success' />
            </Panel>
          </Col>
          <Col>
            <Panel title='Small Buttons' size='md'>
              <Button type='default' size='sm' />
              <Button type='add' size='sm' />
              <Button type='remove' size='sm' />
              <Button type='info' size='sm' />
              <Button type='warning' size='sm' />
              <Button type='success' size='sm' />
            </Panel>
          </Col>
          <Col>
            <Panel title='XS Buttons' size='md'>
              <Button type='default' size='xs' />
              <Button type='add' size='xs' />
              <Button type='remove' size='xs' />
              <Button type='info' size='xs' />
              <Button type='warning' size='xs' />
              <Button type='success' size='xs' />
            </Panel>
          </Col>
          <Col>
            <Panel title='Disabled Buttons' size='md'>
              <Button type='default' disabled={true} />
              <Button type='add' disabled={true} />
              <Button type='remove' disabled={true} />
              <Button type='info' disabled={true} />
              <Button type='warning' disabled={true} />
              <Button type='success' disabled={true} />
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

