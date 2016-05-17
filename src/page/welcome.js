import React from 'react';
import { Page, Panel } from 'src/components';
import { Row, Col } from 'react-flex-proto';

export class Welcome extends React.Component {
  render() {
    return (
      <Page title='React Webpack Skeleton'>
        <h2>Panels</h2>
        <Row>
          <Col padding={5}>
            <Panel>
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph.This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel title='This is a title'>
              This is a paragraph
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel className='color-widget' title='Red Paragraph'>
              <div className='red-text'>
                This is a red paragraph
              </div>
            </Panel>
          </Col>
        </Row>

        <h2>More Panels</h2>
        <Row>
          <Col padding={5}>
            <Panel>
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel title='Yellow paragraph' className='color-widget'>
              <div className='yellow-text'>
                This is a paragraph
              </div>
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel>
              This is a paragraph
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

