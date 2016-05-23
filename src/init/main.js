/* global window, document */

import { render } from 'react-dom';

import { AppRouter } from 'src/init/router';

import 'react-flex-proto/styles/flex.css';
import 'react-blur-admin/dist/assets/styles/react-blur-admin.min.css';

// Initializing touch events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/* eslint-disable max-statements */
function init() {
  render(AppRouter, document.getElementById('react-app'));
}
/* eslint-enable max-statements */

document.addEventListener('DOMContentLoaded', function() {
  try {
    window.localStorage.test = 'You appear to be unable to write to localStorage';
  } catch (e) {
    document.body.innerHTML = `
      <div class="mobile-incompatibility">
        <h4>Your browser is not able to write to local storage.</h4>
        <p>If you are using private mode please disable it.</p>
        <p>Otherwise your browser is not supported or you have local storage turned off in your browser preferences.</p>
      </div>
    `;
  }
  init();
});
