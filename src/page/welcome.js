import React from 'react';
import { Page, Panel } from 'react-blur-admin';
import { Row, Col } from 'react-flex-proto';
import { GMap } from 'src/layout/components/gmap';

export class Welcome extends React.Component {

  render() {
    return (
      <Page title={process.env.APP_NAME}>
        <Row>
          <Col padding={5}>
            <Panel>
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel title='This is a title'>
              This is a paragraph
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel title='Red Paragraph'>
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
            <Panel title='Yellow paragraph'>
              <div className='yellow-text'>
                This is a paragraph
              </div>
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel title='Blue paragraph'>
              <div className='blue-text'>
                This is a paragraph
              </div>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col padding={5}>
            <Panel title='Google Map Component'>
              <GMap/>
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

