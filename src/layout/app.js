import React from 'react';

import { Sidebar, PageTop } from 'src/layout/components';

export const AppLayout = React.createClass({
  propTypes: {
    location: React.PropTypes.object.isRequired,
  },

  render() {
    // main - menu-collapsed
    return (
      <div>
        <main className=''>
          <Sidebar />
          <PageTop />

          <div className="al-main">
            <div className="al-content">
              <content-top></content-top>
              <div ui-view></div>
            </div>
          </div>

          <footer className="al-footer clearfix">
            <div className="al-footer-right">Created with <i className="ion-heart"></i></div>
            <div className="al-footer-main clearfix">
              <div className="al-copy">React Webpack Skeleton</div>
              <ul className="al-share clearfix">
                <li><i className="socicon socicon-facebook"></i></li>
                <li><i className="socicon socicon-twitter"></i></li>
                <li><i className="socicon socicon-google"></i></li>
                <li><i className="socicon socicon-github"></i></li>
              </ul>
            </div>
          </footer>

          <back-top></back-top>
        </main>

        <div id="preloader" ng-show="!$pageFinishedLoading">
          <div></div>
        </div>
      </div>
    );
  },
});
