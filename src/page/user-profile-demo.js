import React from 'react';
import {Row, Col} from 'react-flex-proto';
import {ProgressBar, Input, Button, Switch, Panel, Select, Modal, Page, Breadcrumbs} from 'react-blur-admin';
import {Link} from 'react-router';

export class UserProfileDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      switches: _.fill(Array(5), false),
      switch0: true,
      switch1: false,
      switch2: false,
      switch3: true,
      switch4: true,
      switch5: false,
      addLinkModal: false,
    };
  }

  onSwitchChange(index) {
    let switches = this.state.switches;
    switches[index] = !switches[index];
    this.setState({ switches });
  }

  onSelectChange(key, value) {
    this.setState({ [key]: value});
  }

  onCloseModal(modalName) {
    this.setState({ [modalName]: false });
  }

  onRenderModal(modalName) {
    this.setState({ [modalName]: true });
  }

  onTextChange(key, event) {
    this.setState({ [key]: event.currentTarget.value });
  }

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
        Home
        </Link>
        Profile
      </Breadcrumbs>
    );
  }

  render() {
    return (
      <div>
        <Page title='Profile' actionBar={this.renderBreadcrumbs()}>
          <div className='profile-page'>
            <div className='panel panel-blur profile-page animated zoomIn'>
              <Panel>
                <Modal type='info' title='Add Account' buttonText='Save Changes' isOpen={this.state.addLinkModal} onClose={e => this.onCloseModal('addLinkModal')}>
                  <Row>
                    <Col>
                      Paste a link to your profile into the box below
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        onChange={e => this.onTextChange('link', e)}
                        placeholder='Link to profile'
                        hasFeedbackIcon={false}
                        value={this.state.link}
                     />
                    </Col>
                  </Row>
                </Modal>
                <div className='progress-info'>Your profile is 50% complete</div>
                <ProgressBar type='primary' animated={true} percentage={50} label='50%'/>
                <h3 className='with-line'>General Information</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group row clearfix'>
                      <label className='col-sm-3 control-label'>Picture</label>
                      <div className='col-sm-9'>
                        <div className='userpic-wrapper'>
                          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' height='200px' width='200px'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group row clearfix'>
                      <label className='col-sm-3 control-label'>First Name</label>
                      <div className='col-sm-9'>
                        <Input
                          onChange={e => this.onTextChange('firstName', e)}
                          placeholder='First Name'
                          hasFeedbackIcon={false}
                          value={this.state.firstName}
                         />
                      </div>
                    </div>
                    <div className='form-group row clearfix'>
                      <label className='col-sm-3 control-label'>Last Name</label>
                      <div className='col-sm-9'>
                        <Input
                          onChange={e => this.onTextChange('lastName', e)}
                          placeholder='Last Name'
                          hasFeedbackIcon={false}
                          value={this.state.lastName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group row clearfix'>
                      <label className='col-sm-3 control-label'>Occupation</label>
                      <div className='col-sm-9'>
                        <Input
                          onChange={e => this.onTextChange('occupation', e)}
                          placeholder='ex. Web Developer'
                          hasFeedbackIcon={false}
                          value={this.state.occupation}
                         />
                      </div>
                    </div>
                    <div className='form-group row clearfix'>
                      <label className='col-sm-3 control-label'>Department</label>
                      <div className='col-sm-9'>
                        <Select
                          placeholder='Select Department'
                          isSearchable={true}
                          options={[
                            { value: 1, label: 'Web Developer' },
                            { value: 2, label: 'Web Designer' },
                            { value: 3, label: 'IT/QA' },
                            { value: 4, label: 'Customer Service Representative' },
                            { value: 5, label: 'Admin' },
                            { value: 6, label: 'Other' },
                          ]}
                          onChange={value => this.setState({ selectOne: value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className='with-line'>Change Password</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <label className='col-sm-3 control-label'>Password</label>
                    <div className='col-sm-9'>
                      <Input
                        onChange={e => this.onTextChange('password', e)}
                        placeholder='*********'
                        hasFeedbackIcon={false}
                        value={this.state.password}
                       />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <label className='col-sm-3 control-label'>Confirm Password</label>
                    <div className='col-sm-9'>
                      <Input
                        onChange={e => this.onTextChange('confirmPassword', e)}
                        hasFeedbackIcon={false}
                        value={this.state.confirmPassword}
                       />
                    </div>
                  </div>
                </div>

                <h3 className='with-line'>Contact Information</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <label className='col-sm-3 control-label'>Email</label>
                    <div className='col-sm-9'>
                      <Input
                        onChange={e => this.onTextChange('email', e)}
                        placeholder='contact@email.com'
                        hasFeedbackIcon={false}
                        value={this.state.email}
                        />
                    </div>
                    <label className='col-sm-3 control-label'>Phone</label>
                    <div className='col-sm-9'>
                      <Input
                        onChange={e => this.onTextChange('phone', e)}
                        placeholder='000-000-0000'
                        hasFeedbackIcon={false}
                        value={this.state.phone}
                       />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <label className='col-sm-3 control-label'>Office Location</label>
                    <div className='col-sm-9'>
                      <Select
                        placeholder='Office Location'
                        isSearchable={true}
                        options={[
                          { value: 1, label: 'San Diego' },
                          { value: 2, label: 'Boston' },
                          { value: 3, label: 'Phoenix' },
                          { value: 4, label: 'San Antonio' },
                        ]}
                        onChange={value => this.setState({ selectOne: value })}
                        />
                    </div>
                    <label className='col-sm-3 control-label'>Room</label>
                    <div className='col-sm-9'>
                      <Input
                        onChange={e => this.onTextChange('room', e)}
                        placeholder='ex. 240'
                        hasFeedbackIcon={false}
                        value={this.state.room}
                      />
                    </div>
                  </div>
                </div>

                <h3 className='with-line'>Social Profiles</h3>
                <div className='social-profiles row clearfix'>
                  <div className='col-md-3 col-sm-4'>
                    <Link to='https://www.github.com/knledg/react-blur-admin' className='sn-link connected' target='_blank'>
                      <i className='socicon socicon-github'/>
                      <span>Github</span>
                      <em className='ion-ios-close-empty sn-link-close'/>
                    </Link>
                  </div>
                  <div className='col-md-3 col-sm-4'>
                    <a className='sn-link' onClick={e => this.onRenderModal('addLinkModal')}>
                      <i className='socicon socicon-linkedin'/>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                  <div className='col-md-3 col-sm-4'>
                    <a className='sn-link' onClick={e => this.onRenderModal('addLinkModal')}>
                      <i className='socicon socicon-facebook'/>
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div className='col-md-3 col-sm-4'>
                    <a className='sn-link' onClick={e => this.onRenderModal('addLinkModal')}>
                      <i className='socicon socicon-stackoverflow'/>
                      <span>Stack Overflow</span>
                    </a>
                  </div>
                  <div className='col-md-3 col-sm-4'>
                    <a className='sn-link' onClick={e => this.onRenderModal('addLinkModal')}>
                      <i className='socicon socicon-google'/>
                      <span>Google+</span>
                    </a>
                  </div>
                  <div className='col-md-3 col-sm-4'>
                    <a className='sn-link' onClick={e => this.onRenderModal('addLinkModal')}>
                      <i className='socicon socicon-twitter'/>
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>

                <h3 className='with-line'>Send Email Notifications</h3>
                <div className='notification row clearfix'>
                  <div className='col-sm-6'>
                    <div className='form-group row clearfix'>
                      <label className='col-xs-8'>
                        When I receive a message
                      </label>
                      <div className='col-xs-4'>
                        <Switch type='primary' isOn={this.state.switch0} onChange={e => this.onSwitchChange(0)}/>
                      </div>
                    </div>
                    <div className='form-group row clearfix'>
                      <label className='col-xs-8'>
                        When someone sends me an invitation
                      </label>
                      <div className='col-xs-4'>
                        <Switch type='primary' isOn={this.state.switch1} onChange={e => this.onSwitchChange(1)}/>
                      </div>
                    </div>
                    <div className='form-group row clearfix'>
                      <label className='col-xs-8'>
                        When profile information changes
                      </label>
                      <div className='col-xs-4'>
                        <Switch type='primary' isOn={this.state.switch2} onChange={e => this.onSwitchChange(2)}/>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group row clearfix'>
                      <label className='col-xs-8'>
                        When anyone logs into your account from a new device or browser
                      </label>
                      <div className='col-xs-4'>
                        <Switch type='primary' isOn={this.state.switch3} onChange={e => this.onSwitchChange(3)}/>
                      </div>
                    </div>
                    <div className='form-group row clearfix'>
                      <label className='col-xs-8'>
                        Weekly reports
                      </label>
                      <div className='col-xs-4'>
                        <Switch type='primary' isOn={this.state.switch4} onChange={e => this.onSwitchChange(4)}/>
                      </div>
                    </div>
                    <div className='form-group row clearfix'>
                      <label className='col-xs-8'>
                        Daily reports
                      </label>
                      <div className='col-xs-4'>
                        <Switch type='primary' isOn={this.state.switch5} onChange={e => this.onSwitchChange(4)}/>
                      </div>
                    </div>
                    <Row>
                      <Col align='right'>
                        <Button icon='fa fa-check-square-o' className='save-profile' type='primary' title='Update Profile'/>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </Page>
      </div>
    );
  }
}
