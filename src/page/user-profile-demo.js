import React from 'react';
import {Row, Col} from 'react-flex-proto';
import {ProgressBar, Input, Button, Switch, Panel, Select, Modal} from 'react-blur-admin';
import {Link} from 'react-router';


export class UserProfileDemo extends React.Component {

  static propTypes = {
    picture: React.PropTypes.string,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    department: React.PropTypes.string,
    occupation: React.PropTypes.string,
    password: React.PropTypes.string,
    email: React.PropTypes.string,
    phone: React.PropTypes.string,
    officeLocation: React.PropTypes.string,
    room: React.PropTypes.string,
    emailNotifications: React.PropTypes.bool,
    socialProfiles: React.PropTypes.bool,
    percentage: React.PropTypes.number,
  }

  static defaultProps = {
    picture: 'http://www.tourniagara.com/wp-content/uploads/2014/10/default-img.gif',
    firstName: '',
    lastName: '',
    department: '',
    occupation: '',
    password: '',
    email: '',
    phone: '',
    officeLocation: '',
    room: '',
    emailNotifications: false,
    socialProfiles: false,
    percentage: 50,
  }

  constructor(props) {
    super(props);
    this.state = {
      switches: _.fill(Array(5), false),
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false,
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

  // renderProfilePicture() {
  //   if (this.props.picture) {
  //     return {
  //       <img src={this.props.picture}/>
  //     } else null;
  //   }
  // }

  onCloseModal(modalName) {
    this.setState({ [modalName]: false });
  }

  onRenderModal(modalName) {
    this.setState({ [modalName]: true });
  }

  render() {
    return (
      <div>
        <Modal type='success' title='Woot' isOpen={this.state.successModal} onClose={e => this.onCloseModal('successModal')}>
          You did a thing!
        </Modal>
        <ProgressBar type='primary' percentage={50} label={`${this.state.percentage}% Complete`}/>
        <span>
          <img src={this.props.picture} height='200px' width='285px'/>
        </span>
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='First Name'
          placeholder='First Name'
          hasFeedbackIcon={false}
         />
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
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Last Name'
          placeholder='Last Name'
          hasFeedbackIcon={false}
         />
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Password'
          placeholder='*********'
          hasFeedbackIcon={false}
         />
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Confirm Password'
          hasFeedbackIcon={false}
         />
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Occupation'
          placeholder='ex. Web Developer'
          hasFeedbackIcon={false}
         />
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Email'
          placeholder='contact@email.com'
          hasFeedbackIcon={false}
         />
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
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Phone'
          placeholder='000-000-0000'
          hasFeedbackIcon={false}
         />
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Room'
          placeholder='ex. 240'
          hasFeedbackIcon={false}
        />
        <Input
          onChange={e => this.onTextChange('success', e)}
          onValidate={e => true}
          label='Office Location'
          placeholder='ex. Phoenix, AZ'
          hasFeedbackIcon={false}
        />
        <Panel title='Social Profiles'>
          <div className='col-md-3 col-sm-4'>
            <Link to='https://www.linkedin.com' className='sn-link connected' target='_blank' onClick={e => this.onRenderModal('successModal')}>
              <i className='socicon socicon-linkedin'/>
              <span>LinkedIn</span>
              <em className='ion-ios-close-empty sn-link-close'/>
            </Link>
          </div>
          <div className='col-md-3 col-sm-4'>
            <Link to='https://www.facebook.com' className='sn-link connected' target='_blank'>
              <i className='socicon socicon-facebook'/>
              <span>Facebook</span>
              <em className='ion-ios-close-empty sn-link-close'/>
            </Link>
          </div>
          <div className='col-md-3 col-sm-4'>
            <Link to='https://www.github.com' className='sn-link connected' target='_blank'>
              <i className='socicon socicon-github'/>
              <span>Github</span>
              <em className='ion-ios-close-empty sn-link-close'/>
            </Link>
          </div>
          <div className='col-md-3 col-sm-4'>
            <Link to='https://www.twitter.com' className='sn-link connected' target='_blank'>
              <i className='socicon socicon-twitter'/>
              <span>Twitter</span>
              <em className='ion-ios-close-empty sn-link-close'/>
            </Link>
          </div>
          <div className='col-md-3 col-sm-4'>
            <Link to='https://www.stackoverflow.com' className='sn-link connected' target='_blank'>
              <i className='socicon socicon-stackoverflow'/>
              <span>Stack Overflow</span>
              <em className='ion-ios-close-empty sn-link-close'/>
            </Link>
          </div>
          <div className='col-md-3 col-sm-4'>
            <Link to='https://www.googleplus.com' className='sn-link connected' target='_blank'>
              <i className='socicon socicon-google'/>
              <span>Google+</span>
              <em className='ion-ios-close-empty sn-link-close'/>
            </Link>
          </div>
        </Panel>
        <Col>
          <Panel title='Send Email Notifications'>
            <Row>
              <Col grow={false}>
              When I receive a message
                <Switch type='primary' isOn={this.state.switches[0]} onChange={e => this.onSwitchChange(0)}/>
              </Col>
              <Col grow={false}>
              When someone sends me an invitation
                <Switch type='primary' isOn={this.state.switches[1]} onChange={e => this.onSwitchChange(1)}/>
              </Col>
              <Col grow={false}>
              When profile information changes
                <Switch type='primary' isOn={this.state.switches[2]} onChange={e => this.onSwitchChange(2)}/>
              </Col>
              <Col grow={false}>
              When anyone logs into your account from a new device or browser
                <Switch type='primary' isOn={this.state.switches[3]} onChange={e => this.onSwitchChange(3)}/>
              </Col>
              <Col grow={false}>
              Weekly reports
                <Switch type='primary' isOn={this.state.switches[4]} onChange={e => this.onSwitchChange(4)}/>
              </Col>
              <Col grow={false}>
              Daily reports
                <Switch type='primary' isOn={this.state.switches[4]} onChange={e => this.onSwitchChange(4)}/>
              </Col>
              </Row>
              <Row>
              <Col>
              <Button icon='fa fa-check-square-o' type='primary' title='Update Profile'/>
              </Col>
              </Row>
          </Panel>
        </Col>
      </div>
    );
  }
}
